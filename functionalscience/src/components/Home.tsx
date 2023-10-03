import personreading from "../assets/p2-removebg-preview.png";
import "../styles/Home.css";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { BsFillBookmarksFill, BsFillPatchQuestionFill } from "react-icons/bs";
import { TfiBlackboard } from "react-icons/tfi";
import { GrNotes } from "react-icons/gr";
import { SiTestcafe } from "react-icons/si";
import { MdOutlineAssignment } from "react-icons/md";
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
        {/* specialization section with card in it   */}
        <h2 className="heading-specialization">Our Specialization</h2>
        <hr className="hr-specialization" />
        <div className="specialization">
          <div className="rowspecial">
            <div className="card">
              <div className="specialicon">
                <TfiBlackboard className="icons" size="50"></TfiBlackboard>
              </div>
              <p className="specialcontentheading">Offline Classes</p>
              <p className="specialcontent">
                Experience the power of in-person learning with our exclusive
                offline batch. Join us for hands-on education and personalized
                guidance to unlock your full potential in the subject
              </p>
            </div>
            <div className="card">
              <div className="specialicon">
                <GrNotes className="icons" size="50"></GrNotes>
              </div>
              <p className="specialcontentheading">Quality Notes</p>
              <p className="specialcontent">
                Discover the difference with our high-quality notes that provide
                comprehensive insights and clarity, ensuring your success in
                mastering the subject.
              </p>
            </div>
            <div className="card">
              <div className="specialicon">
                <SiTestcafe className="icons" size="50"></SiTestcafe>
              </div>
              <p className="specialcontentheading">Sample Papers</p>
              <p className="specialcontent">
                Unlock exam success with our comprehensive collection of sample
                papers. Sharpen your skills and boost your confidence with real
                exam-style questions and solutions
              </p>
            </div>
          </div>
          <div className="rowspecial">
            <div className="card">
              <div className="specialicon">
                <MdOutlineAssignment
                  className="icons"
                  size="50"
                ></MdOutlineAssignment>
              </div>
              <p className="specialcontentheading">Assignments</p>
              <p className="specialcontent">
                Assignments that challenge and empower. Explore our
                thought-provoking tasks designed to enhance your understanding
                and skills.
              </p>
            </div>
            <div className="card">
              <div className="specialicon">
                <BsFillBookmarksFill
                  className="icons"
                  size="50"
                ></BsFillBookmarksFill>
              </div>
              <p className="specialcontentheading">Test Prepration</p>
              <p className="specialcontent">
                Test preparation tailored for success. Master your exams with
                our targeted strategies and study material.
              </p>
            </div>
            <div className="card">
              <div className="specialicon">
                <BsFillPatchQuestionFill
                  className="icons"
                  size="50"
                ></BsFillPatchQuestionFill>
              </div>
              <p className="specialcontentheading">Doubt Solving</p>
              <p className="specialcontent">
                Doubt solving is your lifeline to overcome learning hurdles. Get
                instant clarification and guidance on challenging concepts to
                ensure a deeper understanding of the subject
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
