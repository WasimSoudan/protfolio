import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Wasim</h1>
        <p className={styles.description}>
          I'm a full-stack developer with more 2 years of experience in React
          and Node.js. Feel free to reach out if you'd like to learn more!
        </p>
        <a 
          href="mailto:myemail@email.com" 
          className={styles.contactBtn}
          aria-label="Contact me via email"
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Professional portrait of Wasim"
        className={styles.heroImg}
        loading="lazy"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};