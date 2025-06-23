// import React from "react";
// import styles from "./Footer.module.css";

// const Footer = () => (
//   <footer className={styles.footer}>
//     <p>&copy; {new Date().getFullYear()} PAVAN SAI PURANAM. All rights reserved.</p>
//   </footer>
// );

// export default Footer;

import React from "react";
import styles from "./Footer.module.css";
import resume from "../assets/resume.pdf"; 

const Footer = () => (
  <footer className={styles.footer}>
    <h3 className={styles.message}>
      I'm currently open to job opportunities! Let’s work together.
    </h3>
    <h4 className={styles.message}>Drop a message in Contact box to connect</h4>
    <a href={resume} target="_blank" rel="noopener noreferrer" className={styles.hireButton}>
      Hire Me
    </a>
    <p className={styles.copy}>© {new Date().getFullYear()} Pavan Sai Puranam. All rights reserved.</p>
  </footer>
);

export default Footer;
