const Services = () => {
  return (
    <section className="section" id="service">
      <div className="container text-center">
        <p className="section-subtitle">What I Do ?</p>
        <h6 className="section-title mb-6">Service</h6>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="service-card">
              <div className="body">
                <img
                  src="assets/imgs/frontend.svg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  className="icon"
                />
                <h6 className="title">Frontend Development</h6>
                <p className="subtitle">
                  Creating Seamless and Interactive User Experiences on the Web
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-card">
              <div className="body">
                <img
                  src="assets/imgs/backend.svg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  className="icon"
                />
                <h6 className="title">Backend Development</h6>
                <p className="subtitle">
                  Building Robust and Scalable Server-Side Solutions
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-card">
              <div className="body">
                <img
                  src="assets/imgs/deployment.svg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                  className="icon"
                />
                <h6 className="title">Deployment</h6>
                <p className="subtitle">
                  Facilitating Seamless Transition from Development to
                  Production
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-md-6 col-lg-3">
          <div className="service-card">
            <div className="body">
              <img
                src="assets/imgs/analytics.svg"
                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                className="icon"
              />
              <h6 className="title">Iusto</h6>
              <p className="subtitle">
                Labore velit culpa adipisci excepturi consequuntur itaque in
                nam molestias dolorem iste quod.
              </p>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
