import SocialLinks from "./SocialLinks.jsx";

const links = [
  { id: "about-me", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <SocialLinks className="social" />

      <div className="list">
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.label}</a>
            </li>
          ))}
        </ul>
        <p className="copyright">© Tramie Nguyen | All Rights Reserved</p>
      </div>
    </footer>
  );
}
