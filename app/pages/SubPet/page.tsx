"use client";

import React from "react";
import { motion } from "framer-motion";
import PetCard from "@/app/Components/PetCard";


const petCardData = [
  { title: "Vet Visits", img: "/assets/Vet visits.jpeg", slug: "vet-visits" },
  { title: "Pet Playdate", img: "/assets/Pet Playdate.jpeg", slug: "pet-playdate" },
  { title: "Litter/Cage Cleaning", img: "/assets/Cage.jpeg", slug: "cleaning" },
  { title: "Grooming", img: "/assets/Grooming.jpeg", slug: "grooming" },
  { title: "Dog Walking", img: "/assets/Dog Walking.jpeg", slug: "dog-walking" },
  { title: "Pet Sitting", img: "/assets/Pet Sitting.jpeg", slug: "pet-sitting" },
  { title: "Feeding", img: "/assets/Feeding.jpeg", slug: "feeding" },
  { title: "Light Bathing", img: "/assets/Light bathing.jpeg", slug: "bathing" },
  { title: "Car Ride Assistance", img: "/assets/seasonal cleanup.jpeg", slug: "transport" },
];

export default function PetHelpPage() {
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
          Pet Help
        </h1>
      </motion.div>

      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl justify-items-center mb-12"
      >
        {petCardData.map((item) => (
          <PetCard 
            key={item.title} 
            {...item} 
            variants={cardVars} 
          />
        ))}
      </motion.div>

      {/* Footer Section */}
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