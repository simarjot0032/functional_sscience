import personreading from "../assets/person-removebg-preview.png";
import "../styles/Home.css";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
const Home = () => {
  return (
    <>
      <div className="container">
        <img src={personreading} alt="person-reading" className="home-img" />
        <div className="linevr"></div>
        <div className="content">
          <hr />
          <div className="home-container-headings">
            <h1 className="home-container-heading">Functional</h1>
            <h1 className="home-container-heading">Science</h1>
          </div>
          <div className="home-container-description">
            <p className="home-container-description-para">
              <BiSolidQuoteAltLeft
                color="black"
                className="quotes"
                size="25"
              ></BiSolidQuoteAltLeft>
              Welcome to Functional Science: Your Path to Academic Excellence!
              We specialize in empowering students in grades 9 and 10, along
              with dedicated support for grades 11 and 12. Explore our
              comprehensive classes, expertly crafted study materials, and
              top-notch test preparation services. Join us on the journey to
              success in science education!
            </p>
            <BiSolidQuoteAltRight
              color="black"
              className="quotes closeing"
              size="25"
            ></BiSolidQuoteAltRight>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
