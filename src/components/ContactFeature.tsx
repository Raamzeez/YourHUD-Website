import contactFeatures from "@/data/contactFeatures";
import iContactFeature from "@/models/contactFeature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

const ContactFeature: FC<iContactFeature> = ({ icon, title, body }) => {
  return (
    <>
      <div className="h-96 w-1/3 flex items-center justify-center">
        <div className="h-96 w-2/3 rounded-md flex flex-col bg-blue-400 shadow-md">
          <div className="h-1/6 w-full flex items-center justify-center">
            <FontAwesomeIcon icon={icon} size={"2xl"} />
          </div>
          <div className="h-1/6 w-full flex items-center justify-center">
            <h1>{title}</h1>
          </div>
          <div className="h-4/6 w-full flex items-center justify-center">
            <p className="w-4/5">{body}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFeature;
