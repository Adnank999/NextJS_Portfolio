"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "./WorkIcon";
import Graduate from "./Graduate";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TimeLine = () => {
  const ref = useRef(null);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-20">
      <h1 className="text-2xl font-bold text-white">
        My Experience Over these years
      </h1>

      <VerticalTimeline lineColor="#000000">
        <motion.div
          ref={ref}
          initial={{ x: -150 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
        >
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(0, 168, 107)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            date="2023-Present"
            iconStyle={{ background: "rgba(0, 168, 107)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              FullStack Web Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Dhaka,Bangladesh
            </h4>
            <p>
              Software engineer, User Experience, Visual Design, Project
              Management,Team member
            </p>
          </VerticalTimelineElement>
        </motion.div>

       


        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(220, 20, 60)", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(33, 150, 243)",
          }}
          date="2020-2022"
          iconStyle={{ background: "rgb(220, 20, 60)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">IT support</h3>
          <h4 className="vertical-timeline-element-subtitle">InfoSys</h4>
          <h4 className="vertical-timeline-element-subtitle">Bremen,Germany</h4>
          <p>
            IT support,solving IT related issues,Cisco router,deployed
            SDWAN,manage Firewall and switches,setup Clients Workstation
          </p>
        </VerticalTimelineElement>
        

        <motion.div
          ref={ref}
          initial={{ x: -150 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
        >
            <VerticalTimelineElement
              visible={true}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(255, 191, 0)",
                color: "#000000",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2020 - 2022"
              iconStyle={{ background: "rgb(255, 191, 0)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Working Student
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Deutsche Post
              </h4>
              <h4 className="vertical-timeline-element-subtitle">
                Bremen,Germany
              </h4>
              <p>Sorting Parcels,handling Container,manage work</p>
            </VerticalTimelineElement>
          </motion.div>

          
            <VerticalTimelineElement
              visible={true}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgba(0, 128, 254)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2015-2019"
              iconStyle={{ background: "rgba(0, 128, 254)", color: "#fff" }}
              icon={<Graduate />}
            >
              <h3 className="vertical-timeline-element-title">
                B.sc in Electronics and Telecommunication Engineering
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Daffodil International University
              </h4>
              <p>Successfully completed my B.sc 3.5 out of 4</p>
            </VerticalTimelineElement>
          
      </VerticalTimeline>
    </div>
  );
};

export default TimeLine;
