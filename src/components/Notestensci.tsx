import "../styles/Classbooks.css";
import Indiviualchapter from "./Indiviualchapter";
import Prelim from "../assets/prelims.pdf";

import Chapter1 from "../assets/chapter1sciencetennotes.pdf";
import Chapter2 from "../assets/chapter2sciencetennotes.pdf";
import Chapter3 from "../assets/chapter3sciencetennotes.pdf";
import Chapter4 from "../assets/chapter4sciencetennotes.pdf";
import Chapter5 from "../assets/chapter5sciencetennotes.pdf";
import Chapter6 from "../assets/chapter6sciencetennotes.pdf";
import Chapter7 from "../assets/chapter7sciencetennotes.pdf";
import Chapter8 from "../assets/chapter8sciencetennotes.pdf";
import Chapter9 from "../assets/chapter9sciencetennotes.pdf";
import Chapter10 from "../assets/chapter10sciencetennotes.pdf";
import Chapter11 from "../assets/chapter11sciencetennotes.pdf";
import Chapter12 from "../assets/chapter12sciencetennotes.pdf";
import Chapter13 from "../assets/chapter13sciencetennotes.pdf";
// import Chapter9 from "../assets/class 10 light.pdf";
import Footer from "./Footer";

export default function Notestensci() {
  return (
    <>
      <Indiviualchapter
        numberofchapter={1}
        chaptername="Prelims"
        linkitem={Prelim}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={2}
        chaptername="1. Chemical Reactions and Equations"
        linkitem={Chapter1}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={3}
        chaptername="2. Acids,Bases and Salts"
        linkitem={Chapter2}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={4}
        chaptername="3. Metals and Non-Metals"
        linkitem={Chapter3}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={5}
        chaptername="4. Carbon & its Compunds"
        linkitem={Chapter4}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={6}
        chaptername="5. Lifeproccess"
        linkitem={Chapter5}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={7}
        chaptername="6. Control and Cordination"
        linkitem={Chapter6}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={8}
        chaptername="7. How do Oransims Reproduce"
        linkitem={Chapter7}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={9}
        chaptername="8. Heridity"
        linkitem={Chapter8}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={10}
        chaptername="9. Light-Reflection & Refraction "
        linkitem={Chapter9}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={11}
        chaptername="10. The Human Eye & the Colorful World"
        linkitem={Chapter10}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={12}
        chaptername="11. Electricity"
        linkitem={Chapter11}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={13}
        chaptername="12. Magnetic Effects of Electic Current"
        linkitem={Chapter12}
      ></Indiviualchapter>
      <Indiviualchapter
        numberofchapter={14}
        chaptername="13. Our Enviroment"
        linkitem={Chapter13}
      ></Indiviualchapter>
      <Footer></Footer>
    </>
  );
}
