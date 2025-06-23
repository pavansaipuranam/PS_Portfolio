// import React from "react";
// import styles from "./Navbar.module.css";

// const Navbar = () => (
//   <nav className={styles.navbar}>
//     <div className={styles.logo}>
//       <span className={styles.green}>PAVAN SAI</span><span className={styles.white}> PURANAM</span>
//     </div>
//     <ul className={styles.navList}>
//       <li><a href="#home">Home</a></li>
//       <li><a href="#about">About</a></li>
//       <li><a href="#projects">Projects</a></li>
//       <li><a href="#skills">Skills</a></li>
      
//       <li><a href="#contact">Contact</a></li>
//     </ul>
//   </nav>
// );

// export default Navbar;


import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.green}>PAVAN SAI</span><span className={styles.white}> PURANAM</span>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`${styles.navList} ${menuOpen ? styles.active : ""}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#internships" onClick={closeMenu}>Internships</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
