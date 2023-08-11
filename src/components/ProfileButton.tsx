import { profile } from "console";
import React, { FC } from "react";

interface iProps {
  label: string;
  onClickHandler: () => void;
}

const ProfileButton: FC<iProps> = ({ label, onClickHandler }) => {
  return (
    <div className="w-full h-1/5 flex items-center justify-center">
      <div
        onClick={onClickHandler}
        className="h-2/4 w-1/2 bg-white dark:bg-slate-600 hover:bg-blue-400 dark:hover:bg-blue-700 rounded-lg flex relative items-center justify-center cursor-pointer hover:shadow-lg hover:ml-5 duration-200"
      >
        <h1 className="text-md">{label}</h1>
      </div>
    </div>
  );
};

export default ProfileButton;
