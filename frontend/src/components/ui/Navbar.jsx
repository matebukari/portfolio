import { useEffect, useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-2 left-1/2 transform -translate-x-1/2
        z-20 rounded-xl overflow-hidden
        bg-black/10 backdrop-blur-[3px] border border-neutral-400/20
        transition-all duration-300
        ${scrolled ? "w-3/5" : "w-5/6"}
      `}
    >
      <div className="relative w-full px-6 h-16 flex items-center justify-center">

        {/* Logo */}
        <NavbarLogo isScrolled={scrolled}/>

        {/* Links */}
        <NavbarLinks isScrolled={scrolled}/>

      </div>
    </nav>
  );
}
