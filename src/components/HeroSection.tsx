import { SectionId } from "../constants/data";
import BounceSeeMore from "./atoms/BounceSeeMore";

import Button from "./atoms/Button";

export default function HeroSection() {
  return (
    <section className="py-16 px-4 md:px-16 h-main relative">
      <p className="font-ubuntu text-sm md:text-lg text-neon-500 mb-0 md:mb-4">
        Hi, my name is
      </p>
      <h1 className="text-2xl md:text-6xl font-bold mb-4 leading-tight">
        <strong className="inline-block text-gray-100 mb-2">Hoà Nguyễn.</strong>
        <br />I build awesome things for the web.
      </h1>
      <p className="max-w-lg mb-12">
        I'm a software engineer specializing in building exceptional digital
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

      <Button size="lg">Check out my résume</Button>
      <div className="hidden md:block absolute top-20 right-96 -rotate-6 w-20 h-20 border border-solid border-neon-700 bg-neon-500 bg-opacity-10 rounded-lg hover:animate-bounce"></div>
      <div className="hidden md:block absolute top-20 right-28 rotate-45 w-40 h-40 border border-solid border-neon-700 bg-neon-500 bg-opacity-10 rounded-lg hover:animate-ping"></div>
      <div className="hidden md:block absolute top-80 right-24 -rotate-12 w-60 h-60 border border-solid border-neon-700 border-opacity-60 bg-neon-500 bg-opacity-10 rounded-lg hover:animate-pulse"></div>
      <div className="hidden absolute top-96 right-80 rotate-12 w-80 h-80 border border-solid border-neon-700 bg-neon-500 bg-opacity-10 rounded-lg"></div>
      <BounceSeeMore isLeft={true} text="about me" targetId={SectionId.About} />
    </section>
  );
}
