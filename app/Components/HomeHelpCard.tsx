"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface HomeHelpCardProps {
  title: string;
  img: string;
  slug: string;
  path?: string;
  variants: any;
}

export default function HomeHelpCard({ title, img, slug, path, variants }: HomeHelpCardProps) {
  const router = useRouter();

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="w-full max-w-[280px] min-h-[380px] bg-[#F4F4F4]/70 border-2 rounded-2xl border-black flex flex-col overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
    >
      <div className="w-full h-44 border-b-2 border-black overflow-hidden relative">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-5 flex flex-col items-center grow justify-between">
        <div className="w-full text-center">
          <h5 className="text-xl font-black text-black mb-2 uppercase tracking-tighter leading-tight">
            {title}
          </h5>
        </div>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const destination = path || `/home-help/${slug}`;
            router.push(destination);
          }}
          className="w-full max-w-[180px] py-3 border-2 border-black bg-[#6F7887]/80 rounded-xl text-black font-bold text-[18px] transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        >
          Click Here
        </motion.button>
      </div>
    </motion.div>
  );
}