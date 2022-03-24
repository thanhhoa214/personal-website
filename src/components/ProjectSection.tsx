import { projects } from '../constants/data';
import { Project } from '../types/entities';

export default function ProjectSection() {
  return (
    <section id="projects" className="mx-auto max-w-5xl">
      <header className="flex items-center gap-3 mb-10 max-w-2xl">
        <div className="w-20 h-0.5 bg-gray-600"></div>
        <h2>
          <strong className="font-ubuntu text-3xl text-neon-500 mr-2">
            02.
          </strong>
          <strong className="text-4xl text-gray-100">Things I've Built</strong>
        </h2>
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
    </section>
  );
}

interface ProjectItemProps {
  project: Project;
  isLeft: boolean;
}
function ProjectItem({ project, isLeft }: ProjectItemProps) {
  return (
    <li className={`relative mb-12 ${isLeft ? "flex flex-row-reverse" : ""}`}>
      <figure className="inline-block w-2/3 h-96 bg-navy-900">
        <img
          src="/images/projects/lifeon/post-detail.png"
          alt="Life On - Post Detail Screen"
          className="h-full object-contain mx-auto"
        />
      </figure>
      <section
        className={`absolute top-0 t-8 w-2/5 py-4 -ml-56 ${
          isLeft ? "right-1/2" : "right-0 text-right"
        }`}
      >
        <p className="font-ubuntu text-gray-500">{project.type}</p>
        <h3 className="text-2xl text-neon-600 font-bold mb-6">
          {project.name}
        </h3>
        <p
          className="p-4 rounded-md bg-navy-800 bg-opacity-70 shadow-xl mb-6"
          dangerouslySetInnerHTML={{ __html: project.description }}
        ></p>
        <ol className="space-x-6 text-white">
          {project.technologies.map((tech) => (
            <li className="inline-block">
              <a
                href={tech.url}
                target="_blank"
                title={tech.description}
                rel="noreferrer"
                className="rounded py-1 px-2 link"
              >
                {tech.name}
              </a>
            </li>
          ))}
        </ol>
      </section>
    </li>
  );
}
