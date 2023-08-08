import React, { FC, useState } from "react";
import ProfileButton from "./ProfileButton";
import Image from "next/image";
import Profile from "@/types/profile";
import profileFeatures from "@/data/profileFeatures";

interface iState {
  profile: Profile;
}

const Demo: FC = () => {
  const [state, setState] = useState<iState>({ profile: "default" });

  return (
    <div
      className="h-[70vh] w-full flex items-center flex-col col-span-full"
      id="demo"
    >
      <div className="h-1/6 w-full flex items-center justify-center flex-col bg-slate-400">
        <h1 className="text-3xl">Demo</h1>
      </div>
      <div className="h-5/6 w-full flex flex-row row-span-full bg-blue-600">
        <div className="w-1/2 h-full flex items-center justify-center bg-purple-600">
          <div className="h-3/4 w-3/4 flex items-center justify-center dark:bg-slate-800 bg-white rounded-lg shadow-md">
            <ul className="list-desc">
              {profileFeatures
                .filter(({ profile }) => profile === state.profile)[0]
                .features.map((feature) => {
                  return (
                    <li className={`${state.profile !== "sports" && "m-5"}`}>
                      {feature}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center bg-orange-600">
          <Image
            alt="Default HUD"
            src={"/images/test.png"}
            height={800}
            width={500}
          />
        </div>
        <div className="w-1/2 h-full flex flex-col col-span-full items-center">
          <div className="w-full h-1/5 flex items-center justify-center">
            <h1>HUD Profiles</h1>
          </div>
          <ProfileButton
            label="Default"
            onClickHandler={() => setState({ ...state, profile: "default" })}
          />
          <ProfileButton
            label="Sports"
            onClickHandler={() => setState({ ...state, profile: "sports" })}
          />
          <ProfileButton
            label="Chill"
            onClickHandler={() => setState({ ...state, profile: "chill" })}
          />
          <ProfileButton
            label="Off Road"
            onClickHandler={() => setState({ ...state, profile: "offroad" })}
          />
        </div>
      </div>
    </div>
  );
};

export default Demo;