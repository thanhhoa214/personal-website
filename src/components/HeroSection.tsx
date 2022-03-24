import { FiChevronsDown } from 'react-icons/fi';

import Button from './Button';

export default function HeroSection() {
  return (
    <section className="p-16 h-screen relative">
      <p className="font-ubuntu text-lg text-neon-500 mb-4">Hi, my name is</p>
      <h1 className="text-6xl font-bold mb-4 leading-tight">
        <strong className="text-gray-100">Hoà Nguyễn.</strong>
        <br />I build awesome things for the web.
      </h1>
      <p className="max-w-lg mb-12">
        I'm a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I'm focused on
        building accessible, human-centered products at Upstatement.
      </p>

      <Button size="lg">Check out my résume</Button>
      <div className="absolute top-20 right-96 -rotate-6 w-20 h-20 border border-solid border-neon-700 bg-neon-500 bg-opacity-10 rounded-lg hover:animate-bounce"></div>
      <div className="absolute top-20 right-28 rotate-45 w-40 h-40 border border-solid border-neon-700 bg-neon-500 bg-opacity-10 rounded-lg hover:animate-ping"></div>
      <div className="absolute top-80 right-24 -rotate-12 w-60 h-60 border border-solid border-neon-700 border-opacity-60 bg-neon-500 bg-opacity-10 rounded-lg hover:animate-pulse"></div>
      <div className="absolute top-96 right-80 rotate-12 w-80 h-80 border border-solid border-neon-700 bg-neon-500 bg-opacity-10 rounded-lg"></div>
      <a
        href="#about"
        className="absolute bottom-20 left-20 animate-bounce hover:text-neon-600 cursor-pointer"
      >
        <span className="inline-block -rotate-90 mb-3 -ml-1.5 font-bold pointer-events-none">
          explore
        </span>
        <FiChevronsDown size={50}></FiChevronsDown>
      </a>
    </section>
  );
}
