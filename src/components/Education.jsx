function Education() {
  return (
    <section id="education" className="section">
      <div className="container">

        {/* Section Heading */}
        <div className="section-heading">
          <p>EDUCATION</p>
          <h2>My Academic Journey</h2>
        </div>

        {/* Education Timeline */}
        <div className="timeline">

          {/* B.Tech */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span>2024 - Present</span>

              <h3>B.Tech in Computer Science & Engineering</h3>

              <h4>
                Dr .A.P.J.  Abdul  Kalam  Technical  Univrsity  (AKTU)
                </h4>
               <p> Current CGPA: 8.0 / 10 </p>
              
            </div>
          </div>

          {/* 12th */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span>2022 - 2023</span>

              <h3>Intermediate (12th) - PCM</h3>

              <h4>MODERN ARYA PUBLIC SCHOOL ,FARIDABAD</h4>
            </div>
          </div>

          {/* 10th */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span>2021 - 2022</span>

              <h3>High School (10th)</h3>

              <h4>MODERN ARYA PUBLIC SCHOOL ,FARIDABAD</h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;
