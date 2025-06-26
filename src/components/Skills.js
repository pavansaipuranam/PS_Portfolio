// import React from "react";
// import styles from "./Skills.module.css";

// const skills = [
//   { name: "Java", icon: "/skills/java.png" },
//   { name: "Python", icon: "/skills/python.png" },
//   { name: "HTML", icon: "/skills/html-5.png" },
//   { name: "CSS", icon: "/skills/css-3.png" },
//   { name: "JavaScript", icon: "/skills/java-script.png" },
//   { name: "React", icon: "/skills/react.png" },
//   { name: "MySQL", icon: "/skills/mysql.png" },
//   { name: "Django", icon: "/skills/django.png" },
//   { name: "Github", icon: "/skills/github2.png" },
//   { name: "Power Bi", icon: "/skills/powerbi.png" },
// ];

// const Skills = () => (
//   <section id="skills" className={styles.skills}>
//     <h2>Skills</h2>
//     <div className={styles.container}>
//       <div className={styles.grid}>
//         {skills.map((skill, index) => (
//   <div
//     key={index}
//     className={styles.card}
//     style={{ "--i": index }}
//   >
//     <img src={skill.icon} alt={skill.name} className={styles.icon} />
//     <p>{skill.name}</p>
//   </div>
// ))}
//       </div>
//     </div>
//   </section>
// );

// export default Skills;

import React from "react";
import styles from "./Skills.module.css";
import { motion } from "framer-motion";

const skills = [
  { name: "Java", icon: "/skills/java.png" },
  { name: "Python", icon: "/skills/python.png" },
  { name: "HTML", icon: "/skills/html-5.png" },
  { name: "CSS", icon: "/skills/css-3.png" },
  { name: "JavaScript", icon: "/skills/java-script.png" },
  { name: "React JS", icon: "/skills/react.png" },
  { name: "MySQL", icon: "/skills/mysql.png" },
  { name: "Django", icon: "/skills/django.png" },
  { name: "Github", icon: "/skills/github2.png" },
  { name: "Power Bi", icon: "/skills/powerbi.png" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => (
  <motion.section id="skills" className={styles.skills}
    initial="hidden" whileInView="visible"viewport={{ once: true, amount: 0.3 }}
    variants={containerVariants}>
    <motion.h2 variants={itemVariants}>
      <span className={styles.green}>Skills</span>{' '}
      <span className={styles.white}>Stack</span>
    </motion.h2>
    <motion.div className={styles.container} variants={itemVariants}>
      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <motion.div key={index} className={styles.card} variants={itemVariants}>
            <img src={skill.icon} alt={skill.name} className={styles.icon} />
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </motion.section>
);

export default Skills;

