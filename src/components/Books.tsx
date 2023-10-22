import { useState } from "react";
import image1 from "../assets/imgforbooks.jpg";
import image2 from "../assets/imgbooks2.jpg";
import "../styles/Books.css";
import Cards from "./Webcard";
import { Link } from "react-router-dom";
import Classnine from "./Classnine";
import Footer from "./Footer";
const Books = () => {
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
      <div className="books" style={{ background: `url(${currentimage})` }}>
        <h1 className="books-heading">Books</h1>
        <hr style={{ background: "grey" }} />
        {/* books */}
        <div className="book-section">
          <Link to="/Classnine" className="bookslinks">
            <Cards name={"X"}></Cards>
          </Link>
          <Link to="/" className="bookslinks">
            <Cards name={"XI"}></Cards>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Books;
