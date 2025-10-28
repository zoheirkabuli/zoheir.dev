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
      <nav className={styles.container}>
        <div className={styles.logo}>zoheir.dev</div>
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={isOpen ? styles.open : ""}></span>
          <span className={isOpen ? styles.open : ""}></span>
          <span className={isOpen ? styles.open : ""}></span>
        </button>
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <li>
            <a href="#about" onClick={closeMenu}>
              about
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              skills
            </a>
          </li>
          <li>
            <a href="#experience" onClick={closeMenu}>
              experience
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
