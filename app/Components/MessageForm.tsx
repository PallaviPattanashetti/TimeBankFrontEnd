"use client";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const CONTACTS = [
  { id: 1, name: "Ken", status: "Online", avatar: "KM" },
  { id: 2, name: "Jose", status: "Away", avatar: "JM" },
  { id: 3, name: "Jacob", status: "Online", avatar: "JD" },
  { id: 4, name: "Isaiah", status: "Online", avatar: "IM" },
];

export default function ChatInterface() {
  const searchParams = useSearchParams();
  const contactQuery = searchParams.get("contact");
  const [selectedPerson, setSelectedPerson] = useState("Jose");

  const activePerson = useMemo(() => {
    if (!contactQuery) return selectedPerson;
    const found = CONTACTS.find(
      (c) => c.name.toLowerCase() === contactQuery.toLowerCase()
    );
    return found?.name ?? selectedPerson;
  }, [contactQuery, selectedPerson]);

  return (
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-[900px] h-[600px] border border-gray-200 bg-[#28a8af]/40 backdrop-blur-md flex flex-col md:flex-row shadow-xl rounded-2xl overflow-hidden"
    >
      
      <div className="w-full md:w-72 border-b md:border-b-0 md:border-r border-gray-100 bg-white/60 p-4 overflow-y-auto">
        <h2 className="text-gray-500 font-semibold text-xs uppercase tracking-wider mb-4 px-2">
          Contacts
        </h2>
        <div className="flex flex-col gap-1">
          {CONTACTS.map((person) => (
            <motion.button
              key={person.id}
              layout
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedPerson(person.name)}
              className={`p-3 rounded-lg flex items-center gap-3 transition-colors ${
                activePerson === person.name
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-white/50"
              }`}
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs ${
                activePerson === person.name ? "bg-white text-blue-600" : "bg-gray-200 text-gray-500"
              }`}>
                {person.avatar}
              </div>
              <div className="text-left">
                <p className="font-bold text-sm">{person.name}</p>
                <p className="text-[10px] opacity-70">{person.status}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-white/30">
        <div className="p-4 border-b border-gray-100/20 flex items-center gap-3 bg-white/40">
          <motion.div 
            key={activePerson + "status"}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-2 h-2 bg-green-500 rounded-full" 
          />
          <span className="font-bold text-gray-800">{activePerson}</span>
        </div>

        <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePerson}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-4"
            >
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-blue-600 text-white p-3 px-4 rounded-2xl rounded-tr-none self-end max-w-[80%] text-sm shadow-sm"
              >
                Hi {activePerson}! Are you free for a quick chat about the skill swap?
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white text-gray-800 p-3 px-4 rounded-2xl rounded-tl-none self-start max-w-[80%] text-sm shadow-sm"
              >
                Hey! Yes, I&apos;m available. What did you have in mind?
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

      
        <div className="p-4 bg-white/50 border-t border-gray-100/20 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full h-11 px-4 rounded-full border border-gray-200 bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-sm"
            />
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}