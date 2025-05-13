import React from "react";
import styles from "./About.module.css";
import aboutImage from "../../../assets/about/aboutImage.png"
import education from "../../../assets/about/education.jpg"
import cursorIcon from "../../../assets/about/cursorIcon.png"
import serverIcon from '../../../assets/about/serverIcon.png' 

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Professional portrait"
          className={styles.aboutImage}
          loading="lazy"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.iconContainer}>
              <img 
                src={education} 
                alt="Education icon" 
                className={styles.icon}
              />
            </div>
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>Master in Computer Science</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.iconContainer}>
              <img 
                src={cursorIcon} 
                alt="Frontend icon" 
                className={styles.icon}
              />
            </div>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I build responsive, accessible, and high-performance web 
                applications with modern technologies.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.iconContainer}>
              <img 
                src={serverIcon} 
                alt="Backend icon" 
                className={styles.icon}
              />
            </div>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I develop efficient, scalable backend systems and RESTful APIs 
                with proper security and documentation.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};