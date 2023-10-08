import "../styles/Footer.css";
import { PiBooksDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <hr className="hr-footer" />
        <div className="footer-header">
          <PiBooksDuotone color="white" size={55}></PiBooksDuotone>
          <h2 className="footer-heading">Functional Scrience</h2>
        </div>
        <div className="footer-links">
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
        <div className="footer-footer">&copy;Functoinal Science</div>
      </div>
    </>
  );
};
