"use client";

import React from "react";
import { motion } from "framer-motion";
import CreativeCard from "@/app/Components/CreativeCard";


const bottomCardData = [
  { title: "Drawing", img: "/assets/drawing.jpeg", slug: "drawing" },
  { title: "Sewing", img: "/assets/sewing.jpeg", slug: "sewing" },
  { title: "Festival decoration", img: "/assets/festdecor.jpeg", slug: "festival-decoration" },
  { title: "Sculpting", img: "/assets/sculpting.jpeg", slug: "sculpting" },
  { title: "DIY ideas", img: "/assets/Diy ideas.jpeg", slug: "diy-ideas" },
  { title: "Simple home décor crafts", img: "/assets/homedecor.jpeg", slug: "home-decor" },
  { title: "Craft project assistance", img: "/assets/craftproject.jpeg", slug: "craft-assistance" },
  { title: "Origami guidance", img: "/assets/origame.jpeg", slug: "origami" },
  { title: "Color palette suggestions", img: "/assets/colorpallet.jpeg", slug: "color-palette" },
];

export default function CreativeHelpPage() {
  const containerVars = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const cardVars = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-6"
      style={{ backgroundImage: "url('/assets/TBBackround.jpeg')" }}
    >
      {/* Header */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-[600px] min-h-[96px] bg-[#5F4F4F]/25 rounded-2xl flex items-center justify-center my-8 p-4 border-2 border-black backdrop-blur-sm"
      >
        <h1 className="text-4xl md:text-[64px] font-extrabold text-black tracking-tight text-center">
          Creative Help
        </h1>
      </motion.div>

   
      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl justify-items-center mb-12"
      >
        {bottomCardData.map((item) => (
          <CreativeCard 
            key={item.title} 
            {...item} 
            variants={cardVars} 
          />
        ))}
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="text-[30px] md:text-[40px] mt-10 text-black text-center italic font-medium">
          &ldquo;Time is not a commodity, it is a gift.&rdquo;
        </p>
      </motion.div>
    </div>
  );
}