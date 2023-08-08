import Image from "next/image";
import React, { FC } from "react";

const Jumbotron: FC = () => {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-no-repeat bg-cover h-[90vh] w-full flex relative items-center justify-center flex-col">
      <h1 className="text-5xl text-white animate__animated animate__fadeInDown">
        Drive The Future Today
      </h1>
      <h1 className="text-white mt-10 animate__animated animate__fadeInDown">
        The World's Most Advanced HUD App
      </h1>
      <div className="mt-24 h-10 w-32 rounded-3xl bg-gradient-to-r from-cyan-200 to-blue-300 dark:from-cyan-500 dark:to-blue-600 hover:shadow-lg duration-300 flex items-center justify-center cursor-pointer">
        <a href="#features">Learn More</a>
      </div>
      <Image
        src={"/images/appstoredownload.png"}
        alt="App Store Download"
        width={300}
        height={75}
        className="absolute bottom-0 mb-10 cursor-pointer"
      />
    </div>
  );
};

export default Jumbotron;
