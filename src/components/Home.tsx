import personreading from "../assets/p2-removebg-preview.png";
import ncert from "../assets/books.png";
import samplepaper from "../assets/science.webp";
import note from "../assets/download.jpeg";
import userimg from "../assets/user.png";
import assignments from "../assets/assignment.png";
import solution from "../assets/ncert-solutions-class-9-math-chapter-2-polynomials-1.jpg";
import "../styles/Home.css";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { BsFillBookmarksFill, BsFillPatchQuestionFill } from "react-icons/bs";
import { TfiBlackboard } from "react-icons/tfi";
import { GrNotes } from "react-icons/gr";
import { SiTestcafe } from "react-icons/si";
import { MdOutlineAssignment } from "react-icons/md";
import { Footer } from "./Footer";
import Contactform from "./Contactform";

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

        <div className="studyheading heading-specialization">
          Study Material
        </div>
        <hr className="hr-specialization" />
        <div className="study">
          <div className="study-card blue">
            <div className="study-card-heading">NCERT Books</div>

            <div className="img-study">
              <img src={ncert} alt="" className="study-img" />
            </div>
          </div>
          <div className="study-card orange">
            <div className="study-card-heading">Sample Papers</div>

            <div className="img-study">
              <img src={samplepaper} alt="" className="study-img sample" />
            </div>
          </div>
          <div className="study-card blue">
            <div className="study-card-heading">Notes</div>

            <div className="img-study">
              <img src={note} alt="" className="study-img" />
            </div>
          </div>
          <div className="study-card orange">
            <div className="study-card-heading">Assignments</div>

            <div className="img-study">
              <img src={assignments} alt="" className="study-img" />
            </div>
          </div>
          <div className="study-card blue">
            <div className="study-card-heading">NCERT Solution</div>

            <div className="img-study">
              <img src={solution} alt="" className="study-img" />
            </div>
          </div>
        </div>

        <div className="review-heading">Students Review</div>
        <hr className="hr-specialization reviewhr" />
        <div className="review-back">
          <div className="review">
            <div className="review-card">
              <div className="profile">
                <img src={userimg} alt="" className="userimg" />
                <div className="rname">Sukhmanpreet Singh</div>
              </div>
              <div className="rating">⭐⭐⭐⭐(4/5)</div>
              <div className="review-content">
                Functional Science has been an absolute game-changer for me in
                my 9th and 10th-grade studies. The platform offers a
                comprehensive range of resources that cover all subjects, from
                math and science to humanities.
              </div>
            </div>

            <div className="review-card">
              <div className="profile">
                <img src={userimg} alt="" className="userimg" />
                <div className="rname">Tejnoor Singh</div>
              </div>
              <div className="rating"> ⭐⭐⭐⭐⭐(5/5)</div>
              <div className="review-content">
                Functional Science has been my go-to resource for my 11th and
                12th-grade studies. The website offers a wide variety of study
                materials, including detailed notes, practice tests, and essay
                writing guides, which have been incredibly helpful for my
                academic growth
              </div>
            </div>

            <div className="review-card">
              <div className="profile">
                <img src={userimg} alt="" className="userimg" />
                <div className="rname">Simarjot Singh</div>
              </div>
              <div className="rating"> ⭐⭐⭐⭐⭐(5/5)</div>
              <div className="review-content">
                Functional Scienceis an exceptional educational website for 11th
                and 12th-grade students. The platform offers top-notch video
                lectures, comprehensive study materials, and a vast library of
                practice tests and past exam papers.
              </div>
            </div>
          </div>
        </div>
        {/* form */}
        <div className="forms" style={{ margin: "1rem" }}>
          <Contactform></Contactform>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
