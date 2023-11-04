import { Link } from "react-router-dom";
import { PiBooksDuotone } from "react-icons/pi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useState } from "react";

function Navbar() {
  const [visiblity, setvisiblity] = useState(false);
  const onclicked: any = () => {
    setvisiblity(!visiblity);
    // document.querySelector(".fa-bars")?.classList.toggle("fa-xmark");
    // document.querySelector(".center")?.classList.toggle("open");
  };
  const closemenu: any = () => {
    setvisiblity(false);
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
            <AiOutlineMenuFold
              className="fa-solid fa-bars fa-2x menu"
              style={{ color: "#ffffff" }}
              onClick={onclicked}
            ></AiOutlineMenuFold>
          </div>
        </div>
        <div className={"center " + " " + `${visiblity ? "open" : ""}`}>
          <Link to="/" className="link">
            <li className="nav-links" onClick={closemenu}>
              Home
            </li>
          </Link>
          <Link to="Books" className="link">
            <li className="nav-links" onClick={closemenu}>
              Books
            </li>
          </Link>
          <Link to="Notes" className="link">
            <li className="nav-links" onClick={closemenu}>
              Notes
            </li>
          </Link>
          <Link to="Samplepapers" className="link">
            <li className="nav-links" onClick={closemenu}>
              Sample Papers
            </li>
          </Link>
          <Link to="Assignments" className="link">
            <li className="nav-links" onClick={closemenu}>
              Assignments
            </li>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Navbar;
