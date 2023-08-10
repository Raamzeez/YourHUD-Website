import contactFeatures from "@/data/contactFeatures";
import iContactFeature from "@/models/contactFeature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

const ContactFeature: FC<iContactFeature & { className?: string }> = ({
  icon,
  title,
  body,
  className,
}) => {
  return (
    <>
      <div
        className={`h-96 w-1/3 flex items-center justify-center animate__animated animate__fadeIn animate__slow ${className}`}
      >
        <div className="h-4/5 w-2/3 rounded-md flex flex-col bg-gradient-to-r from-cyan-300 dark:from-cyan-600 to-blue-400 dark:to-blue-600 shadow-lg">
          <div className="h-2/6 w-full flex items-center justify-center">
            <FontAwesomeIcon icon={icon} size={"2xl"} />
          </div>
          <div className="h-1/6 w-full flex items-center justify-center">
            <h1>{title}</h1>
          </div>
          <div className="h-3/6 w-full flex items-center justify-center">
            <p className="w-4/5">{body}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFeature;
