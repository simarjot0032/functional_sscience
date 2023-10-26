// books -> class 10 component in which subject card is called
import { useState } from "react";
import "../styles/Subjects.css";
import image1 from "../assets/imgforbooks.jpg";
import image2 from "../assets/imgbooks2.jpg";
import Subjectcard from "./Subjectcard";
import { Link } from "react-router-dom";
import Footer from "./Footer";
// import Classtenbooksci from "./Classtenbooksci";
export default function Classten() {
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
      <div className="subjects" style={{ background: `url(${currentimage})` }}>
        <Link to="/Classtenbooksci" className="linkstosub">
          <Subjectcard subname="Science" show_name="S"></Subjectcard>
        </Link>
        <Link to="/Classtenbookmaths" className="linkstosub">
          <Subjectcard subname="Maths" show_name="M"></Subjectcard>
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
}
