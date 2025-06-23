// import React, { useRef } from "react";
// import emailjs from "emailjs-com";
// import styles from "./Contact.module.css";

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_sekba8m",   
//         "template_4oggpqe",   
//         form.current,
//         "NU8MrZjDCcAtIWEaT"        
//       )
//       .then(
//         (result) => {
//           alert("Message sent successfully!");
//           form.current.reset();
//         },
//         (error) => {
//           alert("Failed to send message. Please try again.");
//           console.error(error.text);
//         }
//       );
//   };

//   return (
//     <section id="contact" className={styles.contact}>
//       <h2>
//         <span>Contact</span> Me
//       </h2>
//       <form ref={form} onSubmit={sendEmail} className={styles.form}>
//         <input type="text" name="user_name" placeholder="Name" required />
//         <div className={styles.row}>
//           <input id="email" type="email" name="user_email" placeholder="Your Email" required />
//           <input id="subject" type="text" name="subject" placeholder="Subject" required />
//         </div>
//         <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
//         <div className={styles.btnContainer}>
//           <button type="submit">Send Message</button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Contact;

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sekba8m",
        "template_4oggpqe",
        form.current,
        "NU8MrZjDCcAtIWEaT"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className={styles.contact}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <h2>
        <span>Contact</span> Me
      </h2>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <input type="text" name="user_name" placeholder="Name" required />
        <div className={styles.row}>
          <input
            id="email"
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
        ></textarea>
        <div className={styles.btnContainer}>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </motion.section>
  );
};

export default Contact;
