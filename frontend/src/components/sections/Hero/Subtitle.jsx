import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';

export default function Subtitle({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  pauseDuration = 3000,
  children,             
  ...props
}) {
  // Turn children/text into an array of strings
  const texts = (() => {
    if (Array.isArray(children)) {
      return children.map(String);
    }
    if (typeof children === 'string') {
      return [children];
    }
    if (Array.isArray(text)) {
      return text.map(String);
    }
    if (typeof text === 'string') {
      return [text];
    }
    return [''];
  })();

  const [currentIndex, setCurrentIndex] = useState(0);
  const activeText = texts[currentIndex] || '';

  const [displayText, setDisplayText] = useState(activeText);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState(new Set());
  const [hasAnimated, setHasAnimated] = useState(false);

  const containerRef = useRef(null);
  const pauseTimeoutRef = useRef(null);

  // Whenever the active text changes, reset state for a fresh animation
  useEffect(() => {
    setDisplayText(activeText);
    setRevealedIndices(new Set());
    setIsScrambling(false);
  }, [activeText]);

  useEffect(() => {
    let interval;
    let currentIteration = 0;

    if (!activeText) return;

    const getNextIndex = revealedSet => {
      const textLength = activeText.length;
      switch (revealDirection) {
        case 'start':
          return revealedSet.size;
        case 'end':
          return textLength - 1 - revealedSet.size;
        case 'center': {
          const middle = Math.floor(textLength / 2);
          const offset = Math.floor(revealedSet.size / 2);
          const nextIndex =
            revealedSet.size % 2 === 0 ? middle + offset : middle - offset - 1;

          if (
            nextIndex >= 0 &&
            nextIndex < textLength &&
            !revealedSet.has(nextIndex)
          ) {
            return nextIndex;
          }
          for (let i = 0; i < textLength; i++) {
            if (!revealedSet.has(i)) return i;
          }
          return 0;
        }
        default:
          return revealedSet.size;
      }
    };

    const availableChars = useOriginalCharsOnly
      ? Array.from(new Set(activeText.split(''))).filter(char => char !== ' ')
      : characters.split('');

    const shuffleText = (originalText, currentRevealed) => {
      if (useOriginalCharsOnly) {
        const positions = originalText.split('').map((char, i) => ({
          char,
          isSpace: char === ' ',
          index: i,
          isRevealed: currentRevealed.has(i)
        }));

        const nonSpaceChars = positions
          .filter(p => !p.isSpace && !p.isRevealed)
          .map(p => p.char);

        for (let i = nonSpaceChars.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [nonSpaceChars[i], nonSpaceChars[j]] = [
            nonSpaceChars[j],
            nonSpaceChars[i]
          ];
        }

        let charIndex = 0;
        return positions
          .map(p => {
            if (p.isSpace) return ' ';
            if (p.isRevealed) return originalText[p.index];
            return nonSpaceChars[charIndex++];
          })
          .join('');
      } else {
        return originalText
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (currentRevealed.has(i)) return originalText[i];
            return availableChars[Math.floor(Math.random() * availableChars.length)];
          })
          .join('');
      }
    };

    const goToNextTextIfAny = () => {
      // clear any existing pause timeout first
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }

      pauseTimeoutRef.current = setTimeout(() => {
        // loop back to first when reaching the last
        setCurrentIndex(prevIndex => {
          if (texts.length === 0) return 0;
          return (prevIndex + 1) % texts.length;
        });
      }, pauseDuration);
    };

    if (isHovering) {
      setIsScrambling(true);
      interval = setInterval(() => {
        setRevealedIndices(prevRevealed => {
          if (sequential) {
            // reveal char by char
            if (prevRevealed.size < activeText.length) {
              const nextIndex = getNextIndex(prevRevealed);
              const newRevealed = new Set(prevRevealed);
              newRevealed.add(nextIndex);
              setDisplayText(shuffleText(activeText, newRevealed));
              return newRevealed;
            } else {
              // current text done
              clearInterval(interval);
              setIsScrambling(false);
              setDisplayText(activeText);
              goToNextTextIfAny();
              return prevRevealed;
            }
          } else {
            // global scrambling, no per-char reveal
            setDisplayText(shuffleText(activeText, prevRevealed));
            currentIteration++;
            if (currentIteration >= maxIterations) {
              clearInterval(interval);
              setIsScrambling(false);
              setDisplayText(activeText);
              goToNextTextIfAny();
            }
            return prevRevealed;
          }
        });
      }, speed);
    } else {
      setDisplayText(activeText);
      setRevealedIndices(new Set());
      setIsScrambling(false);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [
    isHovering,
    activeText,
    speed,
    maxIterations,
    sequential,
    revealDirection,
    characters,
    useOriginalCharsOnly,
    texts.length,
    animateOn,
    pauseDuration
  ]);

  // Intersection observer: trigger sequence when in view
  useEffect(() => {
    if (animateOn !== 'view' && animateOn !== 'both') return;

    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsHovering(true);
          setHasAnimated(true);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [animateOn, hasAnimated]);

  const hoverProps =
    animateOn === 'hover' || animateOn === 'both'
      ? {
          onMouseEnter: () => setIsHovering(true),
          onMouseLeave: () => setIsHovering(false)
        }
      : {};

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap ${parentClassName}`}
      {...hoverProps}
      {...props}
    >
      {/* Screen reader text */}
      <span className="sr-only">{activeText}</span>

      {/* Visual text */}
      <span aria-hidden="true">
        {displayText.split('').map((char, index) => {
          const isRevealedOrDone =
            revealedIndices.has(index) || !isScrambling || !isHovering;

          return (
            <span
              key={index}
              className={isRevealedOrDone ? className : encryptedClassName}
            >
              {char}
            </span>
          );
        })}
      </span>
    </motion.span>
  );
}
