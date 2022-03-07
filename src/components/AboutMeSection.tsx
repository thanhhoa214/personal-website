import React from 'react';

export default function AboutMeSection() {
  return (
    <section id="about" className="ml-auto flex relative">
      <article>
        <header className="flex items-center gap-3 mb-10">
          <h2>
            <strong className="font-ubuntu text-3xl text-neon-500 mr-2">
              01.
            </strong>
            <strong className="text-4xl text-gray-100">About Me</strong>
          </h2>
          <div className="flex-grow h-0.5 bg-gray-600"></div>
        </header>
        <p className="mb-4">
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML/CSS!
        </p>
        <p className="mb-4">
          Fast-forward to today, and I've had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a
          variety of clients.
          <p>
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node/React.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="mt-8 flex flex-wrap">
            <li className="w-1/2">JavaScript (ES6+)</li>
            <li className="w-1/2">TypeScript</li>
            <li className="w-1/2">React</li>
            <li className="w-1/2">Node.js</li>
            <li className="w-1/2">WordPress</li>
          </ul>
        </p>
      </article>
      <figure className="w-1/3 flex-shrink-0 flex justify-center p-8 relative group">
        <img
          src="https://avatars.githubusercontent.com/u/32329202?v=4"
          alt=""
          className="w-60 h-60 rounded z-10 transition-transform"
        />
      </figure>
      <div className="absolute top-28 -left-20 -z-10 -rotate-12 w-60 h-60 border border-solid border-neon-700 border-opacity-40 bg-neon-500 bg-opacity-10 rounded-lg"></div>
    </section>
  );
}
