// main books components->card component i.e. webcard component for calling the class cards
import { useState } from "react";
import image1 from "../assets/imgforbooks.jpg";
import image2 from "../assets/imgbooks2.jpg";
import "../styles/Assignment.css";
import Cards from "./Webcard";
import { Link } from "react-router-dom";

import Footer from "./Footer";
const Assignment = () => {
  let images = [image1, image2];

  const [index, setindex] = useState(0);
  const [currentimage, setimage] = useState(images[index]);

  setInterval(() => {
    setindex(index + 1);
    if (index == images.length - 1) {
      setindex(0);
    }
    setimage(images[index]);
  }, 15000);

  return (
    <>
      <div
        className="assignment"
        style={{ background: `url(${currentimage})` }}
      >
        <h1 className="assignment-heading">Assignments</h1>
        <hr style={{ background: "grey" }} />
        {/* books */}
        <div className="assignment-section">
          <Link to="/Assignmentten" className="assignmentlinks">
            <Cards name={"X"}></Cards>
          </Link>
          <Link to="/Assignmentnine" className="assignmentlinks">
            <Cards name={"IX"}></Cards>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Assignment;
