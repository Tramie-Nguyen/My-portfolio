import { profile } from "../data/profile.js";

// Social icon links, shared by Home and Footer. The wrapper class sets the style.
export default function SocialLinks({ className }) {
  return (
    <div className={className}>
      {profile.socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
        >
          <i className={`fa-brands ${social.icon}`}></i>
        </a>
      ))}
    </div>
  );
}
