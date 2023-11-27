import "../styles/Classbooks.css";
import Footer from "./Footer";
import Indiviualbook from "./Indiviualchapter";
// import "https://ncert.nic.in/textbook.php?iemh1=ps-12" from "../assets/books-removebg-preview.png";

export default function Classninesci() {
  return (
    <>
      <Indiviualbook
        numberofchapter={1}
        chaptername="Prelims"
        linkitem={"https://ncert.nic.in/textbook.php?iemh1=ps-12"}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={2}
        chaptername="1. Number System"
        linkitem={"https://ncert.nic.in/textbook.php?iemh1=1-12"}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={3}
        chaptername="2. Polynomials"
        linkitem={"https://ncert.nic.in/textbook.php?iemh1=2-12"}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={4}
        chaptername="3. Coordinate Geometry"
        linkitem={"https://ncert.nic.in/textbook.php?iemh1=3-12"}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={5}
        chaptername="4. Linear Equations In Two Variables"
        linkitem={"https://ncert.nic.in/textbook.php?iemh1=4-12"}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={6}
        chaptername="5. Introduction To Euclid's Geometry"
        linkitem={"https://ncert.nic.in/textbook.php?iemh1=5-12"}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={7}
        chaptername="6. Lines & Angles"
        linkitem={"https://ncert.nic.in/textbook.php?iemh1=6-12"}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={8}
        chaptername="7. Triangles"
        linkitem={"https://ncert.nic.in/textbook.php?iemh1=7-12"}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={9}
        chaptername="8. Quadrilaterals"
        linkitem={"https://ncert.nic.in/textbook.php?iemh1=8-12"}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={10}
        chaptername="9. Circles"
        linkitem={"https://ncert.nic.in/textbook.php?iemh1=9-12"}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={11}
        chaptername="10. Heron's Formula"
        linkitem={"https://ncert.nic.in/textbook.php?iemh1=10-12"}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={12}
        chaptername="11. Surface Areas & Volumes"
        linkitem={"https://ncert.nic.in/textbook.php?iemh1=11-12"}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={13}
        chaptername="12. Statics"
        linkitem={"https://ncert.nic.in/textbook.php?iemh1=12-12"}
      ></Indiviualbook>

      <Footer></Footer>
    </>
  );
}
