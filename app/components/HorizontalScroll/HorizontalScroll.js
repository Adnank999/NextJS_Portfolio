import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "../ProjectCard";

const HorizontalScroll = () => {
  return (
    <div className="bg-black">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden ">
        <motion.div style={{ x }} className="flex gap-8  ">
          {cards.map((card) => {
            return <ProjectCard card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};


export default HorizontalScroll;

const cards = [
  {
    url: "/projects/Dashboard.png",
    title: "Laravel Dashboard",
    id: 1,
    para: "Laravel ecommerce Dashboard made with Filament",
    buttonName: "Show more"
  },
  {
    url: "/projects/2.png",
    title: "Ecommerce Frontend",
    id: 2,
    para: "Frontend of ecommerce using Next js",
    buttonName: "Show more"
  },
  {
    url: "/projects/3.png",
    title: "Blog WebSite Dashboard",
    id: 3,
    para: "Backend Dashboard made in Laravel",
    buttonName: "Show more"
  },
  {
    url: "/projects/7.png",
    title: "AppBizz",
    id: 4,
    para: "Custom Website made in Wordpress Elementor",
    buttonName: "Show more"
  },
  {
    url: "/projects/4.png",
    title: "More AppBizz",
    id: 5,
    para: "Custom Website made in Wordpress Elementor",
    buttonName: "Show more"
  },
  {
    url: "/projects/5.png",
    title: "More AppBizz",
    id: 6,
    para: "Custom Website made in Wordpress Elementor",
    buttonName: "Show more"
  },
 
];