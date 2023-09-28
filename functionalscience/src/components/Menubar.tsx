import { Link } from "react-router-dom";
import "../styles/Menubar.css";

function Menubar() {
  return (
    <>
      <div className="menubar-navlink">
        <Link to="/Home" className="link">
          <li className="nav-link">Home</li>
        </Link>
        <Link to="/Books" className="link">
          <li className="nav-link">Books</li>
        </Link>
        <Link to="/Notes" className="link">
          <li className="nav-link">Notes</li>
        </Link>
        <Link to="/Samplepapers" className="link">
          <li className="nav-link">Sample Papers</li>
        </Link>
        <Link to="/Assignments" className="link">
          <li className="nav-link">Assignments</li>
        </Link>
      </div>
    </>
  );
}
export default Menubar;
