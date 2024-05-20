const Portfolio = () => {
  return (
    <section className="section" id="portfolio">
      <div className="container text-center">
        <p className="section-subtitle">What I Did ?</p>
        <h6 className="section-title mb-6">Portfolio</h6>
        <div className="row">
          <div className="col-md-4">
            <a href="#" className="portfolio-card">
              <img
                src="assets/imgs/folio-1.jpg"
                className="portfolio-card-img"
                alt=" "
              />
              <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                  <h4>Web Designing</h4>
                  <p className="font-weight-normal">Category: Web Templates</p>
                </span>
              </span>
            </a>
          </div>
          <div className="col-md-4">
            <a href="#" className="portfolio-card">
              <img
                className="portfolio-card-img img-responsive rounded"
                src="assets/imgs/folio-2.jpg"
                alt=" "
              />
              <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                  <h4>Web Designing</h4>
                  <p className="font-weight-normal">Category: Web Templates</p>
                </span>
              </span>
            </a>
          </div>
          <div className="col-md-4">
            <a href="#" className="portfolio-card">
              <img
                className="portfolio-card-img img-responsive rounded"
                src="assets/imgs/folio-3.jpg"
                alt=" "
              />
              <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                  <h4>Web Designing</h4>
                  <p className="font-weight-normal">Category: Web Templates</p>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
