/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-09 08:40:26
 * @LastEditors: MMMMob dengt9428@gmail.com
 * @LastEditTime: 2023-03-20 09:35:53
 * @FilePath: \portfolio-nextjs-mainc:\Users\DT\Desktop\portfolio-website\components\Navbar.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Link as ScrollLink } from "react-scroll";
import Image from "next/legacy/image";
import Link from "next/link";

import { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";

import navLogo from "../public/assets/navLogo.png";

import IconComponent from "./IconComponent";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2938");
  const router = useRouter();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // 添加清除函数
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (
      router.pathname === "/Property" ||
      router.pathname === "/Crypto" ||
      router.pathname === "/Netflix" ||
      router.pathname === "/Twitch"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2938");
    }
  }, [router]);

  const navLinks = [
    { to: "mian", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <div
      style={{ backgroundColor: navBg }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className=" flex  justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src={navLogo}
            alt="/"
            width="125"
            height="50"
            layout="fixed"
            className="px-4"
          />
        </Link>
        <div className="px-4">
          <ul style={{ color: linkColor }} className="hidden md:flex">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={300}
              >
                <li className="ml-10 text-sm uppercase hover:border-b-2 ease-in duration-100">
                  {link.label}
                </li>
              </ScrollLink>
            ))}
          </ul>
          <div className="md:hidden" onClick={handleOpen}>
            <AiOutlineMenu className="text-2xl" />
          </div>
        </div>
      </div>

      <div
        className={
          isOpen
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            isOpen
              ? "fixed left-0 top-0 w-[75%] sm:w-[45%] h-screen bg-[#ecf0f3] p-3 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src={navLogo}
                width="87"
                height="35"
                alt="/"
                layout="fixed"
              ></Image>
              <div
                onClick={handleOpen}
                className="mr-3 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose className="text-2xl" />
              </div>
            </div>
            <div className=" border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className="flex py-4 flex-col">
            <ul className=" uppercase">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={300}
                  onClick={() => setIsOpen(false)}
                >
                  <li className="py-4 text-sm">{link.label}</li>
                </ScrollLink>
              ))}
            </ul>
            <div className="pt-40">
              <p className=" uppercase tracking-wider text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className=" flex justify-center py-6">
                <IconComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
