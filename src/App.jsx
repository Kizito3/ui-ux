import Design from "./components/Design";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reliable from "./components/Reliable";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <Design />
        <Reliable />
        <Footer />
      </div>
    </>
  );
}

export default App;
