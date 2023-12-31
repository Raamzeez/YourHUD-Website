"use client";

import React, { FC, useState } from "react";
import ProfileButton from "./ProfileButton";
import Image from "next/image";
import Profile from "@/types/profile";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import HUDFeaturesCard from "./HUDFeaturesCard";
import profiles from "@/data/profiles";
import { nanoid } from "nanoid";

interface iState {
  profile: Profile;
}

const Demo: FC = () => {
  const [state, setState] = useState<iState>({ profile: "default" });

  const { height, width } = useWindowDimensions();

  return (
    <div
      className={`${
        width > 1000 && "h-[70vh]"
      } w-full flex items-center flex-col col-span-full  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%`}
      id="demo"
      style={
        width > 600 ? (width > 1000 ? {} : { height: 1000 }) : { height: 1400 }
      }
    >
      <div className="h-1/6 w-full flex items-center justify-center flex-col">
        <h1 className="text-3xl font-montserrat">Demo</h1>
      </div>
      {width > 1000 && (
        <div className={`h-5/6 w-full flex flex-row row-span-full`}>
          <div className={`w-1/3 h-full flex items-center justify-center`}>
            <HUDFeaturesCard profile={state.profile} />
          </div>
          <div className={`w-1/3 h-full flex items-center justify-center`}>
            <Image
              alt="Default HUD"
              src={`/images/${state.profile}huddemo.png`}
              height={800}
              width={500}
            />
          </div>
          <div
            className={`w-1/3 h-full flex flex-col col-span-full items-center`}
          >
            <div className="w-full h-1/5 flex items-center justify-center">
              <h1>HUD Profiles</h1>
            </div>
            {profiles.map(({ title, key }) => {
              return (
                <ProfileButton
                  active={state.profile === key}
                  key={nanoid()}
                  label={title}
                  onClickHandler={() => setState({ ...state, profile: key })}
                />
              );
            })}
          </div>
        </div>
      )}
      {width > 600 && width <= 1000 && (
        <div
          className={`h-5/6 w-full flex flex-col col-span-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%`}
        >
          <div
            className={`h-1/2 w-full flex flex-row row-span-full items-center justify-center`}
          >
            <div className={`w-1/2 h-full flex items-center justify-center`}>
              <HUDFeaturesCard profile={state.profile} />
            </div>
            <div className={`w-1/2 h-full flex items-center justify-center`}>
              <Image
                alt="Default HUD"
                src={`/images/${state.profile}huddemo.png`}
                height={800}
                width={500}
              />
            </div>
          </div>
          <div
            className={`h-1/2 w-full flex flex-col col-span-full items-center`}
          >
            <div className="w-full h-1/5 flex items-center justify-center">
              <h1>HUD Profiles</h1>
            </div>
            {profiles.map(({ title, key }) => {
              return (
                <ProfileButton
                  key={nanoid()}
                  active={state.profile === key}
                  label={title}
                  onClickHandler={() => setState({ ...state, profile: key })}
                />
              );
            })}
          </div>
        </div>
      )}
      {width <= 600 && (
        <div
          className={`h-5/6 w-full flex flex-col col-span-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%`}
        >
          <div className={`w-full h-1/3 flex items-center justify-center`}>
            <HUDFeaturesCard profile={state.profile} />
          </div>
          <div className={`w-full h-1/3 flex items-center justify-center`}>
            <Image
              alt="Default HUD"
              src={`/images/${state.profile}huddemo.png`}
              height={800}
              width={500}
            />
          </div>
          <div
            className={`h-1/3 w-full flex flex-col col-span-full items-center`}
          >
            <div className="w-full h-1/5 flex items-center justify-center">
              <h1>HUD Profiles</h1>
            </div>
            {profiles.map(({ title, key }) => {
              return (
                <ProfileButton
                  active={state.profile === key}
                  key={nanoid()}
                  label={title}
                  onClickHandler={() => setState({ ...state, profile: key })}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Demo;
