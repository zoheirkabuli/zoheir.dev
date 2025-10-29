import { AboutData } from "@/types/portfolio";
import styles from "./about.module.css";

interface AboutProps {
  data: AboutData;
}

export default function About({ data }: AboutProps) {
  return (
    <section id="about" className={styles.about} aria-label="About section">
      <div className="container">
        <h2 className={styles.sectionTitle}>About</h2>
        <div className={styles.aboutContent}>
          {data.paragraphs.map((paragraph, index) => (
            <p key={`about-p-${index}`}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
