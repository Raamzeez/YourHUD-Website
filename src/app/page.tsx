"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faCar,
  faClock,
  faCloudSun,
  faCompass,
  faCrosshairs,
  faGauge,
  faMap,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import Feature from "../components/Feature";
import ProfileButton from "@/components/ProfileButton";
import Profile from "@/types/profile";
import profileFeatures from "@/data/profileFeatures";
import Header from "@/components/Header";
import Features from "@/components/Features";
import Jumbotron from "@/components/Jumbotron";
import HUDOverview from "@/components/HUDOverview";
import Demo from "@/components/Demo";

const Home: FC = () => {
  return (
    <>
      <Header />
      <main className="flex w-full flex-col">
        <Jumbotron />
        <HUDOverview />
        <Features />
        <Demo />
      </main>
    </>
  );
};

export default Home;
