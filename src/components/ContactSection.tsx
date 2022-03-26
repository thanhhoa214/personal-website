import { SectionId } from "../constants/data";
import Button from "./atoms/Button";

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
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>

      <Button size="xl">Say Hello</Button>
    </section>
  );
}
