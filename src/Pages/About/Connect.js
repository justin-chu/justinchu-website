import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { GoMail } from "react-icons/go";

const Connect = () => {
  return (
    <div className="panel-5">
      <h1 className="sub-header" style={{ marginTop: 0, marginBottom: 0 }}>
        Get in touch with me
      </h1>
      <p className="portfolio-desc" style={{ marginBottom: 40 }}>
        Send me an email, check out my GitHub, or connect with me on LinkedIn!
      </p>
      <div className="contact-container">
        <a
          href="mailto:j64chu@uwaterloo.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="contact">
            <GoMail color="black" size="32px" />{" "}
          </button>
        </a>
        <a
          href="https://github.com/justin-chu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="contact" style={{ backgroundColor: "#f3f3f3" }}>
            <IoLogoGithub color="#333" size="32px" />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/justinchu252/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="contact"
            style={{ backgroundColor: "#e7f2fd", marginRight: 0 }}
          >
            <IoLogoLinkedin color="#2867B2" size="32px" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Connect;
