/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-15 09:37:35
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-15 10:53:45
 * @FilePath: \portfolio-nextjs-mainc:\Users\DT\Desktop\portfolio-website\pages\Netflix.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import PagesItem from "../pages/PagesItem";

import netflixImg from "../public/assets/projects/netflix.jpg";

export default function Netflix() {
  return (
    <div>
      <PagesItem
        nameOne="React JS"
        nameTwo="Tailwind"
        nameThree="Javascript"
        nameFour="Firebase"
        nameFive="IMDB API"
        ImgUrl={netflixImg}
        title="Netflix App"
        subtitle="React JS / Tailwind / Firebase"
        description="I built this application in React JS and is hosted on GitHub pages.
        This app features user authentication with firebase as well as the
        firestore cloud storage database. This application is pulling movie
        data from an the IMDB movie API and displaying different categories.
        It features horizontal sliding and a featured selection. The
        useContext hook is also being implemented for app-wide state
        management."
      />
    </div>
  );
}
