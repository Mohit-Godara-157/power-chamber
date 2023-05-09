import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Preloader from "./components/PreLoader";
import Rating from "./components/Rating";
import YourComment from "./components/YourComment";
import Overview from "./components/Overview";
function App() {
  return (
    <>
      <Preloader />
      <div className=" bg_image">
        <NavBar />
        <HeroSection />
      </div>
      <div className="sectionThird pb-0 pb-lg-5 mt-4 mt-lg-0">
        <Rating />
        <YourComment />
      </div>
      <Overview/>
    </>
  );
}

export default App;
