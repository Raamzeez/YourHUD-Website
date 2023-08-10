"use client";

import useWindowDimensions from "@/hooks/useWindowDimensions";
import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";

const Header: FC = () => {
  const { height, width } = useWindowDimensions();
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className={`w-full flex ${
        !isOpen && "justify-center items-center"
      } mx-auto ${
        !isOpen ? "h-[10vh]" : "h-[50vh]"
      } duration-300 row-span-full bg-white dark:bg-black shadow`}
      style={{ minHeight: isOpen ? 200 : 75 }}
    >
      <div
        className={`w-1/12 h-full flex ${
          !isOpen && "justify-center items-center"
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
            <Link
              href="/#features"
              className="w-1/4 h-[10vh] flex justify-center items-center"
            >
              Features
            </Link>
            <Link
              href="/#gallery"
              className="w-1/4 h-[10vh] flex justify-center items-center"
            >
              Gallery
            </Link>
            <Link
              href="/#demo"
              className="w-1/4 h-[10vh] flex justify-center items-center"
            >
              Demo
            </Link>
            <Link
              href="/contact"
              className="w-1/4 h-[10vh] flex justify-center items-center"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="w-1/4 h-[10vh] flex justify-center items-center"
            >
              Privacy Policy
            </Link>
          </div>
        )}
      </div>
      <div className="w-2/12"></div>
      <div className="w-7/12 h-[full] flex row-span-full">
        {width > 640 && (
          <>
            <Link
              href="/#features"
              className="w-1/4 h-[10vh] flex justify-center items-center"
            >
              Features
            </Link>
            <Link
              href="/#gallery"
              className="w-1/4 h-[10vh] flex justify-center items-center"
            >
              Gallery
            </Link>
            <Link
              href="/#demo"
              className="w-1/4 h-[10vh] flex justify-center items-center"
            >
              Demo
            </Link>
            <Link
              href="/contact"
              className="w-1/4 h-[10vh] flex justify-center items-center"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="w-1/4 h-[10vh] flex justify-center items-center"
            >
              Privacy Policy
            </Link>
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
