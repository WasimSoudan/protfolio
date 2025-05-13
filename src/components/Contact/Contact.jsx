import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

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
              src={getImageUrl("contact/emailIcon.png")} 
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
              src={getImageUrl("contact/linkedinIcon.png")}
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
              src={getImageUrl("contact/githubIcon.png")} 
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