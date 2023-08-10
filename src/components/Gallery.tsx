"use client";
import React, { FC } from "react";
import GalleryPhoto from "./GalleryPhoto";

const Gallery: FC = () => {
  return (
    <div
      id="gallery"
      className="h-[70vh] w-full flex flex-col col-span-full dark:bg-slate-700"
    >
      <div className="h-1/5 w-full flex items-center justify-center flex-col">
        <h1 className="text-3xl">Gallery</h1>
        <p className="mt-3 font-light italic">More pictures soon!</p>
      </div>
      <div className="h-2/5 w-full flex flex-row">
        <GalleryPhoto imagePath="/images/test.png" />
        <GalleryPhoto imagePath="/images/test2.png" />
        <GalleryPhoto imagePath="/images/hudhighway.png" />
      </div>
      <div className="h-2/5 w-full flex flex-row">
        <GalleryPhoto imagePath="/images/troyhud.png" />
        <GalleryPhoto imagePath="/images/compasshud.png" />
        <GalleryPhoto imagePath="/images/sportshudnight.png" />
      </div>
    </div>
  );
};

export default Gallery;
