const Pricing = () => {
  return (
    <section className="section" id="pricing">
      <div className="container text-center">
        <p className="section-subtitle">How Much I Charge ?</p>
        <h6 className="section-title mb-6">My Pricing</h6>
        <div className="pricing-wrapper">
          <div className="pricing-card">
            <div className="pricing-card-header">
              <img
                className="pricing-card-icon"
                src="assets/svgs/scooter.svg"
                alt=" "
              />
            </div>
            <div className="pricing-card-body">
              <h6 className="pricing-card-title">Free</h6>
              <div className="pricing-card-list">
                <p>accusamus reprehenderit</p>
                <p>provident dolorem </p>
                <p>quos neque</p>
                <p>fugiat quibusdam</p>
                <p>
                  <i className="ti-close"></i>
                </p>
                <p>
                  <i className="ti-close"></i>
                </p>
              </div>
            </div>
            <div className="pricing-card-footer">
              <span>$</span>
              <span>0.00/Month</span>
            </div>
            <a href="#" className="btn btn-primary mt-3 pricing-card-btn">
              Subscribe
            </a>
          </div>
          <div className="pricing-card">
            <div className="pricing-card-header">
              <img
                className="pricing-card-icon"
                src="assets/svgs/shipped.svg"
                alt=" "
              />
            </div>
            <div className="pricing-card-body">
              <h6 className="pricing-card-title">Basic</h6>
              <div className="pricing-card-list">
                <p>accusamus reprehenderit</p>
                <p>provident dolorem </p>
                <p>quos neque</p>
                <p>fugiat quibusdam</p>
                <p>accusamus laboriosam</p>
                <p>
                  <i className="ti-close"></i>
                </p>
              </div>
            </div>
            <div className="pricing-card-footer">
              <span>$</span>
              <span>9.99/Month</span>
            </div>
            <a href="#" className="btn btn-primary mt-3 pricing-card-btn">
              Subscribe
            </a>
          </div>
          <div className="pricing-card">
            <div className="pricing-card-header">
              <img
                className="pricing-card-icon"
                src="assets/svgs/startup.svg"
                alt=" "
              />
            </div>
            <div className="pricing-card-body">
              <h6 className="pricing-card-title">Premium</h6>
              <div className="pricing-card-list">
                <p>accusamus reprehenderit</p>
                <p>provident dolorem </p>
                <p>quos neque</p>
                <p>fugiat quibusdam</p>
                <p>accusamus laboriosam</p>
                <p>inventore omnis</p>
              </div>
            </div>
            <div className="pricing-card-footer">
              <span>$</span>
              <span>99.9/Month</span>
            </div>
            <a href="#" className="btn btn-primary mt-3 pricing-card-btn">
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
