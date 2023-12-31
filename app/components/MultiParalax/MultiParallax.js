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
        animate={{ x: 0, transition: { duration: 1 } }}
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

      <video
        autoPlay
        muted
        loop
        playsInline
        src="https://res.cloudinary.com/dtivxbmxa/video/upload/f_auto:video,q_auto/lybet4td44bodxycgmtw"
        type="video/mp4"
        className="absolute inset-0 w-full h-full object-cover sm:"
      />
    </div>
  );
};

export default MultiParallax;
