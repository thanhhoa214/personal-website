import AboutMeSection from "./components/AboutMeSection";
import Channel from "./components/Channel";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";

function App() {
  return (
    <>
      <Channel></Channel>
      <main className="max-w-7xl w-full mx-auto px-4">
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <AboutMeSection></AboutMeSection>
        {/* <ExperienceSection></ExperienceSection>
        <ProjectSection></ProjectSection>
        <div className="min-h-screen flex flex-col">
          <ContactSection className="py-12 flex-grow"></ContactSection>
          <footer className="py-4 text-center font-ubuntu text-sm">
            Designed &#38; inspired by{" "}
            <a
              href="https://github.com/bchiang7/v4"
              className="inline-block animated-border-bottom"
            >
              brittanychiang.com
            </a>
            <br />
            Customized &#38; rebuilt by me
          </footer>
        </div> */}
      </main>
    </>
  );
}

export default App;
