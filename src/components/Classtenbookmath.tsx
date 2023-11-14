import Indiviualchapter from "./Indiviualchapter";
import Image from "../assets/books-removebg-preview.png";
import "../styles/Classbooks.css";
import Prelimsmathsten from "../assets/prelimsmathsten.pdf";
import Chapter1 from "../assets/chapter1mathsten.pdf";
import Chapter2 from "../assets/chapter2mathsten.pdf";
import Chapter3 from "../assets/chapter3mathsten.pdf";
import Chapter4 from "../assets/chapter4mathsten.pdf";
import Chapter5 from "../assets/chapter5mathsten.pdf";
import Chapter6 from "../assets/chapter6mathsten.pdf";
import Chapter7 from "../assets/chapter7mathsten.pdf";
import Chapter8 from "../assets/chapter8mathsten.pdf";
export default function Classtenbookmath() {
  return (
    <>
      <Indiviualchapter
        numberofchapter={1}
        chaptername="Prelims"
        linkitem={"https://ncert.nic.in/textbook.php?jemh1=ps-14"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={2}
        chaptername="1. Real Numbers"
        linkitem={"https://ncert.nic.in/textbook.php?jemh1=1-14"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={3}
        chaptername="2. Polynomials"
        linkitem={"https://ncert.nic.in/textbook.php?jemh1=2-14"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={4}
        chaptername="3. Pair of Linear Equations In Two Variables"
        linkitem={"https://ncert.nic.in/textbook.php?jemh1=3-14"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={5}
        chaptername="4. Quadratics Equations"
        linkitem={"https://ncert.nic.in/textbook.php?jemh1=4-14"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={6}
        chaptername="5. Arthmetic Progession"
        linkitem={"https://ncert.nic.in/textbook.php?jemh1=5-14"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={7}
        chaptername="6. Traingles"
        linkitem={"https://ncert.nic.in/textbook.php?jemh1=6-14"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={8}
        chaptername="7. Coordinate Geomerty"
        linkitem={"https://ncert.nic.in/textbook.php?jemh1=7-14"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={9}
        chaptername="8. Introduction To Trignometry"
        linkitem={"https://ncert.nic.in/textbook.php?jemh1=8-14"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={10}
        chaptername="9. Some Applications of Trignomentry"
        linkitem={"https://ncert.nic.in/textbook.php?jemh1=9-14"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={11}
        chaptername="10. Cricles"
        linkitem={"https://ncert.nic.in/textbook.php?jemh1=10-14"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={12}
        chaptername="11. Area Related to Circles"
        linkitem={"https://ncert.nic.in/textbook.php?jemh1=11-14"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={13}
        chaptername="12. Surface Areas and Volumes"
        linkitem={"https://ncert.nic.in/textbook.php?jemh1=12-14"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={14}
        chaptername="13. Stactics"
        linkitem={"https://ncert.nic.in/textbook.php?jemh1=13-14"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={13}
        chaptername="14. Probablity"
        linkitem={"https://ncert.nic.in/textbook.php?jemh1=14-14"}
      ></Indiviualchapter>
    </>
  );
}
