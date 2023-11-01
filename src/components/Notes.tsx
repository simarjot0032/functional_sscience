// books -> class 10 component in which subject card is called
import { useState } from "react";
import "../styles/Subjects.css";
import "../styles/Notes.css";
import image1 from "../assets/imgforbooks.jpg";
import image2 from "../assets/imgbooks2.jpg";
import image3 from "../assets/assignment.png";
import Cards from "./Webcard";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import React from "react";
// import Classtenbooksci from "./Classtenbooksci";
export default function Notes() {
  let images = [image2, image3];

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
      <div className="notes" style={{ background: `url(${currentimage})` }}>
        <h1 className="notes-heading">Notes</h1>
        <hr style={{ background: "grey" }} />
        {/* books */}
        <div className="notes-section">
          <Link to="/Classtennotes" className="noteslinks">
            <Cards name={"X"}></Cards>
          </Link>
          <Link to="/Classninenotes" className="noteslinks">
            <Cards name={"IX"}></Cards>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
