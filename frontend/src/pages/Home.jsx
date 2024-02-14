import HeroSection from "../components/Hero/HeroSection";
import AboutUs from "./About/About";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Services />
      <Projects />

    </div>
  );
};

export default Home;
