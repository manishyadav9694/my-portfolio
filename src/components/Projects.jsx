const projects = [
  {
    title: "Airbnb Full Stack Project",
    description:
      "A full-stack web application with listings, reviews, authentication, sessions, middleware and database integration.",
    tech: "Node.js • Express.js • MongoDB • EJS",
    github: "https://github.com/",
    live: "#"
  },

  {
    title: "Spotify Web Player UI",
    description:
      "A responsive Spotify-inspired music player interface with sidebar, cards, navigation, player controls and responsive layout.",
    tech: "HTML • CSS • JavaScript",
    github: "https://github.com/",
    live: "#"
  },

  {
    title: "Simon Says Game",
    description:
      "A browser-based memory game with levels, sequence generation, user interaction and game-over logic.",
    tech: "HTML • CSS • JavaScript",
    github: "https://github.com/",
    live: "#"
  },

  {
    title: "Responsive Sidebar Menu",
    description:
      "A responsive sidebar navigation interface designed with clean layout and interactive navigation elements.",
    tech: "HTML • CSS",
    github: "https://github.com/",
    live: "#"
  }
];

function Projects() {
  return (
    <section id="projects" className="section">

      <div className="container">

        <div className="section-heading">
          <p>MY WORK</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.title}
            >

              <div className="project-number">
                Project
              </div>

              <h3>{project.title}</h3>

              <p>
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech}
              </div>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo →
                </a>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;