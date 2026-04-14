import { Suspense } from "react";
import * as motion from "framer-motion/client";

import MessageForm from "@/app/Components/MessageForm";


export default function ChatPage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-4 md:p-6 font-sans"
      style={{ backgroundImage: "url('/assets/TBBackround.jpeg')" }}
    >
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-[350px] bg-[#5F4F4F]/50 rounded-xl flex items-center justify-center my-6 md:my-8 p-5 border border-gray-200 shadow-sm"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center">
          Messages
        </h1>
      </motion.div>

      <Suspense fallback={<div className="h-[600px] w-full max-w-[900px] bg-white/20 animate-pulse rounded-2xl" />}>
        <MessageForm />
      </Suspense>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-[32px] md:text-[40px] mt-10 text-gray-900 text-center font-light italic leading-tight">
          &ldquo;A community is just a collection of shared hours.&rdquo;
        </p>
      </motion.div>
    </main>
  );
}