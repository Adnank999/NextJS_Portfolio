"use client";
import React, { useState } from "react";
import { Button, Drawer } from "antd";
import Link from "next/link";
import AboutDrawer from "./AboutDrawer";

import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";
import MobileSVG from "./MobileSVG";
import CrossSvg from "./CrossSvg";

const MobileDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  
  return (
    <div>
      <Button className="border-none" onClick={showDrawer}>
        <MobileSVG />
      </Button>
      <Drawer
        title={<span className="custom-menu-drawer-header-title">Menu</span>}
        placement="right"
        size="large"
        closable={true}
        closeIcon={<CrossSvg />}
        onClose={onClose}
        open={open}
        style={{
          background:
            "linear-gradient(to right, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39))",
        
        }}
     
        headerStyle={{ textAlign: "center" }}
      >
        <ul className="flex flex-col space-y-4 items-center  py-6">
          <li>
            <Link
              href="/"
              className="text-white text-xl font-voga font-bold tracking-widest rainbow-effect-bg rainbow-effect"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/project"
              className="text-white text-xl font-voga font-bold tracking-widest rainbow-effect-bg rainbow-effect"
            >
              Projects
            </Link>
          </li>
          <li className="text-white text-xl font-voga font-bold tracking-widest rainbow-effect-bg rainbow-effect">
            <AboutDrawer />
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white text-xl font-voga font-bold tracking-widest rainbow-effect-bg rainbow-effect"
            >
              Contact
            </Link>
          </li>
        </ul>
      </Drawer>
    </div>
  );
};

export default MobileDrawer;
