import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { motion } from 'framer-motion';

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const HeroTitle = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:',
  className = '',
  style = {},
}) => {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const split = SplitText.create(rootRef.current.querySelector('p'), {
      type: 'words,chars',
      charsClass: 'inline-block will-change-transform',
      wordsClass: 'inline-block'
    });

    split.chars.forEach(el => {
      const c = el;
      gsap.set(c, { attr: { 'data-content': c.innerHTML } });
    });

    const handleMove = e => {
      split.chars.forEach(el => {
        const c = el;
        const { left, top, width, height } = c.getBoundingClientRect();
        const dx = e.clientX - (left + width / 2);
        const dy = e.clientY - (top + height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          gsap.to(c, {
            overwrite: true,
            duration: duration * (1 - dist / radius),
            scrambleText: {
              text: c.dataset.content || '',
              chars: scrambleChars,
              speed
            },
            ease: 'none'
          });
        }
      });
    };

    const el = rootRef.current;
    el.addEventListener('pointermove', handleMove);

    return () => {
      el.removeEventListener('pointermove', handleMove);
      split.revert();
    };
  }, [radius, duration, speed, scrambleChars]);

  return (
    <motion.div
      initial={{
          y: 50,
          opacity: 0,
        }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          type: "tween",
          duration: 0.3,
          ease: "easeOut",
        }}
      ref={rootRef}
      className={`font-extrabold text-5xl sm:text-6xl md:text-7xl
        whitespace-normal break-normal hyphens-none ${className}`}
      style={style}
    >
      <p>Full Stack Developer</p>
    </motion.div>
  );
};

export default HeroTitle;
