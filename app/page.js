import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Footer />
    </div>
  );
}
