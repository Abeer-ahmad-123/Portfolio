import { enqueueSnackbar } from "notistack";
import { useState } from "react";

const Contact = () => {
  const [emailData, setEmailData] = useState({
    to: "",
    subject: "Equiry",
    name: "",
    text: "",
  });

  const handleChange = (e: any) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (res.status === 200) {
        enqueueSnackbar("Message Sent Successfully", { variant: "success" });
      } else {
        enqueueSnackbar("Something went wrong!", { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar("Something went wrong!", { variant: "error" });
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container text-center">
        <p className="section-subtitle">How can you communicate?</p>
        <h6 className="section-title mb-5">Contact Me</h6>
        <form
          action=""
          className="contact-form col-md-10 col-lg-8 m-auto"
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <div className="form-group col-sm-6">
              <input
                type="text"
                name="name"
                value={emailData.name}
                onChange={handleChange}
                size={50}
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group col-sm-6">
              <input
                type="email"
                name="to"
                value={emailData.to}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="form-group col-sm-12">
              <textarea
                name="text"
                id="comment"
                value={emailData.text}
                onChange={handleChange}
                rows={6}
                className="form-control"
                placeholder="Write Something"
              ></textarea>
            </div>
            <div className="form-group col-sm-12 mt-3">
              <button type="submit" className="btn btn-outline-primary rounded">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
