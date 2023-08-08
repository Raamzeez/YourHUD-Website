import Header from "@/components/Header";
import React, { FC } from "react";

const Privacy: FC = () => {
  return (
    <>
      <Header />
      <main className="h-[90vh] flex w-full flex-col">
        <div className="h-full w-full flex flex-col bg-white dark:bg-slate-700 justify-center items-center">
          <h1 className="text-4xl">Privacy Policy</h1>
          <div className="mt-20 h-2/3 w-2/3 bg-white dark:bg-slate-800 rounded overflow-auto leading-7">
            <p>Privacy Policy for YourHUD iOS App</p>
            <p>Effective Date: [9/6/23]</p>
            <p>
              Introduction Welcome to YourHUD. We are committed to protecting
              your privacy and ensuring the security of your personal
              information. This Privacy Policy outlines how we collect, use,
              disclose, and safeguard the data we collect from users of the
              YourHUD. By accessing or using the app, you agree to the practices
              described in this Privacy Policy. If you do not agree with the
              terms of this Privacy Policy, please do not use the app.
            </p>
            <p>
              Information We Collect 2.1 Location Data YourHUD collects and uses
              your device's location data only with your explicit permission.
              The app requests access to your location in order to provide
              location-based features such as HUD (Heads-Up Display)
              functionality, such as to display your speed and weather
              information. This data is used solely for the purpose of enhancing
              the functionality of the app and is not stored or shared with any
              third parties.
            </p>
            <p>
              2.2 Miscellaneous Data In addition to location data, the app may
              collect certain user preferences and settings to enhance your
              experience. This may include preferences related to display
              settings, theme choices, and other customizable options within the
              app.
            </p>
            <p>
              How We Use Your Information 3.1 Location Data The location data
              collected by YourHUD is used solely for the purpose of providing
              the HUD functionality and enhancing your experience within the
              app. We do not use your location data for any other purpose, nor
              do we share it with third parties.
            </p>
            <p>
              Miscellaneous Data The miscellaneous data collected, such as user
              preferences and settings, is used to customize the app's interface
              and functionality to align with your preferences. This data is
              stored locally on your device and is not transmitted to our
              servers or shared with third parties. Data Retention YourHUD
              retains your location data and miscellaneous data only for the
              duration necessary to fulfill the purposes outlined in this
              Privacy Policy. Location data is stored temporarily and is not
              used for any tracking purposes beyond providing the HUD
              functionality. Changes to this Privacy Policy We may update this
              Privacy Policy from time to time. We will notify you of any
              changes by updating the "Effective Date" at the top of this
              policy. We encourage you to review this Privacy Policy
              periodically to stay informed about our data practices. Contact Us
              If you have any questions or concerns about this Privacy Policy or
              the data practices of YourHUD, please contact us at
              yourhud.communications@gmail.com By using the YourHUD App, you
              signify your acceptance of this Privacy Policy. If you do not
              agree to this policy, please do not use the app.
            </p>
            <p>Last updated: [9/6/23]</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Privacy;
