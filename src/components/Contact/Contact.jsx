import React from "react";
import styles from "./Contact.module.css";
import emailIcon from "../../../assets/contact/emailIcon.png"
import linkedinIcon from "../../../assets/contact/linkedinIcon.png"
import githubIcon from "../../../assets/contact/githubIcon.png"

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.title}>Contact</h2>
          <p className={styles.subtitle}>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img 
              src={emailIcon} 
              alt="Email icon" 
              className={styles.icon}
              loading="lazy"
            />
            <a href="mailto:wassemsoodan@gmail.com" className={styles.linkText}>
              wassemsoodan@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={linkedinIcon}
              alt="LinkedIn icon"
              className={styles.icon}
              loading="lazy"
            />
            <a 
              href="https://www.linkedin.com/in/wasim-soodan-235a6a230/" 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkText}
            >
              linkedin.com/wasim-soodan
            </a>
          </li>
          <li className={styles.link}>
            <img 
              src={githubIcon} 
              alt="GitHub icon" 
              className={styles.icon}
              loading="lazy"
            />
            <a 
              href="https://github.com/WasimSoudan" 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkText}
            >
              github.com/WasimSoudan
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};