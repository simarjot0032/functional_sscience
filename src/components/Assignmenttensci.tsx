import "../styles/Classbooks.css";
import Footer from "./Footer";
import Indiviualbook from "./Indiviualchapter";
import Image from "../assets/books-removebg-preview.png";
import Assignment1 from "../assets/class10scienceassignmen2.pdf";
import Assignment2 from "../assets/class10scienceassignmen1.pdf";

export default function Assignmenttensci() {
  return (
    <>
      <div style={{ height: "90vh" }}>
        <Indiviualbook
          numberofchapter={1}
          chaptername="1.Assignment 1"
          linkitem={Assignment1}
        ></Indiviualbook>
        <Indiviualbook
          numberofchapter={2}
          chaptername="2. Assignment 2"
          linkitem={Assignment2}
        ></Indiviualbook>
      </div>
      <Footer></Footer>
    </>
  );
}
