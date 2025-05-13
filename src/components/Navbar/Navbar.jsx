import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

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
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
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
        </ul>
      </div>
    </nav>
  );
};