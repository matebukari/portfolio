import { useEffect, useState } from "react";

const sections = ["home", "about", "projects", "contact"];

const NavbarLinks = ({ isScrolled }) => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `
      cursor-pointer transition
      ${activeSection === id
        ? "text-purple-400"
        : "text-white hover:text-purple-400"}
    `;

  return (
    <ul
      className={`
        flex space-x-4 sm:space-x-6 md:space-x-8
        text-sm sm:text-base md:text-xl font-bold
        absolute top-1/2 -translate-y-1/2
        left-1/2 -translate-x-1/2
        transition-none
        md:transition-all md:duration-500 md:ease-out
        ${
          isScrolled
            ? "md:left-1/2 md:right-auto md:-translate-x-1/2"
            : "md:right-6 md:left-auto md:translate-x-0"
        }
      `}
    >
      <li onClick={() => scrollToSection("home")} className={linkClass("home")}>
        Home
      </li>

      <li onClick={() => scrollToSection("about")} className={linkClass("about")}>
        About
      </li>

      <li onClick={() => scrollToSection("projects")} className={linkClass("projects")}>
        Projects
      </li>

      <li onClick={() => scrollToSection("contact")} className={linkClass("contact")}>
        Contact
      </li>
    </ul>
  );
};

export default NavbarLinks;
