import { AnimationOnScroll } from 'react-animation-on-scroll';

import { SectionId } from '../constants/data';

export default function ContactSection({ className }: { className: string }) {
  return (
    <section
      id={SectionId.Contact}
      className={`flex flex-col justify-center items-center text-center gap-y-4 py-12 ${className}`}
    >
      <a
        href={"#" + SectionId.Contact}
        className="font-ubuntu text-2xl text-neon-500 animated-border-bottom mr-2"
      >
        04. What's next?
      </a>
      <h2 className="text-7xl text-gray-100 font-bold">Get In Touch</h2>
      <p className="max-w-lg mb-8">
        I'm actively looking for new opportunities at a Blockchain startup
        company, my inbox is always opening. Whether you have a question or just
        want to say&nbsp;
        <strong className="px-2 py-1 rounded-md bg-gray-700 text-gray-100">
          Hi 👋
        </strong>
        , I'll try my best to get back to you!
      </p>

      <AnimationOnScroll animateIn="animate__wobble">
        <a href="mailto:thanhthanhhoa123@gmail.com" className="btn xl">
          Say Hello 🎁
        </a>
      </AnimationOnScroll>
    </section>
  );
}
