import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menubar from "./components/Menubar";
import Books from "./components/Books";
import Classtenbooks from "./components/Classtenbooks";
// import Classninebooks from "./components/Classninebooks";
import Classtenbooksci from "./components/Classtenbooksci";
import Classtenbookmath from "./components/Classtenbookmath";
import Classninescibook from "./components/Classninescibook";
import Classninemathbook from "./components/Classninemathsbook";
import Notes from "./components/Notes";
import Classtennotes from "./components/Classtennotes";
import Classninenotes from "./components/Classninenotes";
import Samplepapers from "./components/Samplepaper";
import Samplepaperten from "./components/Samplepaperten";
import Samplepapernine from "./components/Samplepapernine";
import Notestensci from "./components/Notestensci";
import Notestenmaths from "./components/Notestenmaths";
import Notesninesci from "./components/Notesninesci";
import Notesninemaths from "./components/Notesninemaths";
import Samplepninesci from "./components/Samplepninesci";
import Samplepninemaths from "./components/Samplepninemaths";
import Sampleptenmaths from "./components/Sampleptenmaths";
import Sampleptensci from "./components/Sampleptensci";
import Assignment from "./components/Assignment";
import Classninebooks from "./components/Classninebooks";
import Assignmentten from "./components/Assignmentten";
import Assignmentnine from "./components/Assignmentnine";
import Assignmenttensci from "./components/Assignmenttensci";
import Assignmenttenmaths from "./components/Assignmenttenmaths";
import Assignmentninesci from "./components/Assignmentninesci";
import Assignmentninemaths from "./components/Assignmentninemaths";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Menubar></Menubar>
        <Routes>
          {/* routes setup for all routes */}
          <Route path="/" element={<Home></Home>}></Route>

          <Route path="/Home" element={<Home></Home>}></Route>

          <Route path="/functionalscience" element={<Home></Home>}></Route>

          <Route path="/Books" element={<Books></Books>}></Route>

          <Route path="/Notes" element={<Notes></Notes>}></Route>

          <Route
            path="/Samplepapers"
            element={<Samplepapers></Samplepapers>}
          ></Route>

          <Route
            path="/Assignments"
            element={<Assignment></Assignment>}
          ></Route>

          <Route
            path="/Classninebooks"
            element={<Classninebooks></Classninebooks>}
          ></Route>
          <Route
            path="/Classtenbooks"
            element={<Classtenbooks></Classtenbooks>}
          ></Route>
          <Route
            path="/Classtenbooksci"
            element={<Classtenbooksci></Classtenbooksci>}
          ></Route>
          <Route
            path="/Classtenbookmaths"
            element={<Classtenbookmath></Classtenbookmath>}
          ></Route>
          <Route
            path="/Classninescibook"
            element={<Classninescibook></Classninescibook>}
          ></Route>
          <Route
            path="/Classninemathsbook"
            element={<Classninemathbook></Classninemathbook>}
          ></Route>
          <Route
            path="/Classtennotes"
            element={<Classtennotes></Classtennotes>}
          ></Route>
          <Route
            path="/Classninenotes"
            element={<Classninenotes></Classninenotes>}
          ></Route>
          <Route
            path="/Notestensci"
            element={<Notestensci></Notestensci>}
          ></Route>
          <Route
            path="/Notestenmaths"
            element={<Notestenmaths></Notestenmaths>}
          ></Route>
          <Route
            path="/Notesninesci"
            element={<Notesninesci></Notesninesci>}
          ></Route>
          <Route
            path="/Notesninemaths"
            element={<Notesninemaths></Notesninemaths>}
          ></Route>
          <Route
            path="/Samplepaperten"
            element={<Samplepaperten></Samplepaperten>}
          ></Route>
          <Route
            path="/Samplepapernine"
            element={<Samplepapernine></Samplepapernine>}
          ></Route>
          <Route
            path="/Sampleptensci"
            element={<Sampleptensci></Sampleptensci>}
          ></Route>
          <Route
            path="/Sampleptenmaths"
            element={<Sampleptenmaths></Sampleptenmaths>}
          ></Route>
          <Route
            path="/Samplepninesci"
            element={<Samplepninesci></Samplepninesci>}
          ></Route>
          <Route
            path="/Samplepninemaths"
            element={<Samplepninemaths></Samplepninemaths>}
          ></Route>
          <Route
            path="/Assignmentten"
            element={<Assignmentten></Assignmentten>}
          ></Route>
          <Route
            path="/Assignmentnine"
            element={<Assignmentnine></Assignmentnine>}
          ></Route>
          <Route
            path="/Assignmenttensci"
            element={<Assignmenttensci></Assignmenttensci>}
          ></Route>
          <Route
            path="/Assignmenttenmaths"
            element={<Assignmenttenmaths></Assignmenttenmaths>}
          ></Route>
          <Route
            path="/Assignmentninesci"
            element={<Assignmentninesci></Assignmentninesci>}
          ></Route>
          <Route
            path="/Assignmentninemaths"
            element={<Assignmentninemaths></Assignmentninemaths>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
