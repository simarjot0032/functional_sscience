import "../styles/Classbooks.css";
import Footer from "./Footer";
import Indiviualbook from "./Indiviualchapter";
import Image from "../assets/books-removebg-preview.png";
import Chapter1 from "../assets/cbse-class-9-maths-notes-chapter-1-number-system.pdf";
import Chapter2 from "../assets/Polynomials-Class-9-Notes-PDF.docx.pdf";
import Chapter3 from "../assets/coordinate-geometry-class-9.pdf";
import Chapter4 from "../assets/linear-equations-in-two-variables-class-9.pdf";
import Chapter5 from "../assets/Introduction-to-Euclid%E2%80%99s-Geometry-Class-9-Notes_-Chapter-5-2.pdf";
import Chapter6 from "../assets/lines-and-angles-class-9.pdf";
import Chapter7 from "../assets/triangles-class-9.pdf";
import Chapter8 from "../assets/quadrilaterals-class-9.pdf";
import Chapter9 from "../assets/cbse-class-9-maths-notes-chapter-10-circles.pdf";
import Chapter10 from "../assets/herons-formula-class-9.pdf";
import Chapter11 from "../assets/surface-areas-and-volumes-class-9.pdf";
import Chapter12 from "../assets/cbse-class-9-maths-notes-for-chapter-14-statistics.pdf";

export default function Notesninemaths() {
  return (
    <>
      <Indiviualbook
        numberofchapter={1}
        chaptername="Prelims"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={2}
        chaptername="1. Number System"
        linkitem={Chapter1}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={3}
        chaptername="2. Polynomials"
        linkitem={Chapter2}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={4}
        chaptername="3. Coordinate Geometry"
        linkitem={Chapter3}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={5}
        chaptername="4. Linear Equations In Two Variables"
        linkitem={Chapter4}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={6}
        chaptername="5. Introduction To Euclid's Geometry"
        linkitem={Chapter5}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={7}
        chaptername="6. Lines & Angles"
        linkitem={Chapter6}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={8}
        chaptername="7. Triangles"
        linkitem={Chapter7}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={9}
        chaptername="8. Quadrilaterals"
        linkitem={Chapter8}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={10}
        chaptername="9. Circles"
        linkitem={Chapter9}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={11}
        chaptername="10. Heron's Formula"
        linkitem={Chapter10}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={12}
        chaptername="11. Surface Areas & Volumes"
        linkitem={Chapter11}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={13}
        chaptername="12. Statics"
        linkitem={Chapter12}
      ></Indiviualbook>

      <Footer></Footer>
    </>
  );
}
