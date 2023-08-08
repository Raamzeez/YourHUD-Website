import Image from "next/image";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <div className="w-full flex justify-center items-center mx-auto h-[10vh] row-span-full bg-white dark:bg-black shadow">
      <div className="w-1/12 h-[10vh] flex justify-center items-center">
        <Image
          src={"/images/YourHUD_Logo_Updated_Compressed.jpg"}
          alt="YourHUD Logo"
          width={50}
          height={50}
          className="rounded-lg shadow-lg cursor-pointer"
        />
      </div>
      <div className="w-2/12"></div>
      <div className="w-7/12 h-[10vh] flex row-span-full">
        <div className="w-1/4 h-[10vh] flex justify-center items-center">
          <a href="/#features">Features</a>
        </div>
        <div className="w-1/4 h-[10vh] flex justify-center items-center">
          <a href="/#demo">Demo</a>
        </div>
        <div className="w-1/4 h-[10vh] flex justify-center items-center">
          <a href="/#support">Support</a>
        </div>
        <div className="w-1/4 h-[10vh] flex justify-center items-center">
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
      <div className="w-3/12 h-[10vh]" />
    </div>
  );
};

export default Header;
