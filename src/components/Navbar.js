// import React, { useState, useEffect } from "react";
// import styles from "./Navbar.module.css";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       if (offset > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
//       <div className={styles.logo}>
//         <span className={styles.green}>PAVAN SAI</span>
//         <span className={styles.white}> PURANAM</span>
//       </div>

//       <div className={styles.hamburger} onClick={toggleMenu}>
//         {menuOpen ? <FaTimes /> : <FaBars />}
//       </div>

//       <ul className={`${styles.navList} ${menuOpen ? styles.active : ""}`}>
//         <li><a href="#home" onClick={closeMenu}>Home</a></li>
//         <li><a href="#about" onClick={closeMenu}>About</a></li>
//         <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
//         <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
//         <li><a href="#internships" onClick={closeMenu}>Internships</a></li>
//         <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

const sections = ["home", "about", "projects", "skills", "internships", "contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <span className={styles.green}>PAVAN SAI</span>
        <span className={styles.white}> PURANAM</span>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`${styles.navList} ${menuOpen ? styles.active : ""}`}>
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              onClick={closeMenu}
              className={activeSection === section ? styles.activeLink : ""}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
