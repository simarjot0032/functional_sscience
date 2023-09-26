import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./components/Menubar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Menu></Menu> */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        {/* <Route path="/Books" element={<Home></Home>}></Route>

        <Route path="/Notes" element={<Home></Home>}></Route>

        <Route path="/Samplepapers" element={<Home></Home>}></Route>

        <Route path="/Assignments" element={<Home></Home>}></Route> */}
      </Routes>
    </>
  );
}

export default App;
