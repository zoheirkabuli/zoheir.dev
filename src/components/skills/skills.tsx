import { SkillCategory } from "@/types/portfolio";
import styles from "./skills.module.css";

interface SkillsProps {
  data: SkillCategory[];
}

export default function Skills({ data }: SkillsProps) {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Tech Stack</h2>
        <div className={styles.skillsGrid}>
          {data.map((category, index) => (
            <div key={index} className={styles.skillCard}>
              <h3>{category.title}</h3>
              <div className={styles.skillTags}>
                {category.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
