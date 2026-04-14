"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TransactionForm() {
  const [amount, setAmount] = useState(0.0);
  const balance = 120.0;

  const handleIncrement = () => setAmount((prev) => prev + 1);
  const handleDecrement = () => setAmount((prev) => (prev > 0 ? prev - 1 : 0));

  
  const containerVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 } 
    }
  };

  const itemVars = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      variants={containerVars}
      initial="hidden"
      animate="visible"
      className="w-full max-w-[850px] min-h-[540px] border-[6px] md:border-[10px] border-black bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center py-6 px-4 md:py-8 gap-4 shadow-2xl rounded-lg relative"
    >
      <div className="w-full max-w-[616px] flex flex-col gap-4 px-2">
        
       
        <motion.div variants={itemVars} className="flex flex-col gap-1">
          <label className="text-black font-bold ml-1">From</label>
          <div className="w-full h-14 bg-white/80 border-2 border-black flex items-center px-4 rounded-lg cursor-pointer hover:bg-white transition-colors">
            <span className="text-gray-500 italic">Select sender...</span>
          </div>
        </motion.div>

       
        <motion.div variants={itemVars} className="flex flex-col gap-1">
          <label className="text-black font-bold ml-1">To</label>
          <div className="w-full h-14 bg-white/80 border-2 border-black flex items-center px-4 rounded-lg cursor-pointer hover:bg-white transition-colors">
            <span className="text-gray-500 italic">Select recipient...</span>
          </div>
        </motion.div>

       
        <motion.div variants={itemVars} className="flex flex-col gap-1">
          <label className="text-black font-bold ml-1">Amount</label>
          <div className="w-full h-16 bg-white border-2 border-black flex items-center justify-between px-4 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3">
              <motion.span 
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-yellow-400 text-2xl"
              >
                ★
              </motion.span>
              <AnimatePresence mode="wait">
                <motion.span 
                  key={amount}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-xl font-black text-black"
                >
                  {amount.toFixed(2)}
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="flex items-center gap-6 font-bold text-2xl">
              <button onClick={handleDecrement} className="text-red-600 active:scale-75 transition-transform"> − </button>
              <button onClick={handleIncrement} className="text-green-600 active:scale-75 transition-transform"> + </button>
            </div>
          </div>
        </motion.div>

      
        <motion.div variants={itemVars} className="w-full flex justify-end">
          <div className="h-12 flex items-center px-4 bg-yellow-100 text-black rounded-lg font-mono border-2 border-black font-bold">
            Balance Left: {(balance - amount).toFixed(2)}
          </div>
        </motion.div>

       
        <motion.button 
          variants={itemVars}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)", x: 4, y: 4 }}
          className="mt-4 w-full h-16 bg-[#5F4F4F] text-white font-bold rounded-xl border-2 border-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors"
        >
          Transfer Credits
        </motion.button>
      </div>
    </motion.div>
  );
}