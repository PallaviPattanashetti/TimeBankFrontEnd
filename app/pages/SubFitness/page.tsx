"use client";

import React from "react";
import { motion } from "framer-motion";
import FitnessCard from "@/app/Components/FitnessCard";


const fitnessData = [
  { title: "Aerobic", img: "/assets/aerobic.jpeg", slug: "aerobic" },
  { title: "Zumba", img: "/assets/Zumba.jpeg", slug: "zumba" },
  { title: "Partner Workouts", img: "/assets/partnerworkout.jpeg", slug: "partner-workouts" },
  { title: "Yoga Basics", img: "/assets/Yoga.jpeg", slug: "yoga-basics" },
  { title: "Simple Home Exercises", img: "/assets/he.jpeg", slug: "home-exercises" },
  { title: "Nature Trail Walks", img: "/assets/naturewalk.jpeg", slug: "nature-walks" },
  { title: "Dance-Based-Cardio", img: "/assets/dancecardio.jpeg", slug: "dance-cardio" },
  { title: "Walking Group", img: "/assets/walking group.jpeg", slug: "walking-group" },
  { title: "Jump-Rope Basics", img: "/assets/jump-rope.jpeg", slug: "jump-rope" },
];

export default function FitnessHelpPage() {
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
          Fitness Help
        </h1>
      </motion.div>

     
      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl justify-items-center mb-12"
      >
        {fitnessData.map((item) => (
          <FitnessCard 
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