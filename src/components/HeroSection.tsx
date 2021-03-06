import { SectionId } from '../constants/data';
import BounceSeeMore from './atoms/BounceSeeMore';

export default function HeroSection() {
  return (
    <section className="py-16 px-4 md:px-16 h-main relative">
      <p className="font-ubuntu text-sm md:text-xl text-neon-500">
        👋 I'm a Front-end Developer
      </p>
      <div className="border-b border-neon-500 border-solid w-24 mb-6"></div>
      <h1 className="text-2xl md:text-6xl font-bold mb-6 leading-tight">
        <strong className="inline-block text-gray-100 relative font-extrabold">
          Hoà Nguyễn (Rin)
        </strong>

        <p className="mb-0 md:text-5xl">I build awesome things for the web.</p>
      </h1>
      <p className="max-w-lg mb-12">
        I'm a front-end guy specializing in building exceptional digital
        experiences. Currently, I'm focused on building{" "}
        <a
          href="https://www.pi.exchange/the-ai-and-analytics-engine"
          target="_blank"
          rel="noreferrer"
          className="inline-block animated-border-bottom"
        >
          The AI & Analytics Engine
        </a>{" "}
        - an accessible AI product at{" "}
        <a
          href="https://pi.exchange"
          target="_blank"
          rel="noreferrer"
          className="inline-block animated-border-bottom"
        >
          pi.exchange
        </a>
        .
      </p>

      <a
        href="/Hoa-Nguyen-resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="border border-solid border-neon-400 rounded text-neon-500 hover:bg-opacity-30 hover:bg-neon-200 hover:shadow-md hover:font-semibold transition-colors font-ubuntu py-3 px-4 text-xl"
      >
        Check out my résume
      </a>
      <div
        className="hidden z-0 absolute top-16 right-96 -rotate-6 w-20 h-20 border border-solid border-neon-700 bg-neon-500 bg-opacity-10 rounded-lg hover:animate-pulse  md:flex md:justify-center md:items-center md:p-2"
        title="React"
      >
        <img src="images/technologies/react.svg" alt="React" />
      </div>
      <div
        className="hidden z-0 md:block absolute top-20 right-28 rotate-3 w-40 h-40 border border-solid border-neon-700 bg-neon-500 bg-opacity-10 rounded-lg hover:animate-pulse p-2"
        title="NgRx"
      >
        <img src="images/technologies/ngrx.svg" alt="NgRx" />
      </div>
      <div
        className="hidden z-0 md:block absolute top-80 right-12 -rotate-12 w-60 h-60 border border-solid border-neon-700 border-opacity-60 bg-neon-500 bg-opacity-10 rounded-lg hover:animate-pulse"
        title="Angular"
      >
        <img src="images/technologies/angular.svg" alt="Angular" />
      </div>
      <div
        className="hidden z-0 md:block absolute top-64 right-96 rotate-12 w-28 h-28 border border-solid border-neon-700 border-opacity-60 bg-neon-500 bg-opacity-10 rounded-lg overflow-hidden hover:animate-pulse p-3"
        title="TailwindCSS"
      >
        <img src="images/technologies/tailwind.svg" alt="TailwindCSS" />
      </div>
      <div className="hidden z-0 absolute top-96 right-80 rotate-12 w-80 h-80 border border-solid border-neon-700 bg-neon-500 bg-opacity-10 rounded-lg"></div>
      <BounceSeeMore isLeft={true} text="about me" targetId={SectionId.About} />
    </section>
  );
}
