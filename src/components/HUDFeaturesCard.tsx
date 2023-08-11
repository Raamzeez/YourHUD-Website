import profileFeatures from "@/data/profileFeatures";
import Profile from "@/types/profile";
import { nanoid } from "nanoid";
import React, { FC } from "react";

interface iProps {
  profile: Profile;
}

const HUDFeaturesCard: FC<iProps> = ({ profile }) => {
  return (
    <div className="h-3/4 w-3/4 flex items-center justify-center dark:bg-slate-800 bg-white rounded-lg shadow-md">
      <ul className="list-desc">
        {profileFeatures
          .filter((profileFeature) => profileFeature.profile === profile)[0]
          .features.map((feature) => {
            return (
              <li className={`${profile !== "sports" && "m-5"}`} key={nanoid()}>
                {feature}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default HUDFeaturesCard;
