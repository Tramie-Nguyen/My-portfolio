import { asset, profile } from "../data/profile.js";

function Part({ part }) {
  if (typeof part === "string") return part;
  if (part.highlight) return <span>{part.highlight}</span>;
  return (
    <a
      title={part.title}
      href={part.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {part.link}
    </a>
  );
}

export default function About() {
  return (
    <section className="about-me" id="about-me">
      <div className="content">
        <div className="headshot">
          <img src={asset(profile.aboutImage)} alt="Tramie's picture" />
        </div>
        <div className="text">
          <h2>
            About <span>Me</span>
          </h2>
          <ol>
            {profile.about.map((parts, i) => (
              <li key={i}>
                <p>
                  {parts.map((part, j) => (
                    <Part key={j} part={part} />
                  ))}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
