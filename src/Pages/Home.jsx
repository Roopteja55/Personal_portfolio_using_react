import About from "../components/About/About";
import Annocement_bar from "../components/Annocementbar/Annocement_bar";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import Education from "../components/Education/Education";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";


const Home = () => {
  return (
      <>
      <Header />
      <Annocement_bar />
      <Hero />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      </>
  )
}

export default Home