import { ExperienceItem } from "@/types/portfolio";
import styles from "./experience.module.css";

interface ExperienceProps {
  data: ExperienceItem[];
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.experienceTimeline}>
          {data.map((item, index) => (
            <div key={index} className={styles.experienceItem}>
              <h3>{item.title}</h3>
              <div className={styles.company}>{item.company}</div>
              <div className={styles.date}>{item.date}</div>
              <ul>
                {item.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
