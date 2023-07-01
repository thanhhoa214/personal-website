import { AnimationOnScroll } from "react-animation-on-scroll";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import ReactTooltip from "react-tooltip";

import { projects, SectionId } from "../constants/data";
import { Project } from "../types/entities";

export default function ProjectSection() {
  return (
    <section id={SectionId.Projects} className="mx-auto max-w-5xl">
      <AnimationOnScroll animateIn="animate__fadeInLeft" offset={100}>
        <header className="flex items-center gap-3 mb-20 max-w-2xl">
          <div className="w-20 h-0.5 bg-gray-600"></div>
          <a href={"#" + SectionId.Projects} className="animated-border-bottom">
            <strong className="font-ubuntu text-3xl text-neon-500 mr-2">
              03.
            </strong>
            <strong className="text-4xl text-gray-100">
              Things I've Built
            </strong>
          </a>
          <div className="flex-grow h-0.5 bg-gray-600"></div>
        </header>
      </AnimationOnScroll>

      <main>
        <ol>
          {projects.map((project, index) => (
            <ProjectItem
              project={project}
              isLeft={index % 2 === 1}
              key={project.name}
            ></ProjectItem>
          ))}
        </ol>
      </main>
      <p className="text-center">
        <strong className="text-gray-300">
          It's not all. The website is in progress...
        </strong>
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
          <p className="text-sm leading-4 mt-3 w-72">{item.originalAlt}</p>
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
      <AnimationOnScroll
        animateIn={isLeft ? "animate__fadeInRight" : "animate__fadeInLeft"}
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
        ></ImageGallery>
      </AnimationOnScroll>

      <section
        className={`w-full md:absolute md:top-0 mt-8 md:w-2/5 md:py-4 md:-ml-56 ${
          isLeft ? "md:right-[60%]" : "md:right-0 md:text-right"
        }`}
      >
        <AnimationOnScroll
          animateIn={isLeft ? "animate__fadeInLeft" : "animate__fadeInRight"}
        >
          <p className="font-ubuntu text-gray-500">{project.type}</p>
          <h3 className="text-2xl text-neon-600 font-bold mb-6">
            {project.name}
          </h3>
          <p
            className="p-4 rounded-md bg-navy-800 bg-opacity-70 shadow-xl mb-6 text-justify "
            dangerouslySetInnerHTML={{ __html: project.description }}
          ></p>
          <ol
            className={`flex flex-wrap w-5/6 gap-4 text-white ${
              isLeft ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0 justify-end"
            }`}
          >
            <ReactTooltip place="top" type="light" effect="float" />
            {project.technologies.map((tech) => (
              <li className="inline-block" key={tech.url}>
                <a
                  href={tech.url}
                  target="_blank"
                  data-tip={tech.description}
                  rel="noreferrer"
                  className="rounded py-1 px-2 link"
                >
                  {tech.title}
                </a>
              </li>
            ))}
          </ol>
        </AnimationOnScroll>
      </section>
    </li>
  );
}
