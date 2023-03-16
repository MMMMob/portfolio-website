/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-14 14:50:08
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-15 10:53:18
 * @FilePath: \portfolio-nextjs-mainc:\Users\DT\Desktop\portfolio-website\pages\Property.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import Image from "next/legacy/image";
// import Link from "next/link";

// import { RiRadioButtonFill } from "react-icons/ri";
import propertyImg from "../public/assets/projects/property.jpg";

import PagesItem from "../pages/PagesItem";

export default function Property() {
  return (
    <div>
      <PagesItem
        nameOne="React JS"
        nameTwo="Tailwind"
        nameThree="Firebase"
        nameFour="Zillow API"
        nameFive="Google API"
        nameSix="React Router"
        ImgUrl={propertyImg}
        title="Property Finders"
        subtitle="React JS / Tailwind / Firebase"
        description="This app was built using React JS and is hosted on Firebase. Users
            are able to search properties based on an Address, City, or ZIP code
            to retrieve a list of active properties currently for sale. You will
            be able to view property information as well as the specific
            location of the property integrated with the Google Maps API. User
            authentication is available so you can signup and signin to your
            account with an email address in order to save your favorite
            properties. This is made possible with Zillow API."
      />
    </div>
  );
}
