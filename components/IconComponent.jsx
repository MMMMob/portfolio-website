import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const socialIcons = [
  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
  { icon: <FaGithub />, link: "https://github.com/" },
  { icon: <AiOutlineMail />, link: "mailto:youremail@example.com" },
  { icon: <BsFillPersonLinesFill />, link: "https://www.bing.com/" },
];

export default function IconComponent() {
  return (
    <div className=" flex justify-between space-x-4">
      {socialIcons.map((icon) => (
        <a
          key={icon.link}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl p-4 rounded-full shadow-lg shadow-gray-400 cursor-pointer"
        >
          {icon.icon}
        </a>
      ))}
    </div>
  );
}
