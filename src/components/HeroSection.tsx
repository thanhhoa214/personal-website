import { AnimationOnScroll } from "react-animation-on-scroll";
import { SectionId } from "../constants/data";
import BounceSeeMore from "./atoms/BounceSeeMore";

export default function HeroSection() {
  return (
    <section className="py-8 px-4 md:px-12 xl:px-16 h-main relative">
      <p className="font-ubuntu text-sm md:text-xl text-neon-500">
        <AnimationOnScroll
          animateIn="animate__wobble"
          className="inline-block w-20 text-4xl leading-4"
        >
          👋
        </AnimationOnScroll>
        <br />
        I'm a Full-stack Software Engineer
      </p>
      <div className="border-b border-neon-500 border-solid w-52 md:w-72 mb-6 ml-10 md:ml-14"></div>

      <h1 className="mb-6 leading-tight text-2xl">
        <strong className="inline-block text-gray-100 relative font-extrabold md:text-4xl lg:text-5xl">
          Hoa "Rin" Nguyen 🇻🇳
        </strong>

        <p className="mb-0 font-bold md:text-4xl lg:text-5xl">
          I build awesome things for the web.
        </p>
      </h1>

      <p className="max-w-2xl mb-8">
        I'm a Melbourne-based developer with 4+ years of experience building
        scalable web apps using Angular, NextJS, and TypeScript. Passionate
        about crafting high-quality code and optimized user experiences.
        Currently, I'm actively looking for challenging remote work on AI,
        Blockchain, Finance sector especially early start-ups.
      </p>
      <a
        href="https://docs.google.com/document/d/1qD2p9DSOKE4IHRY0ZO_vn9X5Nwgf0yXUNlkmg7HZQpE"
        target="_blank"
        rel="noreferrer"
        className="border border-solid border-neon-400 rounded text-neon-500 hover:!bg-opacity-30 hover:bg-neon-200 hover:shadow-md hover:font-semibold transition-colors font-ubuntu py-3 px-4 text-xl"
      >
        Check out my résume 📜
      </a>

      <div
        className="hidden z-0 absolute top-16 right-96 -rotate-6 w-20 h-20 border border-solid border-neon-700 bg-neon-500 bg-opacity-10 rounded-lg hover:animate-pulse lg:flex lg:justify-center lg:items-center lg:p-2"
        title="React"
      >
        <img src="images/technologies/react.svg" alt="React" />
      </div>
      <div
        className="hidden z-0 lg:block absolute top-20 right-28 rotate-3 w-40 h-40 border border-solid border-neon-700 bg-neon-500 bg-opacity-10 rounded-lg hover:animate-pulse p-2"
        title="NgRx"
      >
        <img src="images/technologies/ngrx.svg" alt="NgRx" />
      </div>
      <div
        className="hidden z-0 lg:block absolute top-80 right-12 -rotate-12 w-60 h-60 border border-solid border-neon-700 border-opacity-60 bg-neon-500 bg-opacity-10 rounded-lg hover:animate-pulse"
        title="Angular"
      >
        <img src="images/technologies/angular.svg" alt="Angular" />
      </div>
      <div
        className="hidden z-0 lg:block absolute top-72 right-96 rotate-12 w-28 h-28 border border-solid border-neon-700 border-opacity-60 bg-neon-500 bg-opacity-10 rounded-lg overflow-hidden hover:animate-pulse p-3"
        title="TailwindCSS"
      >
        <img src="images/technologies/tailwind.svg" alt="TailwindCSS" />
      </div>
      <div className="hidden z-0 absolute top-96 right-80 rotate-12 w-80 h-80 border border-solid border-neon-700 bg-neon-500 bg-opacity-10 rounded-lg"></div>
      <BounceSeeMore isLeft={true} text="about me" targetId={SectionId.About} />
    </section>
  );
}
