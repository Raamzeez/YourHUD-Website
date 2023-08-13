"use client";

import ContactFeature from "@/components/ContactFeature";
import Header from "@/components/Header";
import contactFeatures from "@/data/contactFeatures";
import React, { FC } from "react";
import { nanoid } from "nanoid";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const Contact: FC = () => {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <Header />
      <main
        className="h-[90vh] flex w-full flex-col items-center bg-white dark:bg-slate-800"
        style={{ minHeight: 600 }}
      >
        <h1 className="mt-10 text-3xl">Contact</h1>
        <a
          href="mailto:yourhud.communications@gmail.com"
          target="_blank"
          className="text-center mt-5 text-blue-500 hover:underline"
        >
          Email: yourhud.communications@gmail.com
        </a>
        <div
          className={`${width > 640 ? "h-96" : "h-full"} w-full mt-24 flex ${
            width > 640 ? "flex-row" : "flex-col"
          } ${
            width > 640
              ? "row-span-full"
              : "col-span-full items-center justify-center"
          }`}
        >
          {contactFeatures.map(({ icon, title, body }) => {
            return (
              <ContactFeature
                icon={icon}
                title={title}
                body={body}
                key={nanoid()}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Contact;
