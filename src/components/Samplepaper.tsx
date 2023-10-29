// main books components->card component i.e. webcard component for calling the class cards
import { useState } from "react";
import image1 from "../assets/imgforbooks.jpg";
import image2 from "../assets/imgbooks2.jpg";
import "../styles/Samplepaper.css";
import Cards from "./Webcard";
import { Link } from "react-router-dom";

import Footer from "./Footer";
const Samplepapers = () => {
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
      <div className="samplep" style={{ background: `url(${currentimage})` }}>
        <h1 className="samplep-heading">Samplepapers</h1>
        <hr style={{ background: "grey" }} />
        {/* books */}
        <div className="samplep-section">
          <Link to="/Samplepaperten" className="sampleplinks">
            <Cards name={"X"}></Cards>
          </Link>
          <Link to="/Samplepapernine" className="sampleplinks">
            <Cards name={"XI"}></Cards>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Samplepapers;
