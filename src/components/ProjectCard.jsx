import { asset } from "../data/profile.js";

export default function ProjectCard({ project }) {
  const links = project.links.filter((link) => link.url);

  return (
    <div className="prj-card">
      <img src={asset(project.image)} alt={project.title} className="prj-image" />
      <h3 className="title">{project.title}</h3>
      <ul className="description">
        {project.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
        {project.time && <li>Time: {project.time}</li>}
      </ul>
      {links.length > 0 && (
        <div className="links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
