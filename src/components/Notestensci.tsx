import "../styles/Classbooks.css";
import Indiviualchapter from "./Indiviualchapter";
import Image from "../assets/assignment.png";
import Footer from "./Footer";

export default function Notestensci() {
  return (
    <>
      <Indiviualchapter
        numberofchapter={1}
        chaptername="Prelims"
        linkitem={Image}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={2}
        chaptername="1. Chemical Reactions and Equations"
        linkitem={Image}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={3}
        chaptername="2. Acids,Bases and Salts"
        linkitem={Image}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={4}
        chaptername="3. Metals and Non-Metals"
        linkitem={Image}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={5}
        chaptername="4. Carbon & its Compunds"
        linkitem={Image}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={6}
        chaptername="5. Lifeproccess"
        linkitem={Image}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={7}
        chaptername="6. Control and Cordination"
        linkitem={Image}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={8}
        chaptername="7. How do Oransims Reproduce"
        linkitem={Image}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={9}
        chaptername="8. Heridity"
        linkitem={Image}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={10}
        chaptername="9. Light-Reflection & Refraction "
        linkitem={Image}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={11}
        chaptername="10. The Human Eye & the Colorful World"
        linkitem={Image}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={12}
        chaptername="11. Electricity"
        linkitem={Image}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={13}
        chaptername="12. Magnetic Effects of Electic Current"
        linkitem={Image}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={14}
        chaptername="13. Our Enviroment"
        linkitem={Image}
      ></Indiviualchapter>
      <Footer></Footer>
    </>
  );
}
