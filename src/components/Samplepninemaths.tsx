import "../styles/Classbooks.css";
import Footer from "./Footer";
import Indiviualbook from "./Indiviualchapter";
import Image from "../assets/books-removebg-preview.png";
import Sample1 from "../assets/CBSE-Sample-Paper-Class-9-Maths-Set-1.pdf";
import Sample2 from "../assets/CBSE-Sample-Paper-Class-9-Maths-Set-2.pdf";
import Sample3 from "../assets/CBSE-Sample-Paper-Class-9-Maths-Set-3.pdf";
export default function Samplepninemaths() {
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
