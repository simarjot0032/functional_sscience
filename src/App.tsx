import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menubar from "./components/Menubar";
import Books from "./components/Books";
import Classtenbooks from "./components/Classtenbooks";
import Classnine from "./components/Classninebooks";
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

          <Route path="/Books" element={<Books></Books>}></Route>

          <Route path="/Notes" element={<Notes></Notes>}></Route>

          <Route
            path="/Samplepapers"
            element={<Samplepapers></Samplepapers>}
          ></Route>

          <Route path="/Assignments" element={<Home></Home>}></Route>

          <Route path="/Classnine" element={<Classnine></Classnine>}></Route>
          <Route
            path="/Classten"
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
