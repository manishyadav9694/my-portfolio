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
      title: "Personal Portfolio - React",
      description: "Modern, responsive personal portfolio with dark theme, animations, and projects showcase.",
      tech: "React • Tailwind CSS • Framer Motion",
      github: "https://github.com/manishyadav9694/my-portfolio",
      live: "https://my-portfolio-manish.vercel.app",
    },
    {
      title: "Airbnb Full Stack Project",
      description: "Full-stack web app with listings, reviews, auth and database integration.",
      tech: "Node.js • Express.js • MongoDB • EJS",
      github: "https://github.com/manishyadav9694/Wanderlust",
      live: "https://wanderlust-3k4x.onrender.com",
    },
    {
      title: "Spotify UI Clone",
      description: "Responsive music-player interface inspired by Spotify.",
      tech: "HTML • CSS • JavaScript",
      github: "https://github.com/manishyadav9694/Spotify-Web-Player-Clone",
      live: "https://spotify-web-player-clone-bice.vercel.app/",
    },
    {
      title: "Simon Says Game",
      description: "Interactive memory game with level progression and JS logic.",
      tech: "HTML • CSS • JavaScript",
      github: "https://github.com/manishyadav9694/Simon-says-game",
      live: "https://simon-says-game-eta-khaki.vercel.app/",
    },
    {
      title: "Responsive Sidebar Menu",
      description: "Responsive sidebar navigation with smooth open/close.",
      tech: "HTML • CSS • JavaScript",
      github: "https://github.com/manishyadav9694/Responsive-sidebar-menu",
      live: "https://responsive-sidebar-menu-lemon.vercel.app/",
    },
    {
      title: "Zerodha Full Stack Clone",
      description: "Full-stack trading platform clone with JWT auth, dashboard & live charts",
      tech: "React • Node.js • Express • MongoDB • JWT",
      github: "https://github.com/manishyadav9694/Zerodha-Clone",
      live: "https://zerodha-frontend-umber-seven.vercel.app",
      dashboard: "https://zerodha-dashboard-nine-gray.vercel.app",
      backend: "https://zerodha-backend-rgkp.onrender.com",
    },
    {
      title: "WeatherApp - React",
      description: "Real-time weather app using OpenWeather API with city search & live data.",
      tech: "React • API • Tailwind CSS",
      github: "https://github.com/manishyadav9694/WeatherApp-React",
      live: "https://weather-app-react-och8nx073-manish-yadav1.vercel.app",
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
            I'm a B.Tech Computer Science student with strong interest in Software Development. I love building real-world projects, solving DSA problems in Java, and creating modern web applications.
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
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '12px' }}>
                  <a href={p.github} target="_blank" rel="noreferrer">GitHub →</a>
                  {p.live && <a href={p.live.trim()} target="_blank" rel="noreferrer" style={{color: '#6366f1', fontWeight: 'bold'}}>Live Demo →</a>}
                  {p.dashboard && <a href={p.dashboard} target="_blank" rel="noreferrer" style={{color: '#10b981', fontWeight: 'bold'}}>Dashboard →</a>}
                  {p.backend && <a href={p.backend} target="_blank" rel="noreferrer">Backend →</a>}
                </div>
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
              <p>I'm open to <b>internship opportunities</b> and collaborations.</p>
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