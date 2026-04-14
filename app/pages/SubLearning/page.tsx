"use client";

import React from "react";
import { motion } from "framer-motion";
import LearningCard from "@/app/Components/LearningCard";


const learningData = [
  { title: "Computer", img: "/assets/Computer.jpeg", slug: "computer-skills" },
  { title: "Caption Writing", img: "/assets/caption write.png", slug: "caption-writing" },
  { title: "Communication", img: "/assets/communications.jpeg", slug: "communication" },
  { title: "Kids Tutoring", img: "/assets/kidstutor.jpeg", slug: "kids-tutoring" },
  { title: "Speech Writing", img: "/assets/speech.jpeg", slug: "speech-writing" },
  { title: "Reading Buddy", img: "/assets/readingbuddy.jpeg", slug: "reading-buddy" },
  { title: "Creative Writing", img: "/assets/caption write.png", slug: "creative-writing" }, 
  { title: "Homework Help", img: "/assets/homework .jpeg", slug: "homework-help" },
  { title: "Resume or Bio Polishing", img: "/assets/resume.jpeg", slug: "resume-polishing" },
];

export default function LearningHelpPage() {
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
        className="w-full max-w-[600px] min-h-[96px] bg-[#5F4F4F]/25 rounded-2xl flex items-center justify-center my-8 p-4 border-2 border-black backdrop-blur-sm"
      >
        <h1 className="text-4xl md:text-[64px] font-extrabold text-black tracking-tight text-center">
          Learning Help
        </h1>
      </motion.div>

     
      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl justify-items-center mb-12"
      >
        {learningData.map((item) => (
          <LearningCard 
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
        transition={{ duration: 1 }}
      >
        <p className="text-[30px] md:text-[40px] mt-10 text-black text-center italic font-medium">
          &ldquo;Redefining wealth, one hour at a time.&rdquo;
        </p>
      </motion.div>
    </div>
  );
}