import { cn } from "../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Children, ReactNode, useState } from "react";
import ButtonMoving from "./ButtonMoving";
import SwiperShowProject from "./SwiperShowProject";
import { Button, Modal } from "antd";

const ProjectAnimatedCard = ({
  items,
  className,
}: {
  items: {
    id:number;
    title: string;
    image: any;
    description: string;
    link: string;
    otherImages: any;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showSwiper, setShowSwiper] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);

  const showModal = (images) => {
    setCurrentImages(images);
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

 

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.id}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div onClick={() => showModal(item.otherImages)} className=" flex flex-col justify-center items-center gap-2">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-[300px]"
              />

              <ButtonMoving
                itemLink={item.link}
                borderRadius="1.75rem"
                className="text-white text-lg font-bold"
              >
                Live Preview
              </ButtonMoving>
            </div>
            <Modal
             
             
              open={open}
              onOk={handleOk}
              onCancel={handleCancel}
              width="100vw"
              style={{ top: 0, padding: 0}}
              // bodyStyle={{
              //   overflow: "auto",
              //   height: "calc(100vh - 108px)",
               
              // }}
              
              footer={[
                <Button key="back" onClick={handleCancel} style={{ color: 'black' }}>
                  Cancel
                </Button>,
                <Button key="submit" type="primary" onClick={handleCancel} style={{ color: 'black' }}>
                  OK
                </Button>,
              ]}
            >
              <SwiperShowProject images={currentImages}/>
            </Modal>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 ",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export default ProjectAnimatedCard;
