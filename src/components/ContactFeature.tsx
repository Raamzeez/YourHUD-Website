"use client";

import useWindowDimensions from "@/hooks/useWindowDimensions";
import iContactFeature from "@/models/contactFeature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

const ContactFeature: FC<iContactFeature & { className?: string }> = ({
  icon,
  title,
  body,
  className,
}) => {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <div
        className={`h-96 ${
          width > 460 ? (width > 640 ? "w-1/3" : "w-4/5") : "w-full"
        } flex items-center justify-center ${className}`}
      >
        <div className="h-4/5 w-2/3 rounded-md flex flex-col bg-gradient-to-r from-cyan-300 dark:from-cyan-600 to-blue-400 dark:to-blue-600 shadow-lg">
          <div className="h-2/6 w-full flex items-center justify-center">
            <FontAwesomeIcon icon={icon} size={"2xl"} />
          </div>
          <div className="h-1/6 w-full flex items-center justify-center">
            <h1 className={`m-5 ${width > 330 ? "text-lg" : "text-sm"}`}>
              {title}
            </h1>
          </div>
          <div className="h-3/6 w-full flex items-center justify-center">
            <p
              className={`${
                width > 1000
                  ? width > 1500
                    ? "text-lg"
                    : "text-md"
                  : "text-xs"
              } w-4/5 m-3`}
            >
              {body}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFeature;
