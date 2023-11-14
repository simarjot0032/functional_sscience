import "../styles/Classbooks.css";
import Footer from "./Footer";
import Indiviualbook from "./Indiviualchapter";
import Image from "../assets/books-removebg-preview.png";
import Sample1 from "../assets/MathsStandard-SQP 2023-24.pdf";
import Sample2 from "../assets/MathsStandard-SQP 2223.pdf";
import Sample3 from "../assets/CBSE-Class-10-Maths-Sample-Paper-Set-6.pdf";

export default function Sampleptenmaths() {
  return (
    <>
      <div style={{ height: "90vh" }}>
        <Indiviualbook
          numberofchapter={1}
          chaptername="1.Sample Paper 1"
          linkitem={Sample1}
        ></Indiviualbook>
        <Indiviualbook
          numberofchapter={2}
          chaptername="2. Sample Paper 2"
          linkitem={Sample2}
        ></Indiviualbook>
        <Indiviualbook
          numberofchapter={3}
          chaptername="3. Sample Paper 3"
          linkitem={Sample3}
        ></Indiviualbook>
      </div>
      <Footer></Footer>
    </>
  );
}
