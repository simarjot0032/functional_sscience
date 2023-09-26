import { Link } from "react-router-dom";

function Menubar() {
  return (
    <>
      <Link to="/Home" className="link">
        <li className="nav-links">Home</li>
      </Link>
      <Link to="/Books" className="link">
        <li className="nav-links">Books</li>
      </Link>
      <Link to="/Notes" className="link">
        <li className="nav-links">Notes</li>
      </Link>
      <Link to="/Samplepapers" className="link">
        <li className="nav-links">Sample Papers</li>
      </Link>
      <Link to="/Assignments" className="link">
        <li className="nav-links">Assignments</li>
      </Link>
    </>
  );
}
export default Menubar;
