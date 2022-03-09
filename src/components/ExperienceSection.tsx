import { useState } from 'react';

import { companies } from '../constants/data';

export default function ExperienceSection() {
  const [company, setCompany] = useState(companies[0]);

  return (
    <section id="experience" className="max-w-5xl">
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
      <main>
        <ol className="inline-block w-60 relative align-top font-ubuntu">
          <div
            className="h-12 w-1 bg-neon-600 rounded-full absolute transition-transform"
            style={{
              transform: `translateY(${(company.id - 1) * 3}rem)`,
            }}
          ></div>
          {companies.map((c) => (
            <li
              key={c.name}
              className={c.id === company.id ? "active" : ""}
              onClick={() => setCompany(c)}
            >
              <span className="inline-block h-7 w-7 p-1 -mt-0.5 rounded-md bg-white mr-2">
                <img
                  src={c.thumbnailUrl}
                  alt={`${c.name} logo`}
                  className="h-5"
                />
              </span>
              <span className="inline-block align-top">{c.name}</span>
            </li>
          ))}
        </ol>
        <section className="inline-block py-2 px-4">
          <h3 className="space-x-2">
            <span className="text-gray-200">{company.title}</span>
            <span>|</span>
            <a
              href={company.url}
              target="_blank"
              rel="noreferrer"
              className="inline-block animated-border-bottom"
            >
              {company.name}
            </a>
          </h3>
          <p className="font-ubuntu text-gray-500 text-sm space-x-1 mb-4">
            <time dateTime={company.from}>{company.from}</time>
            <span>—</span>
            <time dateTime={company.to}>{company.to}</time>
          </p>
          <ul>
            {company.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </section>
      </main>
    </section>
  );
}
