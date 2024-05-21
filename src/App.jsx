import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import AboutMeSection from "./components/AboutMeSection";
import TimelineSection from "./components/TimeLine";

function App() {
  return (
    <ChakraProvider>
      <main className="relative">
        <Header />
        <LandingSection />
        <AboutMeSection />
        <ProjectsSection />
        <TimelineSection />
        <ContactMeSection />
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;
