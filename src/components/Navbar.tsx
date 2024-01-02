import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn, FaTelegramPlane, FaBars, FaMixer } from "react-icons/fa";

import { SectionId } from "../constants/data";
import Button from "./atoms/Button";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const childClassName = "transition-colors hover:text-gray-200";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <nav className="flex justify-between py-4 px-4 md:px-12">
        <a href="/" className="text-neon-500 font-bold">
          @thanhhoa214
        </a>
        <ol className="hidden md:flex items-center gap-4 lg:gap-10 font-ubuntu">
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
            <a href={"#" + SectionId.Artwork}>04. Artworks</a>
          </li>
          <li className="animated-border-bottom">
            <a href={"#" + SectionId.Contact}>05. Contact</a>
          </li>
          <a href="https://docs.google.com/document/d/1qD2p9DSOKE4IHRY0ZO_vn9X5Nwgf0yXUNlkmg7HZQpE/edit?usp=sharing">
            <Button>Résume 📜</Button>
          </a>
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
          <FaBars onClick={toggleDrawer} size="25" className="ml-3" />
        </div>
      </nav>

      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer}
        direction="right"
        size={160}
        lockBackgroundScroll={true}
        className="!bg-black"
      >
        <div className="flex flex-col items-end gap-4 p-4">
          <FaMixer onClick={toggleDrawer} size="25" className="mr-0 ml-auto" />
          <a href={"#" + SectionId.About} onClick={toggleDrawer}>
            About • 01
          </a>
          <a href={"#" + SectionId.Experience} onClick={toggleDrawer}>
            Experience • 02
          </a>
          <a href={"#" + SectionId.Projects} onClick={toggleDrawer}>
            Projects • 03
          </a>
          <a href={"#" + SectionId.Contact} onClick={toggleDrawer}>
            Contact • 04
          </a>
          <a
            href="https://docs.google.com/document/d/1qD2p9DSOKE4IHRY0ZO_vn9X5Nwgf0yXUNlkmg7HZQpE/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <Button>Résumé 📜</Button>
          </a>
        </div>
      </Drawer>
    </>
  );
}
