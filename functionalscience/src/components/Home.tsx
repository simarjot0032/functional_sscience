import personreading from "../assets/p2-removebg-preview.png";
import "../styles/Home.css";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { TfiBlackboard } from "react-icons/tfi";
const Home = () => {
  return (
    <>
      <div className="parent">
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
        <div className="specialization">
          <h2 className="heading-specialization">Our Specialization</h2>
          <hr className="hr-specialization" />
          <div className="rowspecial">
            <div className="cards">
              <div className="specialicon">
                <TfiBlackboard
                  color="navy"
                  fill="navy"
                  size="50"
                ></TfiBlackboard>
              </div>
              <p className="specialcontentheading">Offline Classes</p>
              <p className="specialcontent">
                Experience the power of in-person learning with our exclusive
                offline batch. Join us for hands-on education and personalized
                guidance to unlock your full potential in the subject
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
