/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-14 21:16:08
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-15 16:05:05
 * @FilePath: \portfolio-nextjs-mainc:\Users\DT\Desktop\portfolio-website\pages\PagesItem.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import { Link as ScrollLink } from "react-scroll";
import Image from "next/legacy/image";
import Link from "next/link";

import { RiRadioButtonFill } from "react-icons/ri";

export default function PagesItem({
  nameOne,
  nameTwo,
  nameThree,
  nameFour,
  nameFive,
  nameSix,
  ImgUrl,
  title,
  subtitle,
  description,
}) {
  const technologies = [
    { name: nameOne },
    { name: nameTwo },
    { name: nameThree },
    { name: nameFour },
    { name: nameFive },
    { name: nameSix },
  ];

  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-100">
          <Image
            className="absolute -z-10"
            src={ImgUrl}
            layout="fill"
            objectFit="cover"
            alt="/"
          />
          <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">{title}</h2>
            <h3>{subtitle}</h3>
          </div>
        </div>
      </div>

      <div className=" max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 items-center">
        <div className="col-span-5 md:col-span-4 px-2 md:px-0">
          <p>Project</p>
          <h2>Dverbiew</h2>
          <p>{description}</p>
          <div className="text-center md:text-left">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
            <button className="px-8 py-2 mt-4">Code</button>
          </div>
          <Link href="/#projects">
            <p className=" underline cursor-pointer pt-6 md:pt-12 text-center md:text-left">
              Back
            </p>
          </Link>
        </div>
        <div className="col-span-5 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Techologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="text-gray-500 py-2 flex items-center"
                >
                  <RiRadioButtonFill className="pr-1" /> {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
