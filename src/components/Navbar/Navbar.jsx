import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import closeIcon from "../../../assets/nav/closeIcon.png"
import menuIcon from "../../../assets/nav/menuIcon.png"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 830);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 830);

      if (window.innerWidth >= 830) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMobileClick = (e) => {
    if (isMobile) {
      e.stopPropagation();
      setMenuOpen(false);
    }
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Wasim Soudan
      </a>
      <div className={styles.menu}>
        {(isMobile || menuOpen) && (
          <img
            className={styles.menuBtn}
            src={
              menuOpen
                ? closeIcon
                : menuIcon
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          />
        )}
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => isMobile && setMenuOpen(false)}
        >
          <li>
            <a href="#about" onClick={(e) => handleMobileClick(e)}>About</a>
          </li>
          <li>
            <a href="#experience" onClick={(e) => handleMobileClick(e)}>Experience</a>

          </li>
          <li>
            <a href="#projects" onClick={(e) => handleMobileClick(e)}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleMobileClick(e)}>Contact</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1qKi_ehN8XoESJ6fyEW0e79at6fh2grpm/view?usp=drive_link" target="_blank">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};