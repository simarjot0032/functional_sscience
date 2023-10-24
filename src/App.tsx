import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menubar from "./components/Menubar";
import Books from "./components/Books";
import Classten from "./components/Classten";
import Classnine from "./components/Classnine";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Menubar></Menubar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>

          <Route path="/Home" element={<Home></Home>}></Route>

          <Route path="/Books" element={<Books></Books>}></Route>

          <Route path="/Notes" element={<Home></Home>}></Route>

          <Route path="/Samplepapers" element={<Home></Home>}></Route>

          <Route path="/Assignments" element={<Home></Home>}></Route>
          <Route path="/Classnine" element={<Classnine></Classnine>}></Route>

          <Route path="/Classten" element={<Classten></Classten>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
