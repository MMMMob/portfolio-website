/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-10 20:23:13
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-15 10:55:36
 * @FilePath: \portfolio-nextjs-mainc:\Users\DT\Desktop\portfolio-website\components\Projects.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import ProjectsItem from "@/components/ProjectsItem";

import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";

const projects = [
  {
    ImgUrl: propertyImg,
    Title: "Property Finder",
    herfUrl: "/Property",
    tech: "React JS",
  },
  {
    ImgUrl: cryptoImg,
    Title: "Crypto App",
    herfUrl: "/Crypto",
    tech: "React JS",
  },
  {
    ImgUrl: netflixImg,
    Title: "Netflix App",
    herfUrl: "/Netflix",
    tech: "React JS",
  },
  {
    ImgUrl: twitchImg,
    Title: "Twitch UI",
    herfUrl: "/Twitch",
    tech: "Next JS",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="w-full h-full">
      <div className="max-w-[1240px] mx-auto px-2 py-24">
        <div className="px-2 md:px-2">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Projects
          </p>
          <h2 className="py-4">What I&apos;ve Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectsItem key={project.Title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
