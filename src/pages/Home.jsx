import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import About from "../component/About";
import Skills from "../component/Skills";
import Projects from "../component/Projects";
import Education from "../component/Education";
import Certificates from "../component/Certificates";
import Contact from "../component/Contact";
import Footer from "../component/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates/>
      <Education/>
      <Contact/>
      <Footer/>
     
    </>
  );
}

export default Home;