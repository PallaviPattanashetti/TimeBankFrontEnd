"use client";

import React from "react";
import { motion } from "framer-motion";
import GardenCard from "@/app/Components/GardenCard";
import { NavLinks } from "@/app/Components/NavLinks";


const gardenData = [
  { title: "Watering", img: "/assets/watering.jpeg", slug: "watering" },
  { title: "Weeding", img: "/assets/weeding.jpeg", slug: "weeding" },
  { title: "Harvesting Veggies/Herbs", img: "/assets/harvesting.jpeg", slug: "harvesting" },
  { title: "Plantation", img: "/assets/plantation.jpeg", slug: "plantation" },
  { title: "Soil Turning", img: "/assets/soilturning.jpeg", slug: "soil-turning" },
  { title: "Fertilizing", img: "/assets/fertilizing.jpeg", slug: "fertilizing" },
  { title: "Trimming Small Plants", img: "/assets/trimming plants.jpeg", slug: "trimming" },
  { title: "Light Yard Tidying", img: "/assets/Light yard.jpeg", slug: "yard-tidying" },
  { title: "Seasonal Cleanup", img: "/assets/seasonal cleanup.jpeg", slug: "seasonal-cleanup" },
];

export default function GardenHelpPage() {
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
      <NavLinks/>
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-[600px] min-h-[96px] bg-[#5F4F4F]/25 rounded-2xl flex items-center justify-center my-8 p-4 border-2 border-black backdrop-blur-sm"
      >
        <h1 className="text-4xl md:text-[64px] font-extrabold text-black tracking-tight text-center">
          Garden Help
        </h1>
      </motion.div>

    
      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl justify-items-center mb-12"
      >
        {gardenData.map((item) => (
          <GardenCard 
            key={item.title} 
            {...item} 
            variants={cardVars} 
          />
        ))}
      </motion.div>

      {/* Footer Quote */}
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