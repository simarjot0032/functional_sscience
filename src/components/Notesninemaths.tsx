import "../styles/Classbooks.css";
import Footer from "./Footer";
import Indiviualbook from "./Indiviualchapter";
import Image from "../assets/books-removebg-preview.png";

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
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={3}
        chaptername="2. Polynomials"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={4}
        chaptername="3. Coordinate Geometry"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={5}
        chaptername="4. Linear Equations In Two Variables"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={6}
        chaptername="5. Introduction To Euclid's Geometry"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={7}
        chaptername="6. Lines & Angles"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={8}
        chaptername="7. Triangles"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={9}
        chaptername="8. Quadrilaterals"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={10}
        chaptername="9. Circles"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={11}
        chaptername="10. Heron's Formula"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={12}
        chaptername="11. Surface Areas & Volumes"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={13}
        chaptername="12. Statics"
        linkitem={Image}
      ></Indiviualbook>

      <Footer></Footer>
    </>
  );
}
