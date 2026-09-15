import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Experience from "./components/Experience";
import Services from "./components/Services";
import WhatsAppCTA from "./components/WhatsAppCTA";
import Footer from "./components/Footer";

import SpectacleReveal from "./components/SpectacleReveal";
import Loader from "./components/Loader";

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // LOADER KE DAURAN SCROLL BAND
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);

      document.body.style.overflow = "auto";
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />

      <SpectacleReveal effect="portal">
        <Hero />
      </SpectacleReveal>

      <SpectacleReveal effect="flip-left">
        <About />
      </SpectacleReveal>

      <SpectacleReveal effect="rise">
        <Skills />
      </SpectacleReveal>

      <SpectacleReveal effect="flip-right">
        <Projects />
      </SpectacleReveal>

      {/* <SpectacleReveal effect="flip-left">
        <Experience />
      </SpectacleReveal> */}

      <SpectacleReveal effect="rise">
        <Services />
      </SpectacleReveal>

      <SpectacleReveal effect="portal">
        <WhatsAppCTA />
      </SpectacleReveal>

      <Footer />
    </>
  );
};

export default App;