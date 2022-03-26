import React from "react";
import { SectionId } from "../constants/data";
import { RiListSettingsLine } from "react-icons/ri";

import Button from "./atoms/Button";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export default function Navbar() {
  const childClassName = "transition-colors hover:text-gray-200";
  return (
    <nav className="flex justify-between py-4">
      <a href="/" className="text-neon-500 font-bold">
        @thanhhoa214
      </a>
      <ol className="hidden md:flex items-center gap-10 font-ubuntu">
        <li className="animated-border-bottom">
          <a href={"#" + SectionId.About}>01. About</a>
        </li>
        <li className="animated-border-bottom">
          <a href={"#" + SectionId.Experience}>02. Experience</a>
        </li>
        <li className="animated-border-bottom">
          <a href={"#" + SectionId.Projects}>03. Projects</a>
        </li>
        <li className="animated-border-bottom">
          <a href={"#" + SectionId.Contact}>04. Contact</a>
        </li>
        <Button>Resume</Button>
      </ol>
      <div className="flex md:hidden items-center gap-x-4">
        <a
          href="https://www.linkedin.com/in/thanhhoa214/"
          target="_blank"
          rel="noreferrer"
          className={childClassName}
        >
          <FaLinkedinIn size="20" />
        </a>
        <a
          href="https://t.me/thanhhoa214"
          target="_blank"
          rel="noreferrer"
          className={childClassName}
        >
          <FaTelegramPlane size="20" />
        </a>
        <a
          href="https://github.com/thanhhoa214"
          target="_blank"
          rel="noreferrer"
          className={childClassName}
        >
          <BsGithub size="20" />
        </a>
        <RiListSettingsLine size="25" className="ml-3" />
      </div>
    </nav>
  );
}
