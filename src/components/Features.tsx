import React, { FC } from "react";
import Feature from "./Feature";
import {
  faArrowsRotate,
  faCar,
  faClock,
  faCloudSun,
  faCompass,
  faCrosshairs,
  faGauge,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const Features: FC = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div
      id="features"
      className="h-[70vh] w-full flex items-center flex-col col-span-full bg-gradient-to-r from-purple-300 to-pink-300 dark:from-cyan-500 dark:to-blue-600"
    >
      <div className="h-1/4 w-full flex items-center justify-center flex-col">
        <h1 className="text-3xl mt-5">Features</h1>
        <p className="mt-5 w-4/5 text-center">
          Simple open our app, place your phone horizontally on the dashboard of
          your car, and enjoy all the features below
        </p>
      </div>
      <div className="h-3/4 w-full flex flex-col items-center justify-center">
        <div className="h-1/2 w-full flex flex-row row-span-full">
          <Feature icon={faGauge} title="Speedometer" />
          <Feature icon={faCloudSun} title="Weather" />
          <Feature
            icon={faCompass}
            title={width > 640 ? "Heading & Compass" : "Compass"}
          />
          <Feature icon={faMapPin} title="Coordinates" />
        </div>
        <div className="h-1/2 w-full flex flex-row row-span-full">
          <Feature
            icon={faCrosshairs}
            title={width > 640 ? "G-Force Gauge" : "G-Force"}
          />
          <Feature
            icon={faArrowsRotate}
            title={width > 640 ? "Pitch & Roll Readings" : "Pitch & Roll"}
          />
          <Feature icon={faClock} title="Clock" />
          <Feature icon={faCar} title={width > 640 ? "Car Logo" : "Logo"} />
        </div>
      </div>
    </div>
  );
};

export default Features;
