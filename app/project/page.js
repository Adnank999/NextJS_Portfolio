"use client";
import React from "react";

import ParallaxCard from "../components/ParallaxCard/ParallaxCard";

import { useRef } from "react";
import HorizontalScroll from "../components/HorizontalScroll/HorizontalScroll";
import Layout from "../components/Layout";

import ProjectAnimatedCard from "../components/ProjectAnimatedCard";
import MyProjectData from "../../data/MyProjectData";

const page = () => {
  return (
      <Layout>
        <main className="h-full">
          <HorizontalScroll/>
         
          <ProjectAnimatedCard items={MyProjectData}/>
        </main>
      </Layout>
  )
};

export default page;
