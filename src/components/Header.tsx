"use client";

import links from "@/data/links";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import Hamburger from "hamburger-react";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";

const Header: FC = () => {
  const { width } = useWindowDimensions();
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className={`w-full flex ${
        !isOpen && "justify-center items-center"
      } mx-auto ${
        !isOpen ? "h-[10vh]" : "h-[50vh]"
      } duration-300 row-span-full bg-white dark:bg-slate-900 shadow`}
      style={{ minHeight: isOpen ? 200 : 75 }}
    >
      <div
        className={`${
          !isOpen && "justify-center items-center w-1/12 h-full flex"
        }`}
      >
        {!isOpen && (
          <a href="/">
            <Image
              src={"/images/YourHUD_Logo_Updated_Compressed.jpg"}
              alt="YourHUD Logo"
              width={50}
              height={50}
              className="rounded-lg hover:shadow-xl ml-3 duration-300 cursor-pointer"
            />
          </a>
        )}
        {width <= 640 && isOpen && (
          <div className="ml-10">
            {links.map(({ url, title }) => {
              return (
                <Link
                  key={nanoid()}
                  href={url}
                  className="w-1/4 h-[10vh] flex justify-center items-center active:underline"
                >
                  {title}
                </Link>
              );
            })}
          </div>
        )}
      </div>
      <div className="w-2/12"></div>
      <div className="w-7/12 h-[full] flex row-span-full">
        {width > 640 && (
          <>
            {links.map(({ url, title }) => {
              return (
                <Link
                  key={nanoid()}
                  href={url}
                  className="w-1/4 h-[10vh] flex justify-center items-center active:underline"
                >
                  {title}
                </Link>
              );
            })}
          </>
        )}
      </div>
      <div className="w-3/12 h-[10vh] flex items-center justify-center">
        {width < 640 && <Hamburger toggled={isOpen} toggle={setOpen} />}
      </div>
    </div>
  );
};

export default Header;
