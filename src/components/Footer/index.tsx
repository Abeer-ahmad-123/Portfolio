const Footer = () => {
  return (
    <section className="container">
      <footer className="footer">
        <a href="mailto:abeerahmad389@gmail.com">
          <img className="wi-25" src="assets/svgs/email.svg" />
        </a>
        <div className="social-links text-right m-auto ml-sm-auto">
          <a href="https://www.twitter.com" target="_blank">
            <img src="assets/svgs/twitter.svg" />
          </a>
          <a
            href="https://www.linkedin.com/in/abeer-ahmad-5623181b7/"
            target="_blank"
          >
            <img src="assets/svgs/linkedin.svg" />
          </a>
          <a href="https://www.github.com/abeer-ahmad-123" target="_blank">
            <img src="assets/svgs/github.svg" />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
