const Portfolio = () => {
  return (
    <section className="section" id="portfolio">
      <div className="container text-center">
        <p className="section-subtitle">What I Did ?</p>
        <h6 className="section-title mb-6">Portfolio</h6>
        <div className="portfolio-row-wrapper">
          <div className="row">
            <div className="col-lg-4">
              <a
                href="https://d-libro.com/"
                target="__blank"
                className="portfolio-card"
              >
                <img
                  src="assets/imgs/d-libro.png"
                  className="portfolio-card-img"
                  alt="dlibro"
                />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>Full Stack Development</h4>
                    <p className="font-weight-normal">
                      <b>Category:</b> Website
                    </p>
                    <p className="font-weight-normal">
                      <b>Stack:</b> Next.js, Django, AWS, postgress
                    </p>
                  </span>
                </span>
              </a>
            </div>
            <div className="col-lg-4">
              <a href="#" className="portfolio-card">
                <img
                  className="portfolio-card-img img-responsive rounded"
                  src="assets/imgs/hr-forum.png"
                  alt="hr-forum"
                />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>Frontend Development</h4>
                    <p className="font-weight-normal">
                      <b>Category:</b> Website
                    </p>
                    <p className="font-weight-normal">
                      <b>Stack:</b> Next.js, Typescript, Tailwind CSS
                    </p>
                  </span>
                </span>
              </a>
            </div>
            <div className="col-lg-4">
              <a
                href="https://www.roamaround.io/trip-planner"
                target="__blank"
                className="portfolio-card"
              >
                <img
                  className="portfolio-card-img img-responsive rounded"
                  src="assets/imgs/roam-around.png"
                  alt="roam-around"
                />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>Full Stack Development</h4>
                    <p className="font-weight-normal">
                      <b>Category:</b> Website
                    </p>
                    <p className="font-weight-normal">
                      <b>Stack:</b> Next.js, Nest, Chatp-gpt API
                    </p>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <a
                href="https://betterschoolevents.com/"
                target="__blank"
                className="portfolio-card"
              >
                <img
                  src="assets/imgs/better-school.png"
                  className="portfolio-card-img"
                  alt="better-school"
                />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>Frontend Development</h4>
                    <p className="font-weight-normal">
                      <b>Category:</b> Website
                    </p>
                    <p className="font-weight-normal">
                      <b>Stack:</b> Reactjs, Stripe, SCSS
                    </p>
                  </span>
                </span>
              </a>
            </div>
            <div className="col-lg-4">
              <a href="#" className="portfolio-card">
                <img
                  className="portfolio-card-img img-responsive rounded"
                  src="assets/imgs/OBB.png"
                  alt="relas"
                />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>Full Stack Development</h4>
                    <p className="font-weight-normal">
                      <b>Category:</b> Website
                    </p>
                    <p className="font-weight-normal">
                      <b>Stack:</b> Reactjs, Expressjs, Redux , MUI
                    </p>
                  </span>
                </span>
              </a>
            </div>
            <div className="col-lg-4">
              <a
                href="https://www.enxsys.com/"
                target="__blank"
                className="portfolio-card"
              >
                <img
                  className="portfolio-card-img img-responsive rounded"
                  src="assets/imgs/enxsys.png"
                  alt="enxsys"
                />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>Frontend Development</h4>
                    <p className="font-weight-normal">
                      <b>Category:</b> Website
                    </p>
                    <p className="font-weight-normal">
                      <b>Stack:</b> Reactjs, Expressjs, Firebase, MongoDB
                    </p>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <a href="#" className="portfolio-card">
                <img
                  src="assets/imgs/hr-admin.png"
                  className="portfolio-card-img"
                  alt="hr-admin"
                />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>Frontend Development</h4>
                    <p className="font-weight-normal">
                      <b>Category:</b> Website
                    </p>
                    <p className="font-weight-normal">
                      <b>Stack:</b> Vite, MUI, SCSS
                    </p>
                  </span>
                </span>
              </a>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
