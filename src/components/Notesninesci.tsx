import "../styles/Classbooks.css";
import Footer from "./Footer";
import Indiviualchapter from "./Indiviualchapter";
import Chapter1 from "../assets/Chapter-1-Matter-In-Our-Surroundings-1.pdf";
import Chapter2 from "../assets/Chapter-2-matter-in-our-surroundings.docx.pdf";
import Chapter3 from "../assets/Atoms-And-Molecules-Class-9-Notes-Chapter-3.docx.pdf";
import Chapter4 from "../assets/Chapter-2-matter-in-our-surroundings.docx.pdf";
import Chapter5 from "../assets/The-Fundamental-Unit-Of-Life-Class-9-Notes-Chapter-5.pdf";
import Chapter6 from "../assets/CBSE-Class-9-Science-Notes-on-Tissues.pdf";
import Chapter7 from "../assets/Force-and-Laws-of-Motion.pdf";
import Chapter8 from "../assets/Force-and-Laws-of-Motion.pdf";
import Chapter9 from "../assets/Class-9-Science-Chapter-10-Gravitation.docx.pdf";
import Chapter10 from "../assets/Class-9-Science-Chapter-10-Gravitation.docx.pdf";
import Chapter11 from "../assets/Class-9-Science-Chapter-10-Gravitation.docx.pdf";

import Chapter12 from "../assets/Class-9-Science-Chapter-10-Gravitation.docx.pdf";

import Image from "../assets/books-removebg-preview.png";

export default function Notesninesci() {
  return (
    <>
      <Indiviualchapter
        numberofchapter={1}
        chaptername="Prelims"
        linkitem={Image}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={2}
        chaptername="1. Matters In Our Surroundings"
        linkitem={Chapter1}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={3}
        chaptername="2. Is Matter Around Us Pure"
        linkitem={Chapter2}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={4}
        chaptername="3. Atoms & Molecules"
        linkitem={Chapter3}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={5}
        chaptername="4. Structure Of The Atom"
        linkitem={Chapter5}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={6}
        chaptername="5. The Fundamentals Unit Of Life"
        linkitem={Chapter5}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={7}
        chaptername="6. Tissues"
        linkitem={Chapter6}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={8}
        chaptername="7. Motion"
        linkitem={Chapter7}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={9}
        chaptername="8. Forcw And Laws Of Motion"
        linkitem={Chapter8}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={10}
        chaptername="9. Gravitaion"
        linkitem={Chapter9}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={11}
        chaptername="10. Work & Energy"
        linkitem={Chapter10}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={12}
        chaptername="11. Sounds"
        linkitem={Chapter11}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={13}
        chaptername="12. Improvements In Food Resources"
        linkitem={Chapter12}
      ></Indiviualchapter>

      <Footer></Footer>
    </>
  );
}
