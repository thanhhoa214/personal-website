import { Company, Project } from "../types/entities";

export const enum SectionId {
  About = "about",
  Experience = "experience",
  Projects = "projects",
  Contact = "contact",
  Artwork = "artwork",
}

export const companies: Company[] = [
  {
    id: 1,
    name: "DWF Labs",
    url: "https://www.dwf-labs.com/",
    thumbnailUrl: "./images/companies/dwf-labs.png",
    teamThumbnailUrl: "./images/companies/dwf-labs-team.jpg",
    title: "Web3 Front-end Engineer",
    from: "Oct 2024",
    to: "Present",
    responsibilities: [
      "Migrated a million-users perpeptual DEX exchange supports 4 networks from ethers.js/web3modal to Rainbowkit/wagmi/viem in 2 weeks",
      "Implemented & documented Perpeptual DEX claim and withdraw via Stargate SDK",
      "Created & maintained `ngx-wagmi` to interact with Wagmi SDK, `ngx-seedkit` to quickly adopt connect-wallet to Angular 18+",
    ],
  },
  {
    id: 2,
    name: "EATLAB",
    url: "https://eatlab.ai/",
    thumbnailUrl: "./images/companies/eatlab.ico",
    teamThumbnailUrl: "./images/companies/eatlab-team.jpeg",
    title: "Full-stack Software Engineer",
    from: "Jul 2023",
    to: "Dec 2023",
    responsibilities: [
      "Led 2 members team on NestJS, Prisma, and NextJS with full-typed support from FE to BE via OpenAPI standards",
      "Implemented an AI-integrated marketing product with Flutter and GetX",
    ],
  },
  {
    id: 3,
    name: "Coinhako",
    url: "https://www.coinhako.com/",
    thumbnailUrl: "./images/companies/coinhako.ico",
    teamThumbnailUrl: "./images/companies/coinhako-team.jpg",
    title: "Senior Front-end Engineer",
    from: "Sep 2021",
    to: "Jul 2023",
    responsibilities: [
      "Built and maintained a Design System with 38+ components with variants by Storybook and Angular library",
      `Built open-sourced strict-typed JSON API Spec library by TypeScript advanced features (${getATag(
        "Github",
        "https://github.com/thanhhoa214/jsonapi-typescript"
      )})`,
      "Boosted 30% performance by OnPush CD and reduced initial bundled size",
      "Migrated million-users app from SSR to SSG, from Angular 12 to 16 seamlessly",
      `Hosted 1 internal seminar about Angular Architecture (${getATag(
        "slide",
        "https://www.slideshare.net/HaNguyn98/leverage-nx-library-thesis-in-angular-architecture"
      )})`,
      "Accelerated workflows to reduce 80% running time by caching building steps and E2E setup",
      "Developed & contributed to the feature discussion for UI/UX in all developer-user-trader views      ",
    ],
  },
  {
    id: 4,
    name: "PI.EXCHANGE",
    url: "http://pi.exchange",
    thumbnailUrl: "./images/companies/pi.webp",
    teamThumbnailUrl: "./images/companies/pi-team.jpeg",
    title: "Front-end Engineer",
    from: "Sep 2021",
    to: "May 2022",
    responsibilities: [
      "Implemented UI for Batch Prediction and What-If Prediction features",
      "Maintained and refactored codebase by discussing and pushing proposals",
      "Worked with international colleagues used English as a primary language",
      "Reached ML basic knowledge by understanding ML problems, business use-cases, and underground ML process",
      "Writing UT and document for my implemented features and proposals",
    ],
  },
  {
    id: 5,
    name: "NNG Ltd.",
    url: "http://nng.bz",
    thumbnailUrl: "./images/companies/nng.png",
    teamThumbnailUrl: "./images/companies/nng-team.jpg",
    title: "Software Engineer",
    from: "Mar 2020",
    to: "Sep 2021",
    responsibilities: [
      "Built and deployed 4+ projects by using Angular, Ionic with RestfulAPI, GraphQL",
      "Built mobile CI/CD pipeline pushing apps onto TestFlight and GoogleStore via GitlabCI, GitlabRunner, Fastlane ",
      `Hosted 4+ internal technical seminars (${getATag(
        "NGXS (2)",
        "https://www.slideshare.net/HaNguyn98/nng-technical-seminar-ngxs"
      )}, ${getATag(
        "RxJS",
        "https://www.slideshare.net/HaNguyn98/rxjs-nng-technical-seminar"
      )}, ${getATag(
        "GraphQLCodegen",
        "https://www.slideshare.net/HaNguyn98/graphql-codegen-nng-technical-seminar"
      )})`,
      `Built and published open-sourced libraries (${getATag(
        "Capacitor Downloader",
        "https://www.npmjs.com/package/capacitor-plugin-downloader"
      )}, ${getATag(
        "Zalo Auth Capacitor",
        "https://www.npmjs.com/package/zalo-auth-capacitor-plugin"
      )})`,
      "Composed Angular Front-end Coding Guidelines for the entire company use",
      `Built ${getATag(
        "Interior Design Mobile App",
        "#" + SectionId.Projects
      )} including but not limited to features Login with Facebook, Zalo natively, online payment through VNPay, deep link supported, CMS, post, and comment simulated Facebook UI/UX mechanism`,
    ],
  },
];
export const projects: Project[] = [
  {
    type: "Featured Project",
    name: "ebi.xyz",
    description: (
      <p>
        A decentralized exchange (DEX) platform that supports perpetual trading
        <a
          href="https://ebi.xyz"
          target="_blank"
          rel="noreferrer"
          className="inline-block animated-border-bottom text-neon-500 ml-1"
        >
          Link
        </a>
      </p>
    ),
    thumbnails: [
      {
        title: "Withdraw",
        url: "./images/projects/ebi/withdraw.png",
        description:
          "Withdraw page allows users to withdraw their on-chain balance to their wallet.",
      },
      {
        title: "Claims Portal",
        url: "./images/projects/ebi/preview.png",
        description:
          "Claim portal for users withdraw their pending balance from the DEX.",
      },
      {
        title: "Claims Portal Video",
        url: "./images/projects/ebi/claim.mp4",
        description:
          "Claim portal for users withdraw their pending balance from the DEX.",
      },
    ],
    technologies: [
      {
        title: "Angular 18",
        url: "http://angular.dev/",
        description: "High-scalable javascript framework",
      },
      {
        title: "Wagmi",
        url: "http://wagmi.sh/",
        description: "Web3 SDK",
      },
      {
        title: "Rainbowkit",
        url: "https://www.rainbowkit.com/",
        description: "Web3 SDK",
      },
    ],
  },
  {
    type: "Featured Project",
    name: "ngx-wagmi & ngx-seedkit",
    description: (
      <p>
        Angular 18+ libraries to interact with Wagmi SDK and quickly adopt
        connect-wallet into Angular projects.
        <a
          href="https://ngx-wagmi.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="inline-block animated-border-bottom text-neon-500 ml-1"
        >
          Demo link
        </a>
      </p>
    ),
    thumbnails: [
      {
        title: "Demo Preview",
        url: "./images/projects/ngx-wagmi/preview.png",
        description:
          "Demo page for ngx-wagmi with connect-wallet and extensive actions supported from Wagmi",
      },
      {
        title: "Connect Wallet",
        url: "./images/projects/ngx-wagmi/connect-wallet.mp4",
        description:
          "Connect wallet with Wagmi SDK, get user's address, balance, support ENS, multiple networks, dynamic wallet connectors from Rainbowkit, QR code scanning & deeplinking from WalletConnect",
      },
    ],
    technologies: [
      {
        title: "Angular 18",
        url: "http://angular.dev/",
        description: "High-scalable javascript framework",
      },
      {
        title: "Wagmi",
        url: "http://wagmi.sh/",
        description: "Web3 SDK",
      },
      {
        title: "Rainbowkit",
        url: "https://www.rainbowkit.com/",
        description: "Web3 SDK",
      },
    ],
  },
  {
    type: "Featured Project",
    name: "Hybrid Interior Design App",
    description: `Interior Design Project for both Vietnam and Korean
    marketplaces provides the ability to register for design and
    construction services, creating their services with chatting and
    purchasing, combines of small CRM and CMS.`,
    thumbnails: [
      {
        title: "User Flows",
        url: "./images/projects/lifeon/record.mp4",
        description: "Simple login with Zalo flow",
      },
      {
        title: "Login Screen",
        url: "./images/projects/lifeon/login.png",
        description:
          "JWT for authentication. Supported logging in with Facebook and Zalo natively in both Android and iOS devices",
      },
      {
        title: "Home Screen (1)",
        url: "./images/projects/lifeon/home-1.png",
        description:
          "Kick-off your dream house with simple steps. Pick a dream house design, contact your potential constructors directly and let's us take care the rest",
      },
      {
        title: "Home Screen (2)",
        url: "./images/projects/lifeon/home-2.png",
        description:
          "A marketplace application with multiple languages, multiple roles and numbers of awesome features to explore...",
      },
      {
        title: "Design Detail Screen (1)",
        url: "./images/projects/lifeon/design-detail-1.png",
        description:
          "Like, bookmark, discuss with like-minded finders, put a review or share the design on various social channels",
      },
      {
        title: "Design Detail Screen (2)",
        url: "./images/projects/lifeon/design-detail-2.png",
        description:
          "Connect with potential constructors to actualize your design right after 1 touch",
      },
      {
        title: "Cart Screen",
        url: "./images/projects/lifeon/cart.png",
        description:
          "Put whatever you love into the cart, checkout mindlessly with only selected like Shopee",
      },
      {
        title: "Payment Screen",
        url: "./images/projects/lifeon/payment.png",
        description:
          "Quickly checkout through VNPay online payment and get your design right the time",
      },
      {
        title: "Posts Browsing Screen",
        url: "./images/projects/lifeon/post-list.png",
        description:
          "Check reviews and shares from design finders, get more insights before sign in the contract",
      },
      {
        title: "Post Detail Screen",
        url: "./images/projects/lifeon/post-detail.png",
        description:
          "Mimic the Facebook comment mechanism, reply nested reply, collapsible, real-time and handy",
      },
      {
        title: "Settings Screen",
        url: "./images/projects/lifeon/setting.png",
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
  {
    type: "Featured Project",
    name: "Chordchain | NFTs on Ethereum",
    description: (
      <div>
        Chordchain empowers musicians by storing song chords as NFTs,
        revolutionizing music ownership and collaboration in a decentralized
        ecosystem. Check out{" "}
        <a
          href="https://www.loom.com/share/52c51633b16248ed868e8f753403dcfa"
          target="_blank"
          rel="noreferrer"
          className="inline-block animated-border-bottom text-neon-500"
        >
          presentation video here{" "}
        </a>
        .
      </div>
    ),
    thumbnails: [
      {
        title: "Listing NFTs",
        url: "./images/projects/chordchain/list.png",
        description: "List NFTs with search and filter",
      },
      {
        title: "Detail NFT",
        url: "./images/projects/chordchain/detail.png",
        description:
          "Detail of a chord NFT with preview chord for guitarist, pianist, ...",
      },
      {
        title: "Create NFT",
        url: "./images/projects/chordchain/create.png",
        description:
          "Create chord NFT with basic information such as song's name, description or note for reader, lyric, origin song, genre, ...",
      },
    ],
    technologies: [
      {
        title: "NextJS 14",
        url: "https://nextjs.org/",
        description: "The React Framework for the Web",
      },
      {
        title: "Solidity",
        url: "https://soliditylang.org/",
        description: "Smart contracts programming language on Ethereum",
      },
      {
        title: "Pinata (IPFS)",
        url: "https://www.pinata.cloud/",
        description: "One of the biggest IPFS provider in the Web3 space",
      },
    ],
  },
  // {
  //   type: "Data Project",
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
        title: "Web - Car List Page",
        url: "./images/projects/avc/web-car-list.png",
        description:
          "Manage core entity in the platform, assign, activate, deactivate, check status and so on",
      },
      {
        title: "Web - Create Manager Page",
        url: "./images/projects/avc/web-create-manager.png",
        description:
          "Create manager for managing cars, staffs, and tracking issues",
      },
      {
        title: "Web - Train Model by ZIP Page",
        url: "./images/projects/avc/web-train-by-zip.png",
        description:
          "We built the pipeline for automatically training the detection model based on image sources",
      },
      {
        title: "Web - Label Image Page (1)",
        url: "./images/projects/avc/web-label-image-1.png",
        description:
          "Utilize <a href='https://igorlino.github.io/angular-annotorious/' target='_blank' rel='noreferrer' class='hover:text-neon-500'>Angular Annotorious</a> to label images for retraining the model",
      },
      {
        title: "Web - Label Image Page (2)",
        url: "./images/projects/avc/web-label-image-2.png",
        description:
          "Utilize <a href='https://igorlino.github.io/angular-annotorious/' target='_blank' rel='noreferrer' class='hover:text-neon-500'>Angular Annotorious</a> to label images for retraining the model",
      },
      {
        title: "Web - Dashboard Page",
        url: "./images/projects/avc/web-dashboard.png",
        description: "System generic information gathering and visualization",
      },
      {
        title: "Mobile - Car List Screen",
        url: "./images/projects/avc/car-list.png",
        description: "WebSocket integrated",
      },
      {
        title: "Mobile - Car Detail Screen",
        url: "./images/projects/avc/car-detail.png",
        description:
          "WebSocket integrated to start, stop or receive command realtime",
      },
      {
        title: "Mobile - Issue Detail Screen",
        url: "./images/projects/avc/issue-detail.png",
        description:
          "When the car has an issue, that issue & according notification will be fetched right the time",
      },
    ],
    technologies: [
      {
        title: "IoT & AI",
        url: "https://en.wikipedia.org/wiki/Artificial_intelligence",
      },
      {
        title: "Nx Workspace",
        url: "https://nx.dev/",
        description: "Smart, Fast and Extensible Build System",
      },
      {
        title: "Angular 11",
        url: "http://angular.io/",
        description: "High-scalable javascript framework",
      },
      {
        title: "SignalR",
        url: "https://www.npmjs.com/package/@microsoft/signalr",
        description: "Microsoft SignalR for client-side Javascript",
      },
      {
        title: "Angular Annotorious",
        url: "https://igorlino.github.io/angular-annotorious/",
        description: "Image labelling library for Angular",
      },
      {
        title: "Taiga UI",
        url: "https://taiga-ui.dev/",
        description: "UI library for Angular components",
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
    ],
  },
];

function getATag(title: string, href: string) {
  return `<a href="${href}" ${
    !href.startsWith("#") && "target='_blank'"
  } rel="noreferrer" class="inline-block !text-neon-500 animated-border-bottom">${title}</a>`;
}
