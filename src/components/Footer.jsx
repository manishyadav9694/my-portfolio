function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <p>
          © {new Date().getFullYear()} Manish Yadav. All rights reserved.
        </p>

        <p>
          Built with React.js
        </p>

      </div>

    </footer>
  );
}

export default Footer;