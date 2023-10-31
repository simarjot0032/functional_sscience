import { Link } from "react-router-dom";
import { PiBooksDuotone } from "react-icons/pi";

import { useState } from "react";

function Navbar() {
  const [visiblity, setvisiblity] = useState("");
  const onclicked: any = () => {
    setvisiblity("open");
    document.querySelector(".fa-bars")?.classList.toggle("fa-xmark");
    document.querySelector(".center")?.classList.toggle("open");
  };

  return (
    <>
      <div className="bignav">
        <div className="navbar">
          <div className="left">
            <PiBooksDuotone size="55"></PiBooksDuotone>
            <h1 className="name">Functional Science</h1>
          </div>
          <div className="right">
            <i
              className="fa-solid fa-bars fa-2x menu"
              style={{ color: "#ffffff" }}
              onClick={onclicked}
            ></i>
          </div>
        </div>
        <div className={"center " + " " + visiblity}>
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
      </div>
    </>
  );
}
export default Navbar;
