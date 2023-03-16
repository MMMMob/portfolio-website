/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-15 09:19:33
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-15 10:53:42
 * @FilePath: \portfolio-nextjs-mainc:\Users\DT\Desktop\portfolio-website\pages\Crypto.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import PagesItem from "../pages/PagesItem";

import cryptoImg from "../public/assets/projects/crypto.jpg";

export default function Crypto() {
  return (
    <div>
      <PagesItem
        nameOne="React JS"
        nameTwo="Tailwind"
        nameThree="Javascript"
        nameFour="Firebase"
        nameFive="Coin Gecko API"
        nameSix="Routes"
        ImgUrl={cryptoImg}
        title="Crypto App"
        subtitle="React JS / Tailwind / Firebase"
        description='I built this app to demonstrate knowledge working in React JS and
        accessing API endpoints. This app was built using React JS and is
        hosted on Firebase. This application supports user authentication
        using firebase. Users are able to create a new account using their
        email address and can then sign in to save coins to a user specific
        list. This is made possble by creating a firestore cloud storage
        database at the time of user registration. Another feature of this
        application is dynamic routing through the "React Router DOM"
        package. This application was built using the Coin Gecko API.'
      />
    </div>
  );
}
