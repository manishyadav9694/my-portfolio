import Education from "./components/Education";
import Skills from "./components/Skills";
import "./index.css";

function App() {
  const MY_LINKS = {
    linkedin: "https://www.linkedin.com/in/manish-yadav-6064b6414",
    github: "https://github.com/manishyadav9694",
    email: "manishyadav962490@gmail.com",
  };

  const projects = [
    {
      title: "Airbnb Full Stack Project",
      description: "Full-stack web app with listings, reviews, auth and database integration.",
      tech: "Node.js • Express.js • MongoDB • EJS",
      github: MY_LINKS.github + "/airbnb-project",
    },
    {
      title: "Spotify UI Clone",
      description: "Responsive music-player interface inspired by Spotify.",
      tech: "HTML • CSS • JavaScript",
      github: MY_LINKS.github + "/spotify-project",
    },
    {
      title: "Simon Says Game",
      description: "Interactive memory game with level progression and JS logic.",
      tech: "HTML • CSS • JavaScript",
      github: MY_LINKS.github + "/simon-says",
    },
    {
      title: "Responsive Sidebar Menu",
      description: "Responsive sidebar navigation with smooth open/close.",
      tech: "HTML • CSS • JavaScript",
      github: MY_LINKS.github + "/responsive-sidebar-menu",
    },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="logo">Manish Yadav</div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="hero-text">
          <h1>Hi, I'm <span>Manish Yadav</span></h1>
          <h2>Full Stack Developer</h2>
          <p>B.Tech CSE student and aspiring Software Engineer, passionate about building scalable web apps and solving problems with Java & DSA.</p>
          <div className="hero-btns">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
        </div>
        <img src="/profile.jpg" alt="Manish Yadav" className="profile-img" />
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="section-heading">
            <p>ABOUT ME</p>
            <h2>Who I Am</h2>
          </div>
          <p className="about-text">
            I'm a B.Tech Computer Science student with strong interest in Software Development. I love building real-world projects, solving DSA problems in Java, and creating modern web applications. Currently exploring AI and building impactful products.
          </p>
        </div>
      </section>

      <Education />
      <Skills />

      <section id="projects" className="section">
        <div className="container">
          <div className="section-heading">
            <p>MY WORK</p>
            <h2>Projects</h2>
          </div>
          <div className="projects">
            {projects.map((p) => (
              <div className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <small>{p.tech}</small>
                <a href={p.github} target="_blank" rel="noreferrer">View on GitHub →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container">
          <h2>Contact Me</h2>
          <div className="contact-box">
            <div className="contact-left">
              <h3>Let's work together!</h3>
              <p>I'm open to <b>internship opportunities</b> and collaborations. My inbox is always open.</p>
              <div className="contact-links">
                <a href={MY_LINKS.linkedin} target="_blank" rel="noreferrer" className="btn">LinkedIn</a>
                <a href={MY_LINKS.github} target="_blank" rel="noreferrer" className="btn">GitHub</a>
                <a href={`mailto:${MY_LINKS.email}`} className="btn-outline">Send Email</a>
              </div>
            </div>
            <div className="contact-right">
              <div className="contact-card-mini"><span>📧 Email</span><p>{MY_LINKS.email}</p></div>
              <div className="contact-card-mini"><span>📍 Location</span><p>Lucknow, UP, India</p></div>
              <div className="contact-card-mini"><span>💼 Availability</span><p>Open for Internships</p></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">© 2026 Manish Yadav. All Rights Reserved.</footer>
    </>
  );
}

export default App;