"use client";

import { Drawer } from "antd";
import Image from "next/image";
import { useState } from "react";

import { TypeAnimation } from "react-type-animation";
import CrossSvg from "./CrossSvg";

const AboutDrawer = ({ showDrawerComp }) => {
  const [textColor, setTextColor] = useState("rgb(0, 158, 96)");
  const [open, setOpen] = useState(false);
 

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="text-white" onClick={showDrawer}>
        About
      </button>
      <Drawer
        
        style={{
          background:
            "linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))",
           
            
        }}

        
        
        size="large"
        placement="left"
        width={1700}
        title={<span className="xs:text-xl xs:font-bold sm:text-2xl md:text-3xl custom-drawer-header-title">ABOUT ME</span>}
        closable={true}
        closeIcon={<CrossSvg />}
        onClose={onClose}
        open={open}
        headerStyle={{ textAlign: "center" }}
      >
        <div className="xs:flex-col flex-wrap gap 6  xs:justify-center  md:flex gap-8 relative">
          <div className="w-1/5 h-96 ml-10 md:border-4 md:border-yellow-500 ">
            <img
              className="xs:absolute xs:left-4  md:absolute top-6 left-28 object-cover lg:absolute lg:top-6 lg:left-28 "
              src="/Images/Me.jpg"
              alt="Your Image Alt Text"
              width={300} // Set the width of the image as per your requirements
              // Set the height of the image as per your requirements
            />
          </div>

          <div className=" xs:flex-col md:absolute left-60 xs:px-0 sm:px-0 md:px-20 lg:px-30 h-full flex gap-8 py-16">
            <TypeAnimation
              className="xs:ml-4 px-6 md:ml-10  lg:ml-24  text-white tracking-widest font-semibold"
              wrapper="span"
              speed={50}
              style={{
                fontSize: "2em",
                display: "inline-block",
                color: textColor,
              }}
              repeat={Infinity}
              sequence={[
                "I AM A FULLSTACK DEVELOPER",
                1000,
                () => setTextColor("black"),

                "I AM A NETWORK ENGINEER",
                1000,
                "I DESIGN AND CODE BEAUTIFUL THINGS",
                1000,
                "I LOVE WHAT I DO",
                1000,
              ]}
            />

            <p className="xs:ml-0 xs:px-10 md:ml-20 px-16 text-white text-sm tracking-widest font-thin overflow-y-hidden">
              I am always excited to solve real world problems.I am fast and
              continous learner.I always try to be keep updated knowledge with
              existing solution.
            </p>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
export default AboutDrawer;
