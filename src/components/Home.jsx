import { asset, profile } from "../data/profile.js";
import SocialLinks from "./SocialLinks.jsx";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="text">
        <h1>
          Hi, I'm <span>{profile.shortName}</span>
        </h1>
        <h3 className="text-animation">
          I'm a
          <ol className="option">
            {profile.roles.map((role) => (
              <li key={role}>
                <span>{role}</span>
              </li>
            ))}
          </ol>
        </h3>
        <p>{profile.intro}</p>
        <SocialLinks className="social-icon" />
        <div className="btn">
          <a href="#contact">Hire Me</a>
          <a
            id="btnDownload"
            href={asset(profile.cvPath)}
            download={profile.cvDownloadName}
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="headshot">
        <img src={asset(profile.homeImage)} alt="Tramie's picture" />
      </div>
    </section>
  );
}
