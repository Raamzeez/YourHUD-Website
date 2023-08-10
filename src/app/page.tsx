"use client";

import React, { FC } from "react";
import Header from "@/components/Header";
import Features from "@/components/Features";
import Jumbotron from "@/components/Jumbotron";
import HUDOverview from "@/components/HUDOverview";
import Demo from "@/components/Demo";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

const Home: FC = () => {
  return (
    <>
      <Header />
      <main className="flex w-full flex-col">
        <Jumbotron />
        <HUDOverview />
        <Features />
        <Gallery />
        <Demo />
      </main>
      <Footer />
    </>
  );
};

export default Home;
