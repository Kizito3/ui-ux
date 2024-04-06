import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        {/* <Hero
          content="UI/UX design
          subscription:
          Elevate your
          startup."
        /> */}
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default App;
