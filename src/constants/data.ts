import { Company, Project } from "../types/entities";

export const enum SectionId {
  About = "about",
  Experience = "experience",
  Projects = "projects",
  Contact = "contact",
}

export const companies: Company[] = [
  {
    id: 1,
    name: "PI.EXCHANGE",
    url: "http://pi.exchange",
    thumbnailUrl: "/images/companies/pi.webp",
    teamThumbnailUrl: "/images/companies/pi-team.jpeg",
    title: "Front-end Developer",
    from: "Sep 2021",
    to: "Present",
    responsibilities: [
      "Implemented UI for Batch Prediction and What-If Prediction features",
      "Maintained and refactored codebase by discussing and pushing proposals",
      "Worked with international colleagues used English as a primary language",
      "Reached ML basic knowledge by understanding ML problems, business use-cases, and underground ML process",
      "Writing UT and document for my implemented features and proposals",
    ],
  },
  {
    id: 2,
    name: "NNG Company Ltd.",
    url: "http://nng.bz",
    thumbnailUrl: "/images/companies/nng.png",
    teamThumbnailUrl: "/images/companies/nng-team.png",
    title: "Front-end Developer",
    from: "Mar 2020",
    to: "Sep 2021",
    responsibilities: [
      "Led team with 3 members when working part-time",
      "Built and deployed 4+ projects by using Angular and Ionic",
      "Built mobile CI/CD system by utilizing GitlabCI, GitlabRunner, Fastlane",
      "Speaker in 4 technical seminars (NGXS (2), RxJS, GraphQLCodegen)",
      "Composed Front-end Coding Guidelines for entire company use",
    ],
  },
];
export const projects: Project[] = [
  {
    company: companies[1],
    type: "Featured Project",
    name: "Hybrid Interior Design App",
    description: `Interior Design Project Interior Design for Vietnam and Korean
    marketplaces provides the ability to register for design and
    construction services, creating their services with chatting and
    purchasing, combines of small CRM and CMS.
    <br /> Developed a hybrid mobile application using <a
    href="https://ionic.io/"
    target="_blank"
    rel="noreferrer"
    className="inline-block ml-1 text-gray-200 font-semibold animated-border-bottom"
  >
    Ionic 5
  </a>
  <span className="mx-1">with</span>
  <a
    href="https://angular.io/"
    target="_blank"
    rel="noreferrer"
    className="inline-block text-gray-200 font-semibold animated-border-bottom"
  >
    Angular 11
  </a>`,
    technologies: [
      {
        name: "Angular 10",
        url: "http://angular.io/",
        description: "High-scalable javascript framework",
      },
      {
        name: "Ionic 4",
        url: "http://ionic.io/",
        description: "Hybrid mobile framework",
      },
    ],
  },
  {
    company: companies[1],
    type: "Featured Project",
    name: "Hybrid Interior Design App",
    description: `Interior Design Project Interior Design for Vietnam and Korean
    marketplaces provides the ability to register for design and
    construction services, creating their services with chatting and
    purchasing, combines of small CRM and CMS.
    <br /> Developed a hybrid mobile application using <a
    href="https://ionic.io/"
    target="_blank"
    rel="noreferrer"
    className="inline-block ml-1 text-gray-200 font-semibold animated-border-bottom"
  >
    Ionic 5
  </a>
  <span className="mx-1">with</span>
  <a
    href="https://angular.io/"
    target="_blank"
    rel="noreferrer"
    className="inline-block text-gray-200 font-semibold animated-border-bottom"
  >
    Angular 11
  </a>`,
    technologies: [
      {
        name: "Angular 10",
        url: "http://angular.io/",
        description: "High-scalable javascript framework",
      },
      {
        name: "Ionic 4",
        url: "http://ionic.io/",
        description: "Hybrid mobile framework",
      },
    ],
  },
];
