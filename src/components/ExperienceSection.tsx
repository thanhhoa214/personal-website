import { useState } from 'react';

import { AnimationOnScroll } from 'react-animation-on-scroll';

import { DELAY_BETWEEN } from '../constants/animation';
import {
  companies,
  SectionId,
} from '../constants/data';
import BounceSeeMore from './atoms/BounceSeeMore';

export default function ExperienceSection() {
  const [company, setCompany] = useState(companies[0]);

  return (
    <section
      id={SectionId.Experience}
      className="min-h-screen relative max-w-5xl py-10"
    >
      <AnimationOnScroll animateIn="animate__fadeInLeft" offset={100}>
        <header className="flex items-center gap-3 mb-10 max-w-2xl">
          <div className="w-20 h-0.5 bg-gray-600"></div>
          <a
            href={"#" + SectionId.Experience}
            className="animated-border-bottom"
          >
            <strong className="font-ubuntu text-3xl text-blue-600 dark:text-neon-500 mr-2">
              02.
            </strong>
            <strong className="text-4xl text-gray-900 dark:text-gray-100">
              Where I've Worked
            </strong>
          </a>
          <div className="flex-grow h-0.5 bg-gray-800 dark:bg-gray-600"></div>
        </header>
      </AnimationOnScroll>

      <main>
        <ol className="inline-block relative align-top font-ubuntu">
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            delay={DELAY_BETWEEN}
          >
            <div
              className="h-16 w-1 bg-neon-600 rounded-full absolute transition-transform"
              style={{
                transform: `translateY(${(company.id - 1) * 4}rem)`,
              }}
            ></div>
            {companies.map((c) => (
              <li
                key={c.name}
                className={c.id === company.id ? "active" : ""}
                onClick={() => setCompany(c)}
              >
                <span className="inline-block h-10 w-10 p-1 -mt-0.5 rounded-md bg-white mr-2">
                  <img
                    src={c.thumbnailUrl}
                    alt={`${c.name} logo`}
                    className="h-8 max-w-full object-contain"
                  />
                </span>
                <span className="inline-block align-top text-xl pt-0.5 pl-1">
                  {c.name}
                </span>
              </li>
            ))}
          </AnimationOnScroll>
        </ol>

        <section className="inline-block py-2 px-4 ml-6">
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            delay={DELAY_BETWEEN}
          >
            <h3 className="space-x-2">
              <span className="text-gray-200">{company.title}</span>
              <span>|</span>
              <a
                href={company.url}
                target="_blank"
                rel="noreferrer"
                className="inline-block animated-border-bottom"
              >
                {company.name}
              </a>
            </h3>
            <p className="font-ubuntu text-gray-500 text-sm space-x-1 mb-4">
              <time dateTime={company.from}>{company.from}</time>
              <span>—</span>
              <time dateTime={company.to}>{company.to}</time>
            </p>
            <ul>
              {company.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>

            <figure className="mt-12 text-gray-50">
              <img
                src={company.teamThumbnailUrl}
                alt=""
                className="h-80 w-auto rounded-lg"
              />
            </figure>
          </AnimationOnScroll>
        </section>
      </main>

      <div className="absolute top-44 -right-32 -z-10 -rotate-12 w-60 h-60 border border-solid border-neon-700 border-opacity-40 bg-neon-500 bg-opacity-10 rounded-lg"></div>
      <div className="absolute top-96 left-16 -z-10 -rotate-12 w-20 h-20 border border-solid border-neon-700 border-opacity-40 bg-neon-500 bg-opacity-10 rounded-lg"></div>

      <BounceSeeMore
        text="projects"
        isLeft={true}
        targetId={SectionId.Projects}
        marginLeft={-23}
      />
    </section>
  );
}
