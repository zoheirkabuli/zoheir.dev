"use client";

import { useState, useEffect } from "react";
import { initSmoothScroll } from "@/utils/smoothScroll";
import styles from "./header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const cleanup = initSmoothScroll();
    return cleanup;
  }, []);

  return (
    <header className={styles.nav}>
      <nav className={styles.navContainer} aria-label="Main navigation">
        <div className={styles.logo}>zoheir.dev</div>
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={isOpen ? styles.open : ""}></span>
          <span className={isOpen ? styles.open : ""}></span>
          <span className={isOpen ? styles.open : ""}></span>
        </button>
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <li>
            <a
              href="#about"
              onClick={closeMenu}
              aria-label="Navigate to About section"
            >
              about
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={closeMenu}
              aria-label="Navigate to Skills section"
            >
              skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={closeMenu}
              aria-label="Navigate to Experience section"
            >
              experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={closeMenu}
              aria-label="Navigate to Projects section"
            >
              projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              aria-label="Navigate to Contact section"
            >
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
