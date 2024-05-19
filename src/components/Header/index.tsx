const Header = () => {
  return (
    <header id="home" className="header">
      <div className="overlay"></div>
      <div className="header-content container">
        <h1 className="header-title">
          <span className="up">HI!</span>
          <span className="down">I am Abeer Ahmed</span>
        </h1>
        <p className="header-subtitle">Full Stack Developer</p>

        {/* <button className="btn btn-primary">Visit My Works</button> */}
        <a href="/cv.pdf" download="Abeer Ahmed CV.pdf">
          <button className="btn-rounded btn btn-outline-primary mt-4">
            Download CV
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
