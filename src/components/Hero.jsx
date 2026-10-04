function Hero() {
  return (
    <section id="home" className="hero">

      <div className="container hero-container">

        <div className="hero-content">

          <p className="hero-small">
            Hello, I'm
          </p>

          <h1>
            Manish Yadav
          </h1>

          <h2>
            B.Tech CSE Student & Full Stack Developer
          </h2>

          <p className="hero-description">
            I build responsive and user-friendly web applications
            and solve programming problems using Java and DSA.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <div className="hero-card">

          <div className="code-window">

            <div className="window-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre>
{`const developer = {
  name: "Manish Yadav",
  role: "Full Stack Developer",
  language: "Java",
  focus: "DSA + Development",
  learning: "AI / ML"
};`}
            </pre>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;