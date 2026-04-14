"use client";

import CreditForm from "@/app/Components/CreditForm";
import { motion } from "framer-motion";


export default function HelpSection() {
  return (
    <main
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-4 md:p-6 overflow-x-hidden"
      style={{ backgroundImage: "url('/assets/TBBackround.jpeg')" }}
    >
   
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[350px] bg-[#5F4F4F]/50 backdrop-blur-md rounded-xl flex items-center justify-center my-6 md:my-8 p-5 border border-white/20 shadow-sm"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center">
          Transfer Credits
        </h1>
      </motion.div>

      <CreditForm/>

     
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex justify-center max-w-4xl"
      >
        <p className="text-[30px] md:text-[40px] mt-10 text-black text-center italic font-medium leading-tight">
          &ldquo;Redefining wealth, one hour at a time.&rdquo;
        </p>
      </motion.div>
    </main>
  );
}