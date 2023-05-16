import { AnimationOnScroll } from 'react-animation-on-scroll';

import { DELAY_BETWEEN } from '../constants/animation';
import { SectionId } from '../constants/data';
import BounceSeeMore from './atoms/BounceSeeMore';

export default function AboutMeSection() {
  return (
    <section
      id={SectionId.About}
      className="min-h-screen ml-auto flex flex-wrap md:flex-nowrap items-start relative max-w-5xl py-24"
    >
      <article>
        <AnimationOnScroll animateIn="animate__fadeInLeft" offset={100}>
          <header className="flex items-center gap-3 mb-10">
            <a href={"#" + SectionId.About} className="animated-border-bottom">
              <strong className="font-ubuntu text-3xl text-blue-600 dark:text-neon-500 mr-2">
                01.
              </strong>
              <strong className="text-4xl text-gray-900 dark:text-gray-100">
                About Me
              </strong>
            </a>
            <div className="flex-grow h-0.5 bg-gray-800 dark:bg-gray-600"></div>
          </header>
        </AnimationOnScroll>
        <p className="mb-4">
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            delay={DELAY_BETWEEN}
          >
            My name is Hoa Nguyen (Rin) - a problem solver with a demonstrated
            history of working in the information technology and services
            industry. Love keeping my brain up to date with the latest front-end
            technologies. My love quote
          </AnimationOnScroll>
        </p>
        <p className="block w-96 mx-auto mb-4 text-center">
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            delay={2 * DELAY_BETWEEN}
          >
            <q className="block text-gray-900 dark:text-gray-100 font-semibold">
              Coming together is a beginning, staying together is progress, and
              working together is success
            </q>
            <em>Henry Ford</em>
          </AnimationOnScroll>
        </p>

        <section className="mb-4">
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            delay={3 * DELAY_BETWEEN}
          >
            Fast-forward to today, and I've had the privilege of working at an
            AI-based product company, a start-up with brilliant colleagues, with
            vision reducing the barriers and bringing AI accessible for
            everyone. My main focus these days is building accessible features,
            contributed UI/UX feedbacks and improving our most-proud AI&amp;A
            engine.
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="mt-8 flex flex-wrap">
              <li className="w-1/2">Angular (RxJS, NGXS, RxState)</li>
              <li className="w-1/2">Angular Material, ng-zorro-antd</li>
              <li className="w-1/2">Bootstrap, TailwindCSS</li>
              <li className="w-1/2">JavaScript (ES6+)</li>
            </ul>
          </AnimationOnScroll>
        </section>
      </article>
      <AnimationOnScroll
        animateIn="animate__fadeInRight"
        delay={DELAY_BETWEEN}
        className="w-full md:w-1/3 flex-shrink-0"
      >
        <figure className="w-full flex justify-center p-8 relative group">
          <img
            src="https://avatars.githubusercontent.com/u/32329202?v=4"
            alt=""
            className="w-60 h-60 rounded z-10 transition-transform"
          />
        </figure>
      </AnimationOnScroll>
      <div className="absolute top-44 -left-20 -z-10 -rotate-12 w-60 h-60 border border-solid border-neon-700 border-opacity-40 bg-neon-500 bg-opacity-10 rounded-lg"></div>
      <BounceSeeMore text="experience" targetId={SectionId.Experience} />
    </section>
  );
}
