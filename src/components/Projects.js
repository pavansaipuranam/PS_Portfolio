// import React from "react";
// import styles from "./Projects.module.css";
// import projects from "../data/projects";

// const Projects = () => (
//   <section id="projects" className={styles.projects}>
//     <h2><span className={styles.green}>Projects</span></h2>
//     <div className={styles.projectGrid}>
//       {projects.map((project, index) => (
//         <div key={index} className={styles.card}>
//           <img src={project.image} alt={project.title} className={styles.image} />
//           <div className={styles.content}>
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             <p>{project.date}</p>
//             <a href={project.link} target="_blank" rel="noopener noreferrer">
//               <button>View Project</button>
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default Projects;

// import React from "react";
// import styles from "./Projects.module.css";
// import projects from "../data/projects";
// import { motion } from "framer-motion";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//       delayChildren: 0.2,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

// const Projects = () => (
//   <motion.section
//     id="projects"
//     className={styles.projects}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.3 }}
//     variants={containerVariants}
//   >
//     <motion.h2 variants={cardVariants}>
//       <span className={styles.green}>Projects</span>
//     </motion.h2>

//     <motion.div className={styles.projectGrid} variants={containerVariants}>
//       {projects.map((project, index) => (
//         <motion.div key={index} className={styles.card} variants={cardVariants}>
//           <img src={project.image} alt={project.title} className={styles.image} />
//           <div className={styles.content}>
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             <p>{project.date}</p>
//             <a href={project.link} target="_blank" rel="noopener noreferrer">
//               <button>View Project</button>
//             </a>
//           </div>
//         </motion.div>
//       ))}
//     </motion.div>
//   </motion.section>
// );

// export default Projects;


// import React from "react";
// import styles from "./Projects.module.css";
// import projects from "../data/projects";
// import { motion } from "framer-motion";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//       delayChildren: 0.2,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

// const Projects = () => (
//   <motion.section
//     id="projects"
//     className={styles.projects}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: false, amount: 0.2 }}
//     variants={containerVariants}
//   >
//     <motion.h2 variants={cardVariants}>
//       <span className={styles.green}>Projects</span>
//     </motion.h2>

//     <motion.div className={styles.projectGrid} variants={containerVariants}>
//       {projects.map((project, index) => (
//         <motion.div
//           key={index}
//           className={styles.card}
//           variants={cardVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           <img src={project.image} alt={project.title} className={styles.image} />
//           <div className={styles.content}>
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             <p>{project.date}</p>
//             <a href={project.link} target="_blank" rel="noopener noreferrer">
//               <button>View Project</button>
//             </a>
//           </div>
//         </motion.div>
//       ))}
//     </motion.div>
//   </motion.section>
// );

// export default Projects;

import React from "react";
import styles from "./Projects.module.css";
import projects from "../data/projects";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Projects = () => (
  <section id="projects" className={styles.projects}>
    <h2>
      <span className={styles.green}>Projects</span> Vault
    </h2>

    <div className={styles.projectGrid}>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={styles.card}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src={project.image} alt={project.title} className={styles.image} />
          <div className={styles.content}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.date}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button>View Project</button>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
