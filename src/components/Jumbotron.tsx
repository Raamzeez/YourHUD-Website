"use client";

import useWindowDimensions from "@/hooks/useWindowDimensions";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { FC, useState } from "react";

const Jumbotron: FC = () => {
  const { height, width } = useWindowDimensions();

  const [hover, setHover] = useState(false);

  return (
    <div
      className="dark:bg-[url('https://images.pexels.com/photos/169677/pexels-photo-169677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-[url('https://images.pexels.com/photos/185662/pexels-photo-185662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-no-repeat bg-cover h-[90vh] w-full flex relative items-center justify-center flex-col"
      style={{ minHeight: width > 340 ? (width > 640 ? 650 : 700) : 750 }}
    >
      <h1 className="text-5xl m-5 text-white p-3 animate__animated animate__fadeInDown">
        Drive The Future Today
      </h1>
      <h1 className="text-white m-5 animate__animated animate__fadeInDown">
        The World&apos;s Most Advanced HUD App
      </h1>
      <div
        className="mt-24 h-10 w-32 rounded-3xl flex items-center justify-center cursor-pointer hover:w-40 bg-gradient-to-r from-cyan-200 to-blue-300 dark:from-cyan-500 dark:to-blue-600 hover:shadow-lg duration-300"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <a href="#features" className="duration-300">
          Learn More
        </a>
        {hover && (
          <FontAwesomeIcon
            icon={faAnglesDown}
            className="animate-bounce m-3"
            size="1x"
          />
        )}
      </div>
      <img
        src={"/images/appstoredownload.png"}
        alt="App Store Download"
        width={130}
        height={0}
        className="absolute bottom-10 mb-10 hover:shadow-lg duration-200 cursor-pointer"
        onClick={() =>
          window.open(
            "https://apps.apple.com/us/app/yourhud/id1605498880?platform=iphone"
          )
        }
      />
    </div>
  );
};

export default Jumbotron;
