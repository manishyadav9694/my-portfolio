function Skills() {
  const skills = [
    {
      title: "Frontend",
      list: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "EJS"],
    },
    {
      title: "Backend",
      list: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"],
    },
    {
      title: "Programming & CS",
      list: ["Java", "Data Structures & Algorithms", "OOPs", "DBMS"],
    },
    {
      title: "Tools & Others",
      list: ["Git & GitHub", "VS Code", "Vercel", "Postman", "Figma"],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-heading">
          <p>SKILLS</p>
          <h2>What I Work With</h2>
        </div>

        <div className="skills-grid">
          {skills.map((cat) => (
            <div key={cat.title} className="skill-card">
              <h3>{cat.title}</h3>
              <div className="skill-tags">
                {cat.list.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;