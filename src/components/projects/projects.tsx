import { ProjectData } from "@/data/portfolio";
import styles from "./projects.module.css";

interface ProjectsProps {
  data: ProjectData[];
}

export default function Projects({ data }: ProjectsProps) {
  return (
    <section
      id="projects"
      className={styles.projects}
      aria-label="Projects section"
    >
      <div className="container">
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectsGrid}>
          {data.map((project) => (
            <div key={project.title} className={styles.projectCard}>
              <h3>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              {project.links && (
                <div className={styles.projectLinks}>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      GitHub →
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      aria-label={`View ${project.title} live demo`}
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
