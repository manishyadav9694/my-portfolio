function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">

        <a href="#home" className="logo">
          Manish<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="nav-btn"
        >
          GitHub
        </a>

      </div>
    </nav>
  );
}

export default Navbar;
