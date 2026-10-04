function About() {
  return (
    <section id="about" className="section">

      <div className="container">

        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Who I Am</h2>
        </div>

        <div className="about-content">

          <div className="about-text">

            <p>
              I am a B.Tech Computer Science student interested in
              software development and problem solving.
            </p>

            <p>
              I have completed my web development journey covering
              frontend, backend, databases, REST APIs and Git/GitHub.
            </p>

            <p>
              Currently, I am focusing on Java, Data Structures and
              Algorithms and building projects that improve my
              development skills.
            </p>

            <a
              href="#contact"
              className="primary-btn"
            >
              Let's Connect
            </a>

          </div>

          <div className="about-box">

            <div>
              <strong>3rd</strong>
              <span>Year B.Tech</span>
            </div>

            <div>
              <strong>Java</strong>
              <span>DSA</span>
            </div>

            <div>
              <strong>Full</strong>
              <span>Stack Development</span>
            </div>

            <div>
              <strong>Git</strong>
              <span>& GitHub</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;