/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-10 08:47:49
 * @LastEditors: MMMMob dengt9428@gmail.com
 * @LastEditTime: 2023-03-20 09:34:51
 * @FilePath: \portfolio-nextjs-mainc:\Users\DT\Desktop\portfolio-website\components\Mian.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import IconComponent from "./IconComponent";

export default function Mian() {
  return (
    <div id='mian' className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className=" uppercase text-sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1>
            Hi, I&#39;m
            <span className="text-[#5651e5]">Clint</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className="flex items-center justify-center max-w-[330px] m-auto py-4">
            <IconComponent/>
          </div>
        </div>
      </div>
    </div>
  );
}
