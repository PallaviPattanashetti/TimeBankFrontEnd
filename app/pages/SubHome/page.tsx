"use client";

import React from "react";
import { motion } from "framer-motion";
import HomeHelpCard from "@/app/Components/HomeHelpCard";


const homeCardData = [
  { title: "Decor", img: "/assets/Decor.jpeg", slug: "decor" },
  { title: "Cleaning", img: "/assets/cleaning.jpeg", slug: "cleaning" },
  { title: "Organizing / Decluttering", img: "/assets/Homedecor.jpeg", slug: "organizing", path: "/home-help/organizing" },
  { title: "Elder Support", img: "/assets/Eldersupport.jpeg", slug: "elder-support" },
  { title: "Meal Prep", img: "/assets/mealpre.jpeg", slug: "meal-prep" },
  { title: "Grocery Shopping", img: "/assets/Groceryshop.jpeg", slug: "grocery-shopping" },
  { title: "Laundry", img: "/assets/laundry.jpeg", slug: "laundry" },
  { title: "Home Safety Checks", img: "/assets/Home safety.jpeg", slug: "home-safety" },
  { title: "Childcare", img: "/assets/Childcare.jpeg", slug: "childcare" },
];

export default function HomeHelpPage() {
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
     
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-[600px] min-h-[96px] bg-[#5F4F4F]/25 rounded-2xl flex items-center justify-center my-8 p-4 border-2 border-black backdrop-blur-sm shadow-lg"
      >
        <h1 className="text-4xl md:text-[64px] font-extrabold text-black tracking-tight text-center">
          Home Help
        </h1>
      </motion.div>

      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl justify-items-center mb-12"
      >
        {homeCardData.map((item) => (
          <HomeHelpCard 
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
        transition={{ duration: 1.5 }}
      >
        <p className="text-[30px] md:text-[40px] mt-10 text-black text-center font-medium italic">
          &ldquo;Trade skills, gain time, grow together.&rdquo;
        </p>
      </motion.div>
    </div>
  );
}