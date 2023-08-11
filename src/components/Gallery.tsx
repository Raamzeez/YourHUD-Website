"use client";
import React, { FC } from "react";
import GalleryPhoto from "./GalleryPhoto";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import { nanoid } from "nanoid";

const Gallery: FC = () => {
  const { height, width } = useWindowDimensions();

  const images: ReactImageGalleryItem[] = [
    {
      original: "/images/test.png",
      thumbnail: "/images/test.png",
    },
    { original: "/images/test2.png", thumbnail: "/images/test2.png" },
    { original: "/images/hudhighway.png", thumbnail: "/images/hudhighway.png" },
    { original: "/images/troyhud.png", thumbnail: "/images/troyhud.png" },
    { original: "/images/compasshud.png", thumbnail: "/images/compasshud.png" },
    {
      original: "/images/sportshudnight.png",
      thumbnail: "/images/sportshudnight.png",
    },
  ];

  return (
    <div
      id="gallery"
      className={`h-[75vh] w-full flex flex-col col-span-full dark:bg-slate-700`}
    >
      <div className="h-1/5 w-full flex items-center justify-center flex-col">
        <h1 className="text-3xl">Gallery</h1>
        <p className="mt-3 font-light italic">More pictures soon!</p>
      </div>
      {width > 900 ? (
        <>
          <div key={nanoid()} className="h-2/5 w-full flex flex-row">
            {[0, 1, 2].map((i) => {
              return (
                <GalleryPhoto key={nanoid()} imagePath={images[i].original} />
              );
            })}
          </div>
          <div key={nanoid()} className="h-2/5 w-full flex flex-row">
            {[3, 4, 5].map((i) => {
              return (
                <GalleryPhoto key={nanoid()} imagePath={images[i].original} />
              );
            })}
          </div>
        </>
      ) : (
        <div className="h-4/5 w-full">
          <ImageGallery items={images} />;
        </div>
      )}
    </div>
  );
};

export default Gallery;
