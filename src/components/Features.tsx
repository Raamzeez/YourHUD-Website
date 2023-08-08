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

const Features: FC = () => {
  return (
    <div
      id="features"
      className="h-[70vh] w-full flex items-center flex-col col-span-full bg-gradient-to-r from-purple-300 to-pink-300 dark:from-cyan-500 dark:to-blue-600"
    >
      <div className="h-1/4 w-full flex items-center justify-center flex-col">
        <h1 className="text-3xl">Features</h1>
        <p className="mt-5">
          Simple open our app, place your phone horizontally on the dashboard of
          your car, and enjoy all the features below
        </p>
      </div>
      <div className="h-3/4 w-full flex flex-col items-center justify-center">
        <div className="h-1/2 w-full flex flex-row row-span-full">
          <Feature icon={faGauge} title="Speedometer" />
          <div className="h-full w-1/4 flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faCloudSun} size={"3x"} />
            <h1 className="mt-5 font-medium">Weather</h1>
          </div>
          <div className="h-full w-1/4 flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faCompass} size={"3x"} />
            <h1 className="mt-5 font-medium">Heading & Compass</h1>
          </div>
          <div className="h-full w-1/4 flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faMapPin} size={"3x"} />
            <h1 className="mt-5 font-medium">Coordinates</h1>
          </div>
        </div>
        <div className="h-1/2 w-full flex flex-row row-span-full">
          <div className="h-full w-1/4 flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faCrosshairs} size={"3x"} />
            <h1 className="mt-5 font-medium">G-Force Gauge</h1>
          </div>
          <div className="h-full w-1/4 flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faArrowsRotate} size={"3x"} />
            <h1 className="mt-5 font-medium">Pitch & Yaw Readings</h1>
          </div>
          <div className="h-full w-1/4 flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faClock} size={"3x"} />
            <h1 className="mt-5 font-medium">Clock</h1>
          </div>
          <div className="h-full w-1/4 flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faCar} size={"3x"} />
            <h1 className="mt-5 font-medium">Car Logo</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
