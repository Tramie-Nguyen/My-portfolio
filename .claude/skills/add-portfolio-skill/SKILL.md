---
name: add-portfolio-skill
description: Add, edit, reorder or remove a technology/tool entry (or a whole category) in the "Skills" section of this React + Vite portfolio. Use whenever the user says things like "add Docker to my skills", "put TypeScript under Frontend", "add a new skill group for Cloud", "change the icon/logo of Git", or "remove X from the skills section". Covers the data file to edit, choosing an image vs. a Font Awesome icon, where logo files go, and the mistakes that break the section.
---

# Adding an element to the Skills section

The Skills section is **data-driven**. You almost never touch the component; you edit one array.

## How the section works (read before editing)

| File | Role |
|---|---|
| `src/data/skills.js` | `skillGroups` array: the **only** place content lives. |
| `src/components/Skills.jsx` | Renders every group as `<div className="programming">` → `<h3>` → `.cells` → one `.cell` per item. |
| `src/data/profile.js` | Exports `asset(path)` = `import.meta.env.BASE_URL + path`. `Skills.jsx` already wraps `item.image` with it. |
| `public/images/` | Logo files for items that use `image`. |
| `src/styles/style.css` | `/*skills*/` block (~line 335) + mobile overrides inside `@media (max-width: 880px)` (~line 901). |
| `index.html` | Loads **Font Awesome 7.0.1 (free)** from cdnjs. Only free icons render. |

Data shape:

```js
export const skillGroups = [
  {
    group: "Tools",                 // <h3> heading, also the React key
    items: [
      { name: "Git", icon: "fa-brands fa-git-alt" },     // Font Awesome icon
      { name: "Figma", image: "images/figma.webp" },     // logo from public/
    ],
  },
];
```

Render rule in `Skills.jsx`: `item.image ? <img src={asset(item.image)} alt={item.name}/> : <i className={item.icon}/>`, followed by `<span>{item.name}</span>`.

Current groups (in display order): Programming Languages, Frontend, Backend, Databases, Tools.

## Procedure

### A. Add an item to an existing group

1. Open `src/data/skills.js`, find the group by its `group` string.
2. Decide **icon or image**:
   - **Font Awesome icon** if a free FA 7 icon exists (check https://fontawesome.com/search?ic=free). Brand logos use `fa-brands fa-<name>`; generic glyphs use `fa-solid fa-<name>`. Icon is rendered 28px in the dark background color (`.programming .cells .cell i`), so it shows as a monochrome glyph.
   - **Image** when you want the real colored logo or no FA icon exists. Most existing entries use images.
3. If using an image:
   - Put the file in `public/images/` (prefer `.webp` or `.png` with transparent background, roughly square; it is shown in a 45×45 box with `object-fit: contain`, so a very wide logo will look tiny).
   - Reference it as `image: "images/<file>"` — **relative, no leading `/`, no `public/` prefix**.
   - If the user gives a logo file elsewhere on disk, copy it into `public/images/`; if they don't supply one, ask, or offer a Font Awesome icon instead. Don't hotlink external URLs (`asset()` would prefix them with the base path and break them).
4. Append the object `{ name: "...", image: "..." }` or `{ name: "...", icon: "..." }` in the desired position (array order = display order).
5. Verify (see below).

### B. Add a new group

1. Add `{ group: "<Heading>", items: [ ... ] }` to `skillGroups` at the position where it should appear.
2. No CSS or component change is needed — it automatically gets `.programming`, `h3`, and `.cells` styling.
3. The Navbar/scroll-spy is unaffected (it tracks `#skills` only).

### C. Edit / remove

- Change `name`, `image`, or `icon` in place, or delete the object. If you remove the last use of an image, you may delete the file from `public/images/` — first `grep` the repo (`src/`) to confirm nothing else (e.g. `projects.js`) uses it.

## Verify

1. `npm run build` — must succeed.
2. `npm run dev` and check the Skills section at desktop width and at ≤ 880px: the new cell shows its logo/icon (no broken-image icon, no empty space) and the label.
3. Optional: `npm run preview` to confirm the image resolves under the built `base: "./"` path.

## Common mistakes to avoid

- **Leading slash or `public/` in the path** (`"/images/x.png"`, `"public/images/x.png"`). `asset()` already prefixes `BASE_URL` (`./`), so this breaks on GitHub Pages / preview. Use `"images/x.png"`.
- **Filename case mismatch.** Windows is case-insensitive, so `images/js.webp` works locally while the file is `JS.webp`, then 404s on Linux hosts (GitHub Pages, Vercel, Netlify). Copy the filename exactly. Existing quirks to respect: `JS.webp`, `c++.webp`, `taiwindcss.png` (misspelled, but that is the real filename; don't "fix" the string without renaming the file).
- **Giving both `image` and `icon`.** `image` silently wins. Give exactly one.
- **Giving neither.** Renders an empty `<i>` with no visual — the cell shows only text.
- **Wrong Font Awesome class.** Missing the style prefix (`fa-git-alt` alone), using v4/v5 names (`fa fa-github`), using a Pro-only icon, or `fa-solid` for a brand icon (brands need `fa-brands`). All render nothing. FA version is 7 (free).
- **Duplicate `name` in the same group, or duplicate `group` strings.** They are React keys → console warning and possible rendering glitches.
- **Using `className` values from old CSS.** `style.css` has leftover rules (`.db-and-uiux`, `.uiux`, `.database`, `.business-process`, `.system-analysis`, `.system-design`) from the original static site. Nothing renders them now, and `CLAUDE.md` mentions an `analysisGroups` export that **does not exist** in `skills.js`. Don't import `analysisGroups`; if the user wants "Analysis & Design" boxes back, that is a component change (add the export + markup using those classes), not a simple data edit — confirm with the user first.
- **Editing `Skills.jsx` to add a single item.** Not needed; keep content in `src/data/skills.js` (project convention: components only render data).
- **Renaming CSS classes** (`.skills`, `.programming`, `.cells`, `.cell`) or the `id="skills"`. The stylesheet and Navbar depend on them.
- **Hard-coding colors** if a style tweak is truly needed — use the `:root` variables (`--main-color`, `--text-color`, `--background-color`, `--darker-color`), and put mobile tweaks inside the existing `@media (max-width: 880px)` block rather than a new one.
- **Huge or non-transparent images.** Keep logos small (tens of KB) and with transparent backgrounds; the cell background is light (`--text-color`), so a white-boxed logo looks off and a white logo is invisible.
