import Header from "@/components/Header";
import privacyPolicyData from "@/data/privacyPolicyData";
import { nanoid } from "nanoid";
import React, { FC } from "react";

const Privacy: FC = () => {
  return (
    <>
      <Header />
      <main className="h-[90vh] flex w-full flex-col">
        <div className="h-full w-full flex flex-col bg-white dark:bg-slate-700 justify-center items-center">
          <h1 className="text-4xl font-montserrat">Privacy Policy</h1>
          <div className="mt-20 h-2/3 w-4/5 bg-gray-100 dark:bg-slate-800 shadow-lg rounded overflow-auto leading-7">
            <div className="text-center">
              <p className="text-left m-5 text-blue-500 font-semibold">
                Effective Date: [9/6/23]
              </p>
              {privacyPolicyData.map(({ title, subsections, messages }) => {
                return (
                  <div key={nanoid()}>
                    <h1 className="text-left text-3xl font-bold m-10 font-montserrat">
                      {title}
                    </h1>
                    {subsections ? (
                      <>
                        {subsections.map((subsection, index) => {
                          return (
                            <div key={nanoid()}>
                              <p className="text-left m-10 text-xl font-raleway">
                                {subsection}
                              </p>
                              <p className="text-left ml-20">
                                {messages[index]}
                              </p>
                            </div>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        <p className="text-left m-5">{messages}</p>
                      </>
                    )}
                  </div>
                );
              })}
              <p className="m-5 text-left text-green-500 font-semibold">
                Last updated: [9/10/23]
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Privacy;
