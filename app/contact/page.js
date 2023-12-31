"use client";
import React, { useEffect } from "react";

import Layout from "../components/Layout";

import Contact from "../components/Contact";

import Canvas3d from "../components/Canvas3d";

const page = () => {
  return (
    <Layout>
      <main className="flex flex-col md:flex-row mt-20">
        <div className="xs:h-60 md:h-screen globe  md:w-1/2 ">
          <Canvas3d />
        </div>

        <div className="w-full md:w-1/2 ">
          <Contact />
        </div>
      </main>
    </Layout>
  );
};

export default page;
