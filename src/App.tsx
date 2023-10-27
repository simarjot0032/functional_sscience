import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menubar from "./components/Menubar";
import Books from "./components/Books";
import Classten from "./components/Classten";
import Classnine from "./components/Classnine";
import Classtenbooksci from "./components/Classtenbooksci";
import Classtenbookmath from "./components/Classtenbookmath";
import Classninesci from "./components/Classninesci";
import Classninemath from "./components/Classninemaths";
import Notes from "./components/Notes";

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

          <Route path="/Samplepapers" element={<Home></Home>}></Route>

          <Route path="/Assignments" element={<Home></Home>}></Route>
          <Route path="/Classnine" element={<Classnine></Classnine>}></Route>
          <Route path="/Classten" element={<Classten></Classten>}></Route>
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
            element={<Classninesci></Classninesci>}
          ></Route>
          <Route
            path="/Classninemaths"
            element={<Classninemath></Classninemath>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
