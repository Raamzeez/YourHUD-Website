import useWindowDimensions from "@/hooks/useWindowDimensions";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

interface iProps {
  title: string;
  icon: IconProp;
}

const Feature: FC<iProps> = ({ title, icon }) => {
  const { height, width } = useWindowDimensions();

  return (
    <div className="h-full w-1/4 flex flex-col justify-center items-center">
      <div className="h-4/5 w-3/5 flex flex-col justify-center items-center">
        <FontAwesomeIcon icon={icon} size={width > 600 ? "3x" : "2x"} />
        <h1
          className={`m-5 font-medium ${
            width < 400 ? (width < 300 ? "text-xs" : "text-sm") : "text-md"
          }`}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Feature;
