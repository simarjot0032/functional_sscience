import personreading from "../assets/person-removebg-preview.png";
import "../styles/Home.css";
const Home = () => {
  return (
    <>
      <div className="container">
        <img src={personreading} alt="person-reading" className="home-img" />
        <hr />
        <div className="home-container-headings">
          <h1 className="home-container-heading">Functional</h1>
          <h1 className="home-container-heading">Science</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
