// const projects = [
//   {
//     title: "Airbnb Full Stack Project",
//     description:
//       "A full-stack web application with listings, reviews, authentication, sessions, middleware and database integration.",
//     tech: "Node.js • Express.js • MongoDB • EJS",
//     github: "https://github.com/",
//     live: "#"
//   },

//   {
//     title: "Spotify Web Player UI",
//     description:
//       "A responsive Spotify-inspired music player interface with sidebar, cards, navigation, player controls and responsive layout.",
//     tech: "HTML • CSS • JavaScript",
//     github: "https://github.com/",
//     live: "#"
//   },

//   {
//     title: "Simon Says Game",
//     description:
//       "A browser-based memory game with levels, sequence generation, user interaction and game-over logic.",
//     tech: "HTML • CSS • JavaScript",
//     github: "https://github.com/",
//     live: "#"
//   },

//   {
//     title: "Responsive Sidebar Menu",
//     description:
//       "A responsive sidebar navigation interface designed with clean layout and interactive navigation elements.",
//     tech: "HTML • CSS",
//     github: "https://github.com/",
//     live: "#"
//   }
// ];

// function Projects() {
//   return (
//     <section id="projects" className="section">

//       <div className="container">

//         <div className="section-heading">
//           <p>MY WORK</p>
//           <h2>Featured Projects</h2>
//         </div>

//         <div className="projects-grid">

//           {projects.map((project) => (

//             <article
//               className="project-card"
//               key={project.title}
//             >

//               <div className="project-number">
//                 Project
//               </div>

//               <h3>{project.title}</h3>

//               <p>
//                 {project.description}
//               </p>

//               <div className="project-tech">
//                 {project.tech}
//               </div>

//               <div className="project-links">

//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   GitHub →
//                 </a>

//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   Live Demo →
//                 </a>

//               </div>

//             </article>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Projects;

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const projects = [
    {
      title: "Responsive Sidebar Menu",
      description: "Responsive sidebar navigation with smooth open/close animation.",
      tech: "HTML • CSS • JavaScript",
      github: "https://github.com/manishyadav9694/Responsive-sidebar-menu",
      live: "https://responsive-sidebar-menu-lemon.vercel.app/",
    },
    {
      title: "Spotify Web Player Clone",
      description: "Responsive music-player interface inspired by Spotify.",
      tech: "HTML • CSS",
      github: "https://github.com/manishyadav9694/Spotify-Web-Player-Clone",
      live: "https://spotify-web-player-clone.vercel.app/",
    },
    {
      title: "Simon Says Game",
      description: "Interactive memory game with level progression and JS logic.",
      tech: "HTML • CSS • JavaScript",
      github: "https://github.com/manishyadav9694/Simon-says-game",
      live: "https://simon-says-game-...vercel.app/",
    },
    {
      title: "Zerodha Full Stack Clone",
      description: "Full-stack trading platform clone with JWT auth, dashboard and holdings.",
      tech: "React • Node.js • Express • MongoDB • JWT",
      github: "https://github.com/manishyadav9694/Zerodha-Clone",
      live: "https://zerodha-frontend-umber-seven.vercel.app",
      dashboard: "https://zerodha-dashboard-nine-gray.vercel.app",
      backend: "https://zerodha-backend-rgkp.onrender.com",
    },
    {
      title: "WeatherApp - React",
      description: "Real-time weather app using OpenWeather API with city search.",
      tech: "React • API • Tailwind CSS",
      github: "https://github.com/manishyadav9694/WeatherApp-React",
      live: "https://weather-app-react-...vercel.app/",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      
      {/* Projects Section */}
      <section id="projects" className="section projects-section">
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

                <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginTop: "12px" }}>
                  <a href={p.github} target="_blank" rel="noreferrer">
                    View on GitHub →
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" style={{ color: "#6366f1", fontWeight: 600 }}>
                      Live Demo →
                    </a>
                  )}
                  {p.dashboard && (
                    <a href={p.dashboard} target="_blank" rel="noreferrer" style={{ color: "#10b981", fontWeight: 600 }}>
                      Dashboard →
                    </a>
                  )}
                  {p.backend && (
                    <a href={p.backend} target="_blank" rel="noreferrer" style={{ color: "#6b7280" }}>
                      Backend
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;