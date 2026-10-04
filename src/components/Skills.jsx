import { asset } from "../data/profile.js";
import { skillGroups } from "../data/skills.js";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      {skillGroups.map((group) => (
        <div className="programming" key={group.group}>
          <h3>{group.group}</h3>
          <div className="cells">
            {group.items.map((item) => (
              <div className="cell" key={item.name}>
                {item.image ? (
                  <img src={asset(item.image)} alt={item.name} />
                ) : (
                  <i className={item.icon}></i>
                )}
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
