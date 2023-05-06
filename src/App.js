import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
function App() {
  return (
    <>
      <div className="d-flex flex-column vh_xl_100 bg_image">
        <NavBar />
        <HeroSection/>
      </div>
    </>
  );
}

export default App;
