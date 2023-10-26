// footer component
import "../styles/Footer.css";
import { PiBooksDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import {
  AiOutlineMessage,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineMail,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-header">
          <PiBooksDuotone color="white" size={55}></PiBooksDuotone>
          <h2 className="footer-heading">Functional Scrience</h2>
        </div>
        <div className="footer-links">
          <h2 className="footer-links-heading">What We Provide?</h2>
          <Link to="/Home" className="link">
            <li className="footer-link">Home</li>
          </Link>
          <Link to="/Books" className="link">
            <li className="footer-link">Books</li>
          </Link>
          <Link to="/Notes" className="link">
            <li className="footer-link">Notes</li>
          </Link>
          <Link to="/Samplepapers" className="link">
            <li className="footer-link">Sample Papers</li>
          </Link>
          <Link to="/Assignments" className="link">
            <li className="footer-link">Assignments</li>
          </Link>
        </div>
        <div className="connection">
          <h3 className="connection-heading">Stay Connected With Us!</h3>
          <div className="social-section">
            <p className="connection-para">
              Join our community and make your future bright.
            </p>

            <button className="footer-link-button">
              <a
                href="mailto:functionalscience3@gmail.com"
                className="footer-link-mail"
              >
                Mail us for offline batch<AiOutlineMessage></AiOutlineMessage>
              </a>
            </button>
            <div className="scoial-links">
              <a
                href="https://www.instagram.com/functional_science/"
                className="social"
              >
                <AiOutlineInstagram className="social-icon"></AiOutlineInstagram>
              </a>
              <a
                href="https://www.instagram.com/functional_science/"
                className="social"
              >
                <AiOutlineYoutube className="social-icon"></AiOutlineYoutube>
              </a>
              <a href="mailto:functionalscience3@gmail.com" className="social">
                <AiOutlineMail className="social-icon"></AiOutlineMail>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-footer">&copy; Functoinal Science 2023</div>
    </>
  );
};
export default Footer;
