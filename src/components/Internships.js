// import React from "react";
// import styles from "./Internships.module.css";

// const internships = [
//   {
//     Year:"ChatGPT & Gen AI",
//     company: "BlackBuck Engineers",
//     duration: "May 2025 - July 2025",
//     description: "Worked on Java Spring Boot microservices and contributed to real-time logistics platform development.",
//     certificate: "/certificates/BLACKBUCKS_CERTIFICATE.pdf"
//   },
//   {
//     Year:"Artificial Inteligece",
//     company: "Aimers",
//     duration: "May 2024 - Jul 2024",
//     description: "Learned AI fundamentals, developed mini ML projects, and completed certification on AI integration.",
//     certificate: "/certificates/apssdc.pdf"
//   },
//   {
//     Year:"Full Stack Java",
//     company: "Techwing",
//     duration: "Nov 2023 - Aug 2024",
//     description: "Interned as a Python developer building automation scripts for client reporting and data processing.",
//     certificate: "/certificates/Java_Certification.pdf"
//   },
//   {
//     Year:"Django",
//     company: "APSSDC",
//     duration: "May 2023 - Jul 2022",
//     description: "Learned AI fundamentals, developed mini ML projects, and completed certification on AI integration.",
//     certificate: "/certificates/DJANGO_CERTIFICATE.pdf"
//   },
// ];

// const Internships = () => (
//   <section id="internships" className={styles.internships}>
//     <h2 className={styles.white}><span className={styles.heading}>Internships</span> Timeline</h2>

//     {/* 🔹 Add Container Here */}
//     <div className={styles.container}>
//       <div className={styles.timeline}>
//         {internships.map((internship, idx) => (
//           <div key={idx} className={styles.entry}>
//             <div className={styles.circle}></div> <h2>{internship.Year}</h2>
//             <div className={styles.line}></div>
//             <h3>{internship.company}</h3>
//             <span className={styles.duration}>{internship.duration}</span>
//             <p>{internship.description}</p>
//             <a href={internship.certificate} target="_blank" rel="noopener noreferrer">View Certificate</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default Internships;



import React from "react";
import styles from "./Internships.module.css";
import { motion } from "framer-motion";

const internships = [
  {
    Year: "ChatGPT & Gen AI",
    company: "BlackBuck Engineers",
    duration: "May 2025 - July 2025",
    description: "Completed a hands-on internship at Blackbucks focused on ChatGPT & GenAI, developed a multilingual chatbot called PolyGlot using Google Gemini.",
    certificate: "/certificates/BLACKBUCKS_CERTIFICATE.pdf"
  },
  {
    Year: "Full Stack Java",
    company: "Techwing",
    duration: "Nov 2023 - Aug 2024",
    description: "Successfully pursued a Java Full Stack internship at Techwing and certified as a Java IT Specialist, building frontend projects and a full stack Java application.",
    certificate: "/certificates/Java_Certification.pdf"
  },
  {
    Year: "AI & ML",
    company: "AIMERS Society",
    duration: "May 2024 - Jul 2024",
    description: "Acquired AI fundamentals, developed mini ML projects, and certified as an Artificial Inteligence & Mechine Learning intern from AIMER Society.",
    certificate: "/certificates/AIMERS.pdf"
  },
  {
    Year: "Django",
    company: "APSSDC",
    duration: "May 2023 - Jul 2023",
    description: "Skilled in Django and developed projects with CRUD operations, including an Orphanage Management system with features to enhance operational efficiency.",
    certificate: "/certificates/DJANGO_CERTIFICATE.pdf"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const entryVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.6, ease: "easeOut",},
  },
};

const Internships = () => (
  <motion.section
    id="internships"
    className={styles.internships}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariants}
  >
    <motion.h2 variants={entryVariants} className={styles.white}>
      <span className={styles.heading}>Internships</span> & Certificates
    </motion.h2>

    <div className={styles.container}>
      <div className={styles.timeline}>
        {internships.map((internship, idx) => (
          <motion.div
            key={idx}
            className={styles.entry}
            variants={entryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.circle}></div>
            <h2>{internship.Year}</h2>
            <div className={styles.line}></div>
            <h3>{internship.company}</h3>
            <span className={styles.duration}>{internship.duration}</span>
            <p>{internship.description}</p>
            <a href={internship.certificate} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Internships;
