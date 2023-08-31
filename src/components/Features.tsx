import React, { FC } from "react";
import Feature from "./Feature";
import features from "@/data/features";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { nanoid } from "nanoid";

const Features: FC = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div
      id="features"
      className="h-[70vh] w-full flex items-center flex-col col-span-full bg-gradient-to-r from-purple-300 to-pink-300 dark:from-cyan-500 dark:to-blue-600"
      style={{ minHeight: 600 }}
    >
      <div className="h-1/4 w-full flex items-center justify-center flex-col">
        <h1 className="text-3xl mt-10 font-montserrat">Features</h1>
        <p className="mt-5 w-4/5 text-center font-montserrat">
          Simple open our app, place your phone horizontally on the dashboard of
          your car, and enjoy all the features below
        </p>
      </div>
      <div className="h-3/4 w-full flex flex-col items-center justify-center">
        <div className="h-1/2 w-full flex flex-row row-span-full">
          {[0, 1, 2, 3].map((index) => {
            return (
              <Feature
                key={nanoid()}
                icon={features[index].icon}
                title={`${
                  width > 640
                    ? features[index].title
                    : features[index].smallTitle
                }`}
              />
            );
          })}
        </div>
        <div className="h-1/2 w-full flex flex-row row-span-full">
          {[4, 5, 6, 7].map((index) => {
            return (
              <Feature
                key={nanoid()}
                icon={features[index].icon}
                title={`${
                  width > 640
                    ? features[index].title
                    : features[index].smallTitle
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
