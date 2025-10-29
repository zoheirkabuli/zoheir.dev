"use client";

import { HeroData } from "@/types/portfolio";
import styles from "./hero.module.css";

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className={styles.hero} aria-label="Hero section">
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.terminalLine}>{data.greeting}</div>
          <h1>{data.name}</h1>
          <h2>{data.title}</h2>
          <p className={styles.tagline}>{data.tagline}</p>
          <div className={styles.terminalLine}>
            {data.terminalCommand} <span>{`// ${data.terminalComment}`}</span>
          </div>
          <div className={styles.ctaButtons}>
            {data.ctaButtons.map((button) => (
              <a
                key={button.href}
                href={button.href}
                className={styles.btn}
                target={button.external ? "_blank" : undefined}
                rel={button.external ? "noopener noreferrer" : undefined}
              >
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
