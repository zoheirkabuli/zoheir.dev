import { ContactData } from "@/types/portfolio";
import styles from "./contact.module.css";

interface ContactProps {
  data: ContactData;
}

export default function Contact({ data }: ContactProps) {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <div className={styles.contactContent}>
          <p>{data.description}</p>
          <div className={styles.contactLinks}>
            {data.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={styles.contactLink}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
              >
                <span>{link.icon}</span>
                <span>{link.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
