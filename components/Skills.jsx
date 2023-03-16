/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-10 09:53:41
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-14 14:04:46
 * @FilePath: \portfolio-nextjs-mainc:\Users\DT\Desktop\portfolio-website\components\Skills.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import SkillsItem from "@/components/SkillsItem";

import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";

const skills = [
  { srcUrl: Html, title: "HTML" },
  { srcUrl: Css, title: "CSS" },
  { srcUrl: Javascript, title: "JavaScript" },
  { srcUrl: ReactImg, title: "React" },
  { srcUrl: Tailwind, title: "Tailwind CSS" },
  { srcUrl: Github, title: "GitHub" },
  { srcUrl: Firebase, title: "Firebase" },
  { srcUrl: NextJS, title: "Next.js" },
];

const skillsItems = skills.map((skill) => (
  <SkillsItem key={skill.title} srcUrl={skill.srcUrl} title={skill.title} />
));

export default function Skills() {
  return (
    <div id="skills" className="w-full h-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto h-full flex items-center">
        <div className="w-full px-4 sm:px-0">
          <p className=" uppercase text-xl tracking-widest text-[#5651e5]">
            Skills
          </p>
          <h2 className="py-4">What I Can Do</h2>
          <div className="grid sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skillsItems}
          </div>
        </div>
      </div>
    </div>
  );
}
