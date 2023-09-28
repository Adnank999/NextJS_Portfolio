"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import MultiParallax from "./components/MultiParalax/MultiParallax";
import { MyData } from "./components/MyData";
import DownloadCV from "./components/DownloadCV";
import TechnologySvg from "./components/TechnologySvg";
import TimeLine from "./components/TimeLine";
import Layout from "./components/Layout";

import "./styles/global.css";


export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Layout>
      <main className="w-full flex justify-center flex-col bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-900 ">
        <MultiParallax />

        <div className="xs:m-2 p-2 xs:flex flex-col items-start md:flex md:items-baseline lg:flex lg:items-baseline">
          <div className="xs:p-2 xs:m-4 xs:text-xs xs:tracking-widest md:p-6 md:text-md lg:p-10 m-10 flex flex-col gap-5 lg:text-xl">
            <h1 className="text-white text-3xl tracking-wide font-voga font-semi-bold ">
              {MyData.title}
            </h1>
            <p className="text-white text-md font-luxia tracking-wide ">
              {MyData.description}
            </p>
          </div>

          <DownloadCV />
        </div>

        <div className="xs:mt-20 text-center lg:mt-10">
          <TimeLine />
        </div>

        <TechnologySvg />

        
      </main>
    </Layout>
  );
}
