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
            path="/Classninesci"
            element={<Classninescibook></Classninescibook>}
          ></Route>
          <Route
            path="/Classninemaths"
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
            path="/Samplepaperten"
            element={<Samplepaperten></Samplepaperten>}
          ></Route>
          <Route
            path="/Samplepapernine"
            element={<Samplepapernine></Samplepapernine>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
