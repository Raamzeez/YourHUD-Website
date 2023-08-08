import ContactFeature from "@/components/ContactFeature";
import Header from "@/components/Header";
import contactFeatures from "@/data/contactFeatures";
import React, { FC } from "react";

const Contact: FC = () => {
  return (
    <>
      <Header />
      <main className="h-[90vh] flex w-full flex-col items-center">
        <h1 className="mt-10 text-3xl">Contact</h1>
        <p className="mt-10 text-blue-500">
          Email: yourhud.communications@gmail.com
        </p>
        <div className="h-96 w-full mt-24 flex flex-row row-span-full">
          {contactFeatures.map(({ icon, title, body }) => {
            return <ContactFeature icon={icon} title={title} body={body} />;
          })}
        </div>
      </main>
    </>
  );
};

export default Contact;
