import {
  Company,
  Project,
} from '../types/entities';

export const companies: Company[] = [
  {
    id: 1,
    name: "PI.EXCHANGE",
    url: "http://pi.exchange",
    thumbnailUrl: "/images/companies/pi.webp",
    title: "Front-end Developer",
    from: "Sep 2021",
    to: "Present",
    responsibilities: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    ],
  },
  {
    id: 2,
    name: "NNG Company Ltd.",
    url: "http://nng.bz",
    thumbnailUrl: "/images/companies/nng.png",
    title: "Front-end Developer",
    from: "Mar 2020",
    to: "Sep 2021",
    responsibilities: [
      "lorem20z modern, performant, maintainable code for a lorem20z lorem20z",
      "Workadlklke sadplatforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
      "a with multi-disci1023kls k3jllsda, designers, producers, and clients on a daily basis",
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
