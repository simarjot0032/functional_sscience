import "../styles/Classbooks.css";
import Footer from "./Footer";
import Indiviualchapter from "./Indiviualchapter";
// import "https://ncert.nic.in/textbook.php?iesc1=ps-12" from "../assets/books-removebg-preview.png";

export default function Classninesci() {
  return (
    <>
      <Indiviualchapter
        numberofchapter={1}
        chaptername="Prelims"
        linkitem={"https://ncert.nic.in/textbook.php?iesc1=ps-12"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={2}
        chaptername="1. Matters In Our Surroundings"
        linkitem={"https://ncert.nic.in/textbook.php?iesc1=1-12"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={3}
        chaptername="2. Is Matter Around Us Pure"
        linkitem={"https://ncert.nic.in/textbook.php?iesc1=2-12"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={4}
        chaptername="3. Atoms & Molecules"
        linkitem={"https://ncert.nic.in/textbook.php?iesc1=3-12"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={5}
        chaptername="4. Structure Of The Atom"
        linkitem={"https://ncert.nic.in/textbook.php?iesc1=4-12"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={6}
        chaptername="5. The Fundamentals Unit Of Life"
        linkitem={"https://ncert.nic.in/textbook.php?iesc1=5-12"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={7}
        chaptername="6. Tissues"
        linkitem={"https://ncert.nic.in/textbook.php?iesc1=6-12"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={8}
        chaptername="7. Motion"
        linkitem={"https://ncert.nic.in/textbook.php?iesc1=7-12"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={9}
        chaptername="8. Forcw And Laws Of Motion"
        linkitem={"https://ncert.nic.in/textbook.php?iesc1=8-12"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={10}
        chaptername="9. Gravitaion"
        linkitem={"https://ncert.nic.in/textbook.php?iesc1=9-12"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={11}
        chaptername="10. Work & Energy"
        linkitem={"https://ncert.nic.in/textbook.php?iesc1=10-12"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={12}
        chaptername="11. Sounds"
        linkitem={"https://ncert.nic.in/textbook.php?iesc1=11-12"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={13}
        chaptername="12. Improvements In Food Resources"
        linkitem={"https://ncert.nic.in/textbook.php?iesc1=12-12"}
      ></Indiviualchapter>

      <Footer></Footer>
    </>
  );
}
