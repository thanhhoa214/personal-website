import {
  Company,
  Project,
} from '../types/entities';

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
    teamThumbnailUrl: "/images/companies/nng-team.jpg",
    title: "Front-end Developer",
    from: "Mar 2020",
    to: "Sep 2021",
    responsibilities: [
      "Built and deployed 4+ projects by using Angular and Ionic",
      "Built mobile CI/CD system by utilizing GitlabCI, GitlabRunner, Fastlane",
      "Host 4+ internal technical seminars (NGXS (2), RxJS, GraphQLCodegen)",
      "Composed Front-end Coding Guidelines for entire company use",
      "Led team with 3 members when working part-time",
    ],
  },
];
export const projects: Project[] = [
  {
    company: companies[1],
    type: "Featured Project",
    name: "Hybrid Interior Design App",
    description: `Interior Design Project for both Vietnam and Korean
    marketplaces provides the ability to register for design and
    construction services, creating their services with chatting and
    purchasing, combines of small CRM and CMS.`,
    thumbnails: [
      {
        title: "User Flows",
        url: "/images/projects/lifeon/record.mp4",
        description: "Simple login with Zalo flow",
      },
      {
        title: "Login Screen",
        url: "/images/projects/lifeon/login.png",
        description:
          "JWT for authentication. Supported logging in with Facebook and Zalo natively in both Android and iOS devices",
      },
      {
        title: "Home Screen (1)",
        url: "/images/projects/lifeon/home-1.png",
        description:
          "Kick-off your dream house with simple steps. Pick a dream house design, contact your potential constructors directly and let's us take care the rest",
      },
      {
        title: "Home Screen (2)",
        url: "/images/projects/lifeon/home-2.png",
        description:
          "A marketplace application with multiple languages, multiple roles and numbers of awesome features to explore...",
      },
      {
        title: "Design Detail Screen (1)",
        url: "/images/projects/lifeon/design-detail-1.png",
        description:
          "Like, bookmark, discuss with like-minded finders, put a review or share the design on various social channels",
      },
      {
        title: "Design Detail Screen (2)",
        url: "/images/projects/lifeon/design-detail-2.png",
        description:
          "Connect with potential constructors to actualize your design right after 1 touch",
      },
      {
        title: "Cart Screen",
        url: "/images/projects/lifeon/cart.png",
        description:
          "Put whatever you love into the cart, checkout mindlessly with only selected like Shopee",
      },
      {
        title: "Payment Screen",
        url: "/images/projects/lifeon/payment.png",
        description:
          "Quickly checkout through VNPay online payment and get your design right the time",
      },
      {
        title: "Posts Surfing Screen",
        url: "/images/projects/lifeon/post-list.png",
        description:
          "Check reviews and shares from design finders, get more insights before sign in the contract",
      },
      {
        title: "Post Detail Screen",
        url: "/images/projects/lifeon/post-detail.png",
        description:
          "Mimic the Facebook comment mechanism, reply nested reply, collapsible, real-time and handy",
      },
      {
        title: "Settings Screen",
        url: "/images/projects/lifeon/setting.png",
        description:
          "Integrated settings includes language, password, saved design, and so on",
      },
    ],
    technologies: [
      {
        title: "Angular 10",
        url: "http://angular.io/",
        description: "High-scalable javascript framework",
      },
      {
        title: "Ionic 4",
        url: "http://ionic.io/",
        description: "Hybrid mobile framework",
      },
      {
        title: "Apollo GraphQL",
        url: "https://apollo-angular.com/docs/",
        description: "Ultra-flexible GraphQL client for Angular",
      },
      {
        title: "Fastlane",
        url: "https://fastlane.tools/",
        description: "Simplifying Android and iOS deployment",
      },
      {
        title: "Gitlab CI/CD",
        url: "https://docs.gitlab.com/ee/ci/",
        description: "Build local mobile CI/CD by hand-shaking with Fastlane",
      },
    ],
  },
  // {
  //   company: companies[1],
  //   type: "Featured Project",
  //   name: "All-in-one Online Library Platform",
  //   description: `Online library platform helps students, librarians, and publishers can reach each other easier, synchronously either online, offline or multiple devices. Fully responsive from the smallest phone, tablet to the latest high-resolution like Mac.`,
  //   thumbnails: [],
  //   technologies: [
  //     {
  //       title: "Angular 10",
  //       url: "http://angular.io/",
  //       description: "High-scalable javascript framework",
  //     },
  //     {
  //       title: "Ionic 4",
  //       url: "http://ionic.io/",
  //       description: "Hybrid mobile framework",
  //     },
  //     {
  //       title: "Electron",
  //       url: "https://www.electronjs.org/",
  //       description:
  //         "Build cross-platform desktop apps with JavaScript, HTML, and CSS",
  //     },
  //   ],
  // },
  {
    type: "IoT Project",
    name: "Self-driving Car Solution",
    description: `Autonomous Self-driving Car was a constraint to implement a car model with the ability to detect lanes,
    traffic signs, and traffic lights for research purposes. Using Angular for both Web and Mobile Apps on Nx workspace for maximize the reusability.`,
    thumbnails: [
      {
        title: "Mobile - Login Screen",
        url: "/images/projects/avc/login.png",
      },
      {
        title: "Mobile - Car List Screen",
        url: "/images/projects/avc/car-list.png",
        description: "WebSocket integrated",
      },
      {
        title: "Mobile - Car Detail Screen",
        url: "/images/projects/avc/car-detail.png",
      },
      {
        title: "Mobile - Issue Detail Screen",
        url: "/images/projects/avc/issue-detail.png",
      },
      {
        title: "Mobile - Notification Screen",
        url: "/images/projects/avc/notification-list.png",
      },
      {
        title: "Mobile - Profile Screen",
        url: "/images/projects/avc/profile.png",
      },
      {
        title: "Mobile - Forgot Password Screen",
        url: "/images/projects/avc/forgot-password.png",
      },
    ],
    technologies: [
      {
        title: "Angular 10",
        url: "http://angular.io/",
        description: "High-scalable javascript framework",
      },
      {
        title: "Ionic 4",
        url: "http://ionic.io/",
        description: "Hybrid mobile framework",
      },
      {
        title: "TailwindCSS",
        url: "https://tailwindcss.com/",
        description: "A utility-first CSS framework",
      },
      {
        title: "PWA",
        url: "https://web.dev/progressive-web-apps/",
        description:
          "Web apps that have been designed to more capable, reliable, and installable",
      },
      {
        title: "Taiga UI",
        url: "https://taiga-ui.dev/",
        description: "UI library for Angular components",
      },
    ],
  },
];
