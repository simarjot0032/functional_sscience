import "../styles/Classbooks.css";
import Footer from "./Footer";
import Indiviualbook from "./Indiviualchapter";
import Image from "../assets/books-removebg-preview.png";

export default function Samplepninesci() {
  return (
    <>
      <Indiviualbook
        numberofchapter={1}
        chaptername="Prelims"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={2}
        chaptername="1. Matters In Our Surroundings"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={3}
        chaptername="2. Is Matter Around Us Pure"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={4}
        chaptername="3. Atoms & Molecules"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={5}
        chaptername="4. Structure Of The Atom"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={6}
        chaptername="5. The Fundamentals Unit Of Life"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={7}
        chaptername="6. Tissues"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={8}
        chaptername="7. Motion"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={9}
        chaptername="8. Forcw And Laws Of Motion"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={10}
        chaptername="9. Gravitaion"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={11}
        chaptername="10. Work & Energy"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={12}
        chaptername="11. Sounds"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={13}
        chaptername="12. Improvements In Food Resources"
        linkitem={Image}
      ></Indiviualbook>

      <Footer></Footer>
    </>
  );
}
