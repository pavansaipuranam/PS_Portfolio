// import React from "react";
// import styles from "./About.module.css";

// const About = () => (
//   <section id="about" className={styles.about}>
//     <h2><span className={styles.green}>About</span> Me</h2>

//     <div className={styles.content}>
//       <p>
//         I’m Pavan Sai Puranam, a Computer Science graduate and passionate Software & frontend developer with a strong foundation in full stack development and AI technologies. I specialize in building smart, scalable, and user-friendly web applications using modern tools like React, HTML, CSS, and JavaScript.
//         Continuously learning and adapting to the latest in web development and technology, I’m driven to create impactful, real-world solutions through clean and efficient code.
//       </p>
//       <p>
//         I’m a certified Java IT Specialist and have interned at leading organizations including BlackBuck Engineers, Techwing, and APSSDC, where I honed my skills in Java, Python, and AI-driven solutions. 
//         Beyond coding, I enjoy learning new technologies, collaborating on open-source projects, and solving real-world problems through design and code.
//       </p>
//       <p>
//         Fluent in English, Telugu, and Hindi, I bring strong communication, adaptability, and problem-solving skills to any team. When I’m not coding, you’ll find me drawing, exploring new places, or diving deep into tech trends.
//       </p>

//       <div className={styles.infoGrid}>
//   <div className={styles.row}>
//     <div><span className={styles.green}>Name:</span> Pavan Sai Puranam</div>
//     <div><span className={styles.green}>Place:</span> Rajahmungry, India</div>
//   </div>
//   <div className={styles.row}>
//     <div><span className={styles.green}>Phone:</span> +91 8886981258</div>
//     <div><span className={styles.green}>Email:</span> pavansaipuranam84@gmail.com</div>
//   </div>
// </div>

//     </div>
//   </section>
// );

// export default About;

import React from "react";
import styles from "./About.module.css";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const About = () => (
  <section id="about" className={styles.about}>
    <motion.h2
      className={styles.heading}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <span className={styles.green}>About</span> Me
    </motion.h2>

    <motion.div
      className={styles.content}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      custom={1}
    >
      {/* <p>
        I’m Pavan Sai Puranam, a Computer Science graduate and passionate Software & frontend developer with a strong foundation in full stack development and AI technologies. I specialize in building smart, scalable, and user-friendly web applications using modern tools like React, HTML, CSS, and JavaScript.
        Continuously learning and adapting to the latest in web development and technology, I’m driven to create impactful, real-world solutions through clean and efficient code.
      </p>
      <p>
        I’m a certified Java IT Specialist and have interned at leading organizations including BlackBuck Engineers, Techwing, and APSSDC, where I honed my skills in Java, Python, and AI-driven solutions. 
        Beyond coding, I enjoy learning new technologies, collaborating on open-source projects, and solving real-world problems through design and code.
      </p>
      <p>
        Fluent in English, Telugu, and Hindi, I bring strong communication, adaptability, and problem-solving skills to any team. When I’m not coding, you’ll find me drawing, exploring new places, or diving deep into tech trends.
      </p> */}
      <p>
        I’m Pavan Sai Puranam, a Computer Science graduate passionate about software and full-stack development and AI technologies. I specialize in building scalable, user-friendly web applications using modern tools like React, HTML, CSS, and JavaScript. Continuously learning and adapting, I aim to create impactful solutions through clean, efficient code. 
        
      </p>
      <p>I'm a certified Java IT Specialist and completed my internships with organizations such as BlackBuck Engineers, Techwing, and APSSDC, gaining hands-on experience in Java, Python, and AI. Fluent in English, Telugu, and Hindi, I bring strong communication, adaptability, and problem-solving skills to every team. Outside of coding, I enjoy drawing, exploring new places, and staying updated with tech trends.</p>

      <motion.div
        className={styles.infoGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={2}
      >
        <div className={styles.row}>
          <div>
            <span className={styles.green}>Name:</span> Pavan Sai Puranam
          </div>
          <div>
            <span className={styles.green}>Place:</span> Rajahmungry, India
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <span className={styles.green}>Phone:</span> +91 8886981258
          </div>
          <div>
            <span className={styles.green}>Email:</span> pavansaipuranam84@gmail.com
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default About;
