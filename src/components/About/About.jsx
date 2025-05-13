import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Professional portrait"
          className={styles.aboutImage}
          loading="lazy"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.iconContainer}>
              <img 
                src={getImageUrl("about/education.jpg")} 
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
                src={getImageUrl("about/cursorIcon.png")} 
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
                src={getImageUrl("about/serverIcon.png")} 
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