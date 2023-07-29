import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <Image src={project.image} height={300} width={600} alt={project.name} />
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cta}>
          {project.source_code && (
            <Link
              href={project.source_code}
              rel="noopener noreferrer"
              className={styles.underline}
              style={{ color: "white" }}
            >
              Source Code
            </Link>
          )}
          
          <Link
            href={project.demo}
            rel="noopener noreferrer"
            className={styles.underline}
          >
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
