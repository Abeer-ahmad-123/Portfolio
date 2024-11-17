import { useEffect } from "react";

const WorkWithMe = () => {
  const handleScrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="section-sm bg-primary">
      <div className="container text-center text-sm-left">
        <div className="row align-items-center">
          <div className="col-sm offset-md-1 mb-4 mb-md-0">
            <h6 className="title text-light">Want to work with me?</h6>
            <p className="m-0 text-light">
              Always feel Free to Contact & Hire me
            </p>
          </div>
          <div className="col-sm offset-sm-2 offset-md-3">
            <button
              className="btn btn-lg my-font btn-light rounded"
              onClick={handleScrollToContact}
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithMe;
