import { Link } from "react-router-dom";
import { PiBooksDuotone } from "react-icons/pi";
import { AiOutlineMenuFold, AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
function Navbar() {
  const [visiblity, setvisiblity] = useState("close");
  const onclicked: any = () => {
    setvisiblity("open");
  };
  const onclose: any = () => {
    setvisiblity("close");
  };
  return (
    <>
      <div className="navbar">
        <div className="left">
          <PiBooksDuotone size="45"></PiBooksDuotone>
          <h1 className="name">Functional Science</h1>
        </div>
        <div className="right">
          <i className="fa-regular fa-star fa-xl"></i>
          <i className="fa-regular fa-user fa-xl"></i>
          <AiOutlineMenuFold size="28" onClick={onclicked}></AiOutlineMenuFold>
        </div>
      </div>
      <div className={"center " + " " + visiblity}>
        <AiOutlineCloseCircle
          className="close"
          size="25"
          onClick={onclose}
        ></AiOutlineCloseCircle>
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
      </div>
    </>
  );
}
export default Navbar;
