import { ExperienceItem } from "@/types/portfolio";
import styles from "./experience.module.css";

interface ExperienceProps {
  data: ExperienceItem[];
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <section
      id="experience"
      className={styles.experience}
      aria-label="Experience section"
    >
      <div className="container">
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.experienceTimeline}>
          {data.map((item) => (
            <div
              key={`${item.company}-${item.title}`}
              className={styles.experienceItem}
            >
              <h3>{item.title}</h3>
              <div className={styles.company}>{item.company}</div>
              <div className={styles.date}>{item.date}</div>
              <ul>
                {item.responsibilities.map((responsibility, respIndex) => (
                  <li key={`${item.company}-resp-${respIndex}`}>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
