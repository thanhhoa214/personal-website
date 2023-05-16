import { BsGithub } from 'react-icons/bs';
import {
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';

export default function Channel() {
  const childClassName = "transition-colors hover:text-gray-200";
  return (
    <div className="hidden md:block">
      <div className="fixed bottom-0 left-6 flex flex-col items-center gap-4 text-gray-600">
        <ReactTooltip place="top" type="light" effect="float" />
        <a
          href="https://www.linkedin.com/in/thanhhoa214/"
          data-tip="🍀 View my Linkedin profile (thanhhoa214)"
          target="_blank"
          rel="noreferrer"
          className={childClassName}
        >
          <FaLinkedinIn size="24" />
        </a>
        <a
          href="https://t.me/thanhhoa214"
          data-tip="💬 Send me a Telegram DM @thanhhoa214"
          target="_blank"
          rel="noreferrer"
          className={childClassName}
        >
          <FaTelegramPlane size="24" />
        </a>
        <a
          href="https://github.com/thanhhoa214"
          data-tip="🎁 Check out my projects (thanhhoa214)"
          target="_blank"
          rel="noreferrer"
          className={childClassName}
        >
          <BsGithub size="24" />
        </a>
        <div className="w-[1px] h-40 bg-gray-600"></div>
      </div>
      <div className="fixed top-0 -right-20 flex flex-col-reverse items-center gap-4 text-gray-600">
        <a
          href="mailto:thanhthanhhoa123@gmail.com"
          className="rotate-90 mt-24 transition-colors hover:text-gray-200"
          title="Email me"
        >
          thanhthanhhoa123@gmail.com
        </a>
        <div className="w-[1px] h-20 bg-gray-600"></div>
      </div>
    </div>
  );
}
