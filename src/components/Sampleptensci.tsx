import "../styles/Classbooks.css";
import Footer from "./Footer";
import Indiviualbook from "./Indiviualchapter";
import Image from "../assets/books-removebg-preview.png";

export default function Sampleptensci() {
  return (
    <>
      <Indiviualbook
        numberofchapter={1}
        chaptername="Prelims"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={2}
        chaptername="1. Chemical Reactions and Equations"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={3}
        chaptername="2. Acids,Bases and Salts"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={4}
        chaptername="3. Metals and Non-Metals"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={5}
        chaptername="4. Carbon & its Compunds"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={6}
        chaptername="5. Lifeproccess"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={7}
        chaptername="6. Control and Cordination"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={8}
        chaptername="7. How do Oransims Reproduce"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={9}
        chaptername="8. Heridity"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={10}
        chaptername="9. Light-Reflection & Refraction "
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={11}
        chaptername="10. The Human Eye & the Colorful World"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={12}
        chaptername="11. Electricity"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={13}
        chaptername="12. Magnetic Effects of Electic Current"
        linkitem={Image}
      ></Indiviualbook>
      <Indiviualbook
        numberofchapter={14}
        chaptername="13. Our Enviroment"
        linkitem={Image}
      ></Indiviualbook>

      <Footer></Footer>
    </>
  );
}
