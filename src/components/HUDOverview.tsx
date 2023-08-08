import React, { FC } from "react";

const HUDOverview: FC = () => {
  return (
    <div className="h-[50vh] dark:bg-slate-800 bg-white w-full flex items-center flex-col col-span-full">
      <div className="w-full row-span-full h-full flex items-center justify-center">
        <div className="flex h-full w-1/2 flex-col col-span-full items-center justify-center">
          <div className="h-1/6 w-full flex items-center justify-center">
            <p className="text-2xl">What is a HUD?</p>
          </div>
          <div className="h-5/6 w-full flex items-center justify-center">
            <p className="w-5/6 text-xl">
              A HUD (Heads Up Display) is a display that projects information
              onto a car's windshield, right in the driver's line of sight. It
              can display information such as speed, gear, and more. HUDs are
              becoming more and more common in modern vehicles, but if you don't
              have one, you can still get the benefits of a HUD with YourHUD.
            </p>
          </div>
        </div>
        <div className="h-full w-1/2 flex items-center justify-center">
          <div className="h-3/4 w-3/4 bg-[url('/images/test.png')] bg-cover shadow rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default HUDOverview;
