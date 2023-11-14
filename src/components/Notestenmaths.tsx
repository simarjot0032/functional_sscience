import Indiviualchapter from "./Indiviualchapter";
import Image from "../assets/books-removebg-preview.png";
import Chapter1 from "../assets/real-numbers-for-class-10.pdf";
import Chapter2 from "../assets/polynomial-for-class-10.pdf";
import Chapter3 from "../assets/cbse-class-10-maths-notes-chapter-3-pair-of-linear-equations-in-two-variables.pdf";
import Chapter4 from "../assets/quadratic-equation-for-class-10.pdf";
import Chapter5 from "../assets/arithmetic-progression-for-class-10.pdf";
import Chapter6 from "../assets/triangles-for-class-10.pdf";
import Chapter7 from "../assets/coordinate-geometry-for-class-10.pdf";
import Chapter8 from "../assets/trigonometry-for-class-10.pdf";
import Chapter9 from "../assets/some-application-of-trigonometry-for-class-10.pdf";
import Chapter10 from "../assets/Circles-for-Class-10-PDF.docx.pdf";
import Chapter11 from "../assets/areas-related-to-circles-for-class-10.pdf";
import Chapter12 from "../assets/Surface-Area-and-Volume-Class-10-PDF.docx-1.pdf";
import Chapter13 from "../assets/statistics-for-class-10.pdf";
import Chapter14 from "../assets/probability-for-class-10.pdf";

import "../styles/Classbooks.css";
import Footer from "./Footer";
export default function Notestenmaths() {
  return (
    // indiviualbook called
    <>
      <Indiviualchapter
        numberofchapter={1}
        chaptername="Prelims"
        linkitem={Image}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={2}
        chaptername="1. Real Numbers"
        linkitem={Chapter1}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={3}
        chaptername="2. Polynomials"
        linkitem={Chapter2}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={4}
        chaptername="3. Pair of Linear Equations In Two Variables"
        linkitem={Chapter3}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={5}
        chaptername="4. Quadratics Equations"
        linkitem={Chapter4}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={6}
        chaptername="5. Arthmetic Progession"
        linkitem={Chapter5}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={7}
        chaptername="6. Traingles"
        linkitem={Chapter6}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={8}
        chaptername="7. Coordinate Geomerty"
        linkitem={Chapter7}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={9}
        chaptername="8. Introduction To Trignometry"
        linkitem={Chapter8}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={10}
        chaptername="9. Some Applications of Trignomentry"
        linkitem={Chapter9}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={11}
        chaptername="10. Cricles"
        linkitem={Chapter10}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={12}
        chaptername="11. Area Related to Circles"
        linkitem={Chapter11}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={13}
        chaptername="12. Surface Areas and Volumes"
        linkitem={Chapter12}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={14}
        chaptername="13. Stactics"
        linkitem={Chapter13}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={13}
        chaptername="14. Probablity"
        linkitem={Chapter14}
      ></Indiviualchapter>
      <Footer></Footer>
    </>
  );
}
