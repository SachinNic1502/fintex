'use client';
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  return (
    <div ref={ref} className="container mx-auto">
      {/* Progress Bar */}
      
      <Navbar />
      <motion.div
        className="fixed top-0 left-0 h-2 bg-blue-600 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <Hero />
      <Services />
      <About />
      <Footer />
    </div>
  );
}
