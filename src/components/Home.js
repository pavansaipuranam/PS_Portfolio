import React from "react";
import styles from "./Home.module.css";
import profileImage from "../assets/profile1.0.png";
import resume from "../assets/resume.pdf";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const Home = () => (
  <section id="home" className={styles.home}>
    <video autoPlay loop muted playsInline className={styles.video}>
      <source src="background.mp4" type="video/mp4" />
    </video>

    <div className={styles.content}>
      <img src={profileImage} alt="Profile" className={styles.profileImage} />

      <div className={styles.text}>
        <h1>
          <span className={styles.green}>Hello,</span> I'm PAVAN SAI PURANAM
        </h1>
        <h2>
          <ReactTyped
            strings={[
              "Computer Science Graduate",
              "Frontend Developer",
              "Full Stack Enthusiast",
              "React Enthusiast",
              "Software Developer",
              "AI and Tech Explorer",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
            className={styles.typed}
          />
        </h2>
        <p>
          Computer Science graduate passionate about software development<br/>and building real-world solutions.
        </p>

        <p>
          <span className={styles.greener}>Actively seeking opportunities</span> to apply my skills in a dynamic and<br/> growth-oriented tech environment.
        </p>

        <div className={styles.buttonColumn}>
          <a href={resume} download className={styles.heroButton}>
            <FaDownload /> Download Resume
          </a>
          <a
            href="https://github.com/pavansaipuranam"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroButton}
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pavan-sai-puranam-7b3453234/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroButton}
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
