import React from "react";
import { motion } from "framer-motion";
import ClientCard from "../../Cards/ClientCard/ClientCard";

const MarqueeItem = ({ data, from, to }) => {
  return (
    <div className="flex My-Gradient overflow-x-hidden">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 gap-10"
      >
        {/* {data.map((image, index) => {
          return <ClientCard />;
        })} */}

        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        
        {/* {images.map((image, index) => {
          return <img className="h-40 w-56 pr-20" src={image} key={index} />;
        })} */}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 gap-10"
      >
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        {/* {data.map((image, index) => {
          return <ClientCard />;
        })} */}
        {/* {images.map((image, index) => {
          return <img className="h-40 w-56 pr-20" src={image} key={index} />;
        })} */}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
