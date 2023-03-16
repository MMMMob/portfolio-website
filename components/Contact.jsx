/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-12 10:54:39
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-15 16:38:12
 * @FilePath: \portfolio-nextjs-mainc:\Users\DT\Desktop\portfolio-website\components\Contact.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Link } from "react-scroll";
import Image from "next/image";

import ContactImg from "../public/assets/contact.jpg";

import IconComponent from "./IconComponent";

import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export default function Contact() {
  return (
    <div id="contact" className="max-w-[1240px] m-auto px-2 pt-24 w-full">
      <div className="px-2 md:px-0">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 md:col-span-2 lg:col-span-2 h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  src={ContactImg}
                  alt="/"
                  // priority={true}
                  className=" rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>
              <div>
                <h2 className="py-2">Name here</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pyt-8">Connect With Me</p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                  <IconComponent />
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 md:col-span-2 lg:col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <form>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label htmlFor="name" className="uppercase text-sm py-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="border-b rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="border-b rounded-lg p-3 flex border-gray-300"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="subject" className="uppercase text-sm py-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="border-b rounded-lg p-3 flex border-gray-300"
                />
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="message" className="uppercase text-sm py-2">
                  Message
                </label>
                <textarea
                  className="border-2 rounded-lg p-3 border-gray-300"
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <button className="w-full p-4 text-gray-100 mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-center py-6">
          <Link to="mian" smooth={true} duration={300}>
            <div className="text-4xl p-3 rounded-full shadow-lg shadow-gray-400 cursor-pointer">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
