import "../styles/Classbooks.css";
import Indiviualchapter from "./Indiviualchapter";
import Image from "../assets/assignment.png";
import Prelims from "../assets/prelims.pdf";
import Chapter1 from "../assets/chapter 1.pdf";
import Chapter2 from "../assets/chapter2scienceten.pdf";
import Chapter3 from "../assets/chapter3scienceten.pdf";
import Chapter4 from "../assets/chapter4scienceten.pdf";
import Footer from "./Footer";

export default function Classtenbooks() {
  return (
    <>
      <Indiviualchapter
        numberofchapter={1}
        chaptername="Prelims"
        linkitem={"https://ncert.nic.in/textbook.php?jesc1=ps-13"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={2}
        chaptername="1. Chemical Reactions and Equations"
        linkitem={"https://ncert.nic.in/textbook.php?jesc1=1-13"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={3}
        chaptername="2. Acids,Bases and Salts"
        linkitem={"https://ncert.nic.in/textbook.php?jesc1=2-13"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={4}
        chaptername="3. Metals and Non-Metals"
        linkitem={"https://ncert.nic.in/textbook.php?jesc1=3-13"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={5}
        chaptername="4. Carbon & its Compunds"
        linkitem={"https://ncert.nic.in/textbook.php?jesc1=4-13"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={6}
        chaptername="5. Lifeproccess"
        linkitem={"https://ncert.nic.in/textbook.php?jesc1=5-13"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={7}
        chaptername="6. Control and Cordination"
        linkitem={"https://ncert.nic.in/textbook.php?jesc1=6-13"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={8}
        chaptername="7. How do Oransims Reproduce"
        linkitem={"https://ncert.nic.in/textbook.php?jesc1=7-13"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={9}
        chaptername="8. Heridity"
        linkitem={"https://ncert.nic.in/textbook.php?jesc1=8-13"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={10}
        chaptername="9. Light-Reflection & Refraction "
        linkitem={"https://ncert.nic.in/textbook.php?jesc1=9-13"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={11}
        chaptername="10. The Human Eye & the Colorful World"
        linkitem={"https://ncert.nic.in/textbook.php?jesc1=10-13"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={12}
        chaptername="11. Electricity"
        linkitem={"https://ncert.nic.in/textbook.php?jesc1=11-13"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={13}
        chaptername="12. Magnetic Effects of Electic Current"
        linkitem={"https://ncert.nic.in/textbook.php?jesc1=12-13"}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={14}
        chaptername="13. Our Enviroment"
        linkitem={"https://ncert.nic.in/textbook.php?jesc1=13-13"}
      ></Indiviualchapter>
      <Footer></Footer>
    </>
  );
}
