import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about-me", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Scroll spy: a section is active once its top is within 120px of the viewport top.
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    function updateActive() {
      let current = "";
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 120) {
          current = sec.id;
        }
      });
      setActive(current);
    }

    updateActive();
    window.addEventListener("scroll", updateActive);
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  return (
    <div className="nav">
      <div className="left">
        <a href="#home">
          Tramie <span>Nguyen </span>
        </a>
      </div>
      <i
        className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}
        id="menu-icon"
        role="button"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      ></i>
      <div className={`right${open ? " open" : ""}`} id="nav-menu">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={active === link.id ? "active" : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
