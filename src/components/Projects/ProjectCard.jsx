import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source ,image },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={image}
        alt={`Screenshot of ${title} project`}
        className={styles.image}
        loading="lazy"
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
        <div className={styles.links}>
          <a 
            href={demo} 
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} demo`}
          >
            Demo
          </a>
          <a 
            href={source} 
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} source code`}
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
};