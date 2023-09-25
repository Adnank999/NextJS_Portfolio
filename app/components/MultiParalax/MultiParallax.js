"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MultiParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full overflow-hidden relative grid place-items-center"
    >
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0, transition: { duration: 1 }, }}
       
        whileHover={{ scale: 1.2 }}
        className="head_text text-center z-20 "
      >
        <h1>
          Hi there!
          <br className="max-md:hidden" />
          <span className="red_gradient text-center">I am Adnan</span>
        </h1>
      </motion.div>

      <motion.h1
        style={{ scaleX: textY, scaleY: textY }}
        className="mt-10 py-10 text-center font-serif  blue_gradient font-bold  md:text-9xl text-white relative z-10 "
      >
        A FULLSTACK WEB DEVELOPER
      </motion.h1>

      {/* <motion.div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url(/boy.png)`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          y: backgroundY,
          mixBlendMode: "overlay" 
        }}
      />

       <motion.div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url(/laptop.png)`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          y: backgroundY,
         
        }}
      /> */}

      <video
        autoPlay
        muted
        loop
        playsInline
        src="/Final2.mp4"
        type="video/mp4"
        className="absolute inset-0 w-full h-full object-cover sm:"
      ></video>
    </div>
  );
};

export default MultiParallax;
