"use client";
import { motion } from "framer-motion";

interface HelpCardProps {
  title: string;
  img: string;
  path: string;
  helpType: "get" | "offer" | null;
  onNavigate: (path: string) => void;
}

export const HelpCard = ({ title, img, path, helpType, onNavigate }: HelpCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: helpType ? 1 : 0.3 }}
      className={`w-75 h-108 bg-[#F4F4F4]/50 border-2 rounded-2xl border-black flex flex-col transition-all overflow-hidden ${
        !helpType ? "grayscale pointer-events-none" : ""
      }`}
    >
      
      <div className="w-full h-51.5 border-b-2 border-black overflow-hidden bg-white">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col items-center justify-between grow">
        <h5 className="text-xl font-bold text-gray-900 text-center uppercase">
          {title}
        </h5>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate(path)}
          className={`w-47.5 h-15 border-[3px] border-black rounded-2xl text-black font-bold text-[36px] flex items-center justify-center transition-colors ${
            helpType === "get" ? "bg-blue-400 hover:bg-blue-500" : "bg-green-400 hover:bg-green-500"
          }`}
        >
          Click
        </motion.button>
      </div>
    </motion.div>
  );
};