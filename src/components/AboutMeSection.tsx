import { SectionId } from "../constants/data";
import BounceSeeMore from "./atoms/BounceSeeMore";
import { motion } from "framer-motion";

export default function AboutMeSection() {
  return (
    <section
      id={SectionId.About}
      className="min-h-screen max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto flex flex-wrap md:flex-nowrap items-start relative py-24"
    >
      <article className="w-full text-justify">
        <motion.header
          initial={{ opacity: 0, y: -150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.45 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-10"
        >
          <a href={"#" + SectionId.About} className="animated-border-bottom">
            <strong className="font-ubuntu text-3xl text-neon-500 mr-2">
              01.
            </strong>
            <strong className="text-2xl md:text-4xl text-gray-100">
              About Me
            </strong>
          </a>
          <div className="flex-grow h-0.5 bg-gray-600"></div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.45 }}
          viewport={{ once: true }}
        >
          <p className="mb-4">
            My colleagues call me "Rin" - a tech savvy with a demonstrated
            history of working in the tech, pursuing Master of Data Science
            degree at{" "}
            <a
              href="https://swinburne.edu.au/"
              target="_blank"
              rel="noreferrer"
            >
              Swinburne University of Technology.
            </a>{" "}
            Love keeping my brain up to date with the latest technologies. My
            love quote is
          </p>
          <p className="block w-72 md:w-96 mx-auto mb-4 text-center">
            <q className="block text-gray-100 font-semibold">
              Coming together is a beginning, staying together is progress, and
              working together is success
            </q>
            <em>Henry Ford</em>
          </p>

          <section className="mb-4">
            Throughout my career, I have been fortunate to work in dynamic
            environments, including AI-based product companies and crypto firms.
            These start-ups, filled with exceptional colleagues, shared a common
            vision of breaking down barriers and making AI and revolutionary
            financial services accessible to all. Currently, my main focus
            revolves around developing user-friendly features, providing crypto
            financial services, offering valuable UI/UX feedback, and
            maintaining an extensive design system consisting of over 40
            widely-used components across various projects.
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="mt-8 flex flex-wrap text-left">
              <li className="w-1/2">NextJS</li>
              <li className="w-1/2">NestJS, Prisma</li>
              <li className="w-1/2">PostgreSQL, Supabase, Firebase</li>
              <li className="w-1/2">Angular (Signal, RxJS, RxState)</li>
              <li className="w-1/2">TailwindCSS</li>
              <li className="w-1/2">JavaScript (ES6+)</li>
            </ul>
          </section>
        </motion.div>
      </article>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.45 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
      >
        <figure className="w-full flex justify-center p-8 relative group">
          <img
            src="https://avatars.githubusercontent.com/u/32329202?v=4"
            alt="avatar"
            className="w-60 h-60 rounded z-10 transition-transform flex-shrink-0"
          />
        </figure>
      </motion.div>
      <div className="absolute top-44 -left-20 -z-10 -rotate-12 w-60 h-60 border border-solid border-neon-700 border-opacity-40 bg-neon-500 bg-opacity-10 rounded-lg"></div>
      <BounceSeeMore text="experience" targetId={SectionId.Experience} />
    </section>
  );
}
