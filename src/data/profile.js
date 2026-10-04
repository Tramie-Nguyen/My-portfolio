// Builds a path to a file in public/ that works on any host (incl. GitHub Pages).
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  shortName: "Tramie",
  fullName: "Tramie Nguyen",
  email: "tramy.nguyen.it@gmail.com",
  cvPath: "files/NguyenThiTraMy_Resume.pdf",
  cvDownloadName: "NguyenThiTraMy_Resume.pdf",
  homeImage: "images/cv2.webp",
  aboutImage: "images/cv.webp",

  // Rotating titles in the Home section (the CSS animation expects 4 items).
  roles: [
    "Business Analyst Intern",
    "Database Administrator Intern",
    "Data Engineer Intern",
    "Software Developer Intern",
  ],

  intro:
    "A final-year Information Systems student at HCMUS, aspiring Business Analyst with a strong interest in Web Development and UI/UX Design.",

  // Each bullet is a list of parts: plain strings, { highlight } for
  // emphasized text, or { link, url, title } for a link.
  about: [
    ["My Vietnamese name: Nguyễn Thị Trà My."],
    [
      "I am a final-year ",
      { highlight: "Information Systems" },
      " student at ",
      {
        link: "HCMUS (VNU-HCM).",
        url: "https://hcmus.edu.vn/",
        title: "HCMUS's link page",
      },
    ],
    [
      "My career interests are ",
      { highlight: "Business Analysis" },
      ", ",
      { highlight: "Data Engineering, Database Administration" },
      ", and ",
      { highlight: "Web Development" },
      ".",
    ],
    [
      "I focus on analyzing requirements, designing information systems, and working with data to develop practical and reliable solutions.",
    ],
    [
      "I am currently seeking an ",
      { highlight: "internship or fresher position" },
      " to gain hands-on experience and grow in a professional working environment.",
    ],
  ],

  // Used by both the Home section and the footer.
  socials: [
    {
      name: "GitHub",
      icon: "fa-github",
      url: "https://github.com/Tramie-Nguyen",
    },
    {
      name: "LinkedIn",
      icon: "fa-linkedin",
      url: "https://www.linkedin.com/in/tramienguyen/",
    },
    {
      name: "Instagram",
      icon: "fa-instagram",
      url: "https://www.instagram.com/ntt.mint._/",
    },
    {
      name: "Facebook",
      icon: "fa-facebook",
      url: "https://www.facebook.com/nguyen.my.416252",
    },
  ],
};
