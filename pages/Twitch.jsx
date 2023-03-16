/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-15 10:44:31
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-15 10:54:52
 * @FilePath: \portfolio-nextjs-mainc:\Users\DT\Desktop\portfolio-website\pages\Twitch.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import PagesItem from "../pages/PagesItem";

import twitchImg from "../public/assets/projects/twitch.jpg";

export default function Twitch() {
  return (
    <div>
      <PagesItem
        nameOne="Next JS"
        nameTwo="Tailwind"
        nameThree="Javascript"
        nameFour="Next Auth"
        nameFive="Github Auth"
        nameSix="Google Auth"
        ImgUrl={twitchImg}
        title="Twitch UI"
        subtitle="Next JS / Tailwind / Next Auth"
        description="This appplication was built using NEXT.JS and is styled with
        Tailwind CSS. The application is hosted statically using Vercel.
        This is a mobile responsive recreation of Twitch.tv and features
        Next/Auth.js for authentication. Users may choose to be
        authenticated with either a Github account or a Google account. A
        few features to note with this project are lazy loading images using
        the Image component, built in routing, and Next/Auth Context."
      />
    </div>
  );
}
