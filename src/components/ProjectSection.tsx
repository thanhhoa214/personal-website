import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

import {
  projects,
  SectionId,
} from '../constants/data';
import { Project } from '../types/entities';

export default function ProjectSection() {
  return (
    <section id={SectionId.Projects} className="mx-auto max-w-5xl">
      <header className="flex items-center gap-3 mb-20 max-w-2xl">
        <div className="w-20 h-0.5 bg-gray-600"></div>
        <a href={"#" + SectionId.Projects} className="animated-border-bottom">
          <strong className="font-ubuntu text-3xl text-neon-500 mr-2">
            03.
          </strong>
          <strong className="text-4xl text-gray-100">Things I've Built</strong>
        </a>
        <div className="flex-grow h-0.5 bg-gray-600"></div>
      </header>
      <main>
        <ol>
          {projects.map((project, index) => (
            <ProjectItem
              project={project}
              isLeft={index % 2 === 1}
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
  const renderImage = (item: ReactImageGalleryItem) => (
    <>
      <section className="absolute left-6 top-14 text-left whitespace-normal">
        <strong className="text-gray-300">{item.originalTitle}</strong>
        <p className="text-sm leading-4 mt-3 w-72">{item.originalAlt}</p>
      </section>
      {item.original.endsWith("mp4") ? (
        <video controls className="h-full object-contain ml-auto mr-36">
          <source src={item.original} type="video/mp4" />
        </video>
      ) : (
        <img
          src={item.original}
          alt={item.originalAlt}
          title={item.originalTitle}
          className="h-full object-contain ml-auto mr-36"
        />
      )}
    </>
  );

  return (
    <li className={`relative mb-20 ${isLeft ? "flex flex-row-reverse" : ""}`}>
      <figure className="inline-block w-2/3 h-96 bg-navy-900">
        <ImageGallery
          items={project.thumbnails.map((t) => ({
            originalTitle: t.title,
            original: t.url,
            originalAlt: t.description,
            bulletClass: "top-0",
            renderItem: renderImage,
          }))}
          showBullets={true}
        ></ImageGallery>
      </figure>
      <section
        className={`absolute top-0 t-8 w-2/5 py-4 -ml-56 ${
          isLeft ? "right-[60%]" : "right-0 text-right"
        }`}
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
            isLeft ? "ml-0 mr-auto" : "ml-auto mr-0 justify-end"
          }`}
        >
          {project.technologies.map((tech) => (
            <li className="inline-block">
              <a
                href={tech.url}
                target="_blank"
                title={tech.description}
                rel="noreferrer"
                className="rounded py-1 px-2 link"
              >
                {tech.title}
              </a>
            </li>
          ))}
        </ol>
      </section>
    </li>
  );
}
