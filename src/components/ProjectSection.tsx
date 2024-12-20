import { motion } from "framer-motion";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import { projects, SectionId } from "../constants/data";
import { Project } from "../types/entities";
import Button from "./atoms/Button";

export default function ProjectSection() {
  return (
    <section
      id={SectionId.Projects}
      className="max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto"
    >
      <motion.header
        initial={{ opacity: 0, y: -150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.45 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-20 max-w-2xl"
      >
        <div className="w-6 md:w-20 h-0.5 bg-gray-600"></div>
        <a href={"#" + SectionId.Projects} className="animated-border-bottom">
          <strong className="font-ubuntu text-3xl text-neon-500 mr-2">
            03.
          </strong>
          <strong className="text-2xl md:text-4xl text-gray-100">
            Things I've Built
          </strong>
        </a>
        <div className="flex-grow h-0.5 bg-gray-600"></div>
      </motion.header>

      <main>
        <ol>
          {projects.map((project, index) => (
            <ProjectItem
              project={project}
              isLeft={index % 2 === 1}
              key={project.name}
            />
          ))}
        </ol>
      </main>
      <p className="text-center">
        <Button>Show me more... </Button>
      </p>
    </section>
  );
}

interface ProjectItemProps {
  project: Project;
  isLeft: boolean;
}
function ProjectItem({ project, isLeft }: ProjectItemProps) {
  const renderImage = (item: ReactImageGalleryItem) => {
    const mediaClass = isLeft ? "ml-0 mr-auto" : "ml-auto mr-0";
    return (
      <>
        <section
          className={`absolute top-12 whitespace-normal text-gray-300 bg-gray-900 bg-opacity-80 px-4 py-6 rounded-md ${
            isLeft ? "right-4 text-right" : "left-4 text-left"
          }`}
        >
          <strong>{item.originalTitle}</strong>
          <p
            className="text-sm leading-4 mt-3 w-72"
            dangerouslySetInnerHTML={{ __html: item.originalAlt || "" }}
          ></p>
        </section>
        {item.original.endsWith("mp4") ? (
          <video controls className={`h-full object-contain ${mediaClass}`}>
            <source src={item.original} type="video/mp4" />
          </video>
        ) : (
          <img
            src={item.original}
            alt={item.originalAlt}
            title={item.originalTitle}
            className={`h-full object-contain ${mediaClass}`}
          />
        )}
      </>
    );
  };

  return (
    <li
      className={`relative mb-20 ${
        isLeft ? "flex flex-col md:flex-row-reverse left" : "right"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 150 : -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25, duration: 0.45 }}
        viewport={{ once: true }}
        className="inline-block w-full md:w-2/3 h-96 bg-navy-900"
      >
        <ImageGallery
          items={project.thumbnails.map((t) => ({
            originalTitle: t.title,
            original: t.url,
            originalAlt: t.description,
            bulletClass: `top-0 ${isLeft ? "right-0" : "left-0"}`,
            renderItem: renderImage,
          }))}
          showBullets={true}
        />
      </motion.div>

      <section
        className={`w-full md:absolute md:top-0 mt-8 md:w-2/5 md:py-4 md:-ml-56 ${
          isLeft ? "md:right-[60%]" : "md:right-0 md:text-right"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -150 : 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.45 }}
          viewport={{ once: true }}
        >
          <p className="font-ubuntu text-gray-500">{project.type}</p>
          <h3 className="text-2xl text-neon-600 font-bold mb-6">
            {project.name}
          </h3>
          <p className="p-4 rounded-md bg-navy-800 bg-opacity-70 shadow-xl mb-6 text-justify">
            {project.description}
          </p>
          <ol
            className={`flex flex-wrap md:w-5/6 gap-4 text-white ${
              isLeft ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0 justify-end"
            }`}
          >
            {project.technologies.map((tech) => (
              <li className="inline-block" key={tech.url}>
                <a
                  href={tech.url}
                  target="_blank"
                  rel="noreferrer"
                  title={tech.description + ""}
                  className="rounded py-1 px-1 link pointer-events-auto"
                >
                  {tech.title}
                </a>
              </li>
            ))}
          </ol>
        </motion.div>
      </section>
    </li>
  );
}
