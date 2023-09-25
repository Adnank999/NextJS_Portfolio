"use client";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import ParallaxCard from "../components/ParallaxCard/ParallaxCard";

import { useRef } from "react";
import HorizontalScroll from "../components/HorizontalScroll/HorizontalScroll";
import Layout from "../components/Layout";

const page = () => {
  return (
      <Layout>
        <main>
          <HorizontalScroll/>
        </main>
      </Layout>
  )
};

export default page;
