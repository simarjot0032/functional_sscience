import Subjectcard from "./Subjectcard";
import { useState } from "react";
import "../styles/Subjects.css";
import "../styles/Notes.css";
import image1 from "../assets/imgforbooks.jpg";
import image2 from "../assets/imgbooks2.jpg";

export default function Classtennotes() {
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
      <div className="notes" style={{ background: `url(${currentimage})` }}>
        <h1 className="nameofclass">Class 10</h1>
        <div className="notes-section">
          <Subjectcard subname="Science" show_name="S"></Subjectcard>
          <Subjectcard subname="Maths" show_name="M"></Subjectcard>
        </div>
      </div>
    </>
  );
}
