import React from 'react';

export default function ProjectSection() {
  return (
    <section id="projects">
      <header className="flex items-center gap-3 mb-10 max-w-2xl">
        <div className="w-20 h-0.5 bg-gray-600"></div>
        <h2>
          <strong className="font-ubuntu text-3xl text-neon-500 mr-2">
            02.
          </strong>
          <strong className="text-4xl text-gray-100">Where I've Worked</strong>
        </h2>
        <div className="flex-grow h-0.5 bg-gray-600"></div>
      </header>
      <main className="relative">
        <figure className="inline-block w-2/3 h-96 bg-navy-900">
          <img
            src="/images/projects/lifeon/post-detail.png"
            alt="Life On - Post Detail Screen"
            className="h-full object-contain mx-auto"
          />
        </figure>
        <section className="absolute top-0 right-0 t-8 w-2/3 -ml-56 text-right">
          <p className="font-ubuntu text-gray-500">Featured Project</p>
          <h3 className="text-2xl text-neon-600 font-bold mb-6">
            Hybrid Interior Design App
          </h3>

          <p className="p-4 rounded-md bg-navy-700 mb-6">
            Interior Design Project Interior Design for Vietnam and Korean
            marketplaces provides the ability to register for design and
            construction services, creating their services with chatting and
            purchasing, combines of small CRM and CMS.
            <br /> Developed a hybrid mobile application using
            <a
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
            </a>
          </p>
          {/* - Setting up
            project infrastructure (feature-based structure)
             - NGXS for state
            management
             - JWT for authentication
             - Login with Facebook, Zalo
             - Apollo GraphQL for connecting with Back-end API server
             - Setting GraphQL Codegen to sync out of the box with Back-end
             - Multilanguage supported by ngx-translate
             - Online payment with VNPay.
             - Created reusable hybrid NPM packages.
             - Created CI/CD pipelines using Fastlane, GitlabCI and also set up company mobile deployment machine
            using GitlabRunner for building product mobile applications.
            Includes iOS and Android also. Auto-push application to TestFlight,
            build a debug APK and notification. The project was successfully
            completed in Phase 1 with happiness and thankful messages from the
            customer. */}

          <ol className="space-x-6">
            <li className="inline-block">VS Code</li>
            <li className="inline-block">Sublime Text</li>
            <li className="inline-block">Atom</li>
            <li className="inline-block">iTerm2</li>
            <li className="inline-block">Hyper</li>
          </ol>
        </section>
      </main>
    </section>
  );
}
