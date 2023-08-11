import Image from "next/image";
import React, { FC } from "react";

interface iProps {
  imagePath: string;
}

const GalleryPhoto: FC<iProps> = ({ imagePath }) => {
  return (
    <div className="h-full w-1/3 flex items-center justify-center">
      <div
        className={`h-40 hover:h-52 w-60 hover:w-80 hover:border-solid hover:border-4 hover:border-gray-400 rounded-xl shadow-sm hover:shadow-lg duration-200 cursor-pointer bg-white`}
      >
        <img src={imagePath} alt="Test" className="h-full w-full rounded-md" />
      </div>
    </div>
  );
};

export default GalleryPhoto;
