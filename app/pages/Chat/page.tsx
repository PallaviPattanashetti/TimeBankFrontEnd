import ChatCard from "@/app/Components/ChatCard";


export default function ChatPage() {
  return (
    <main 
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-4 md:p-6 font-sans"
      style={{ backgroundImage: "url('/assets/TBBackround.jpeg')" }}
    >

      <div className="w-full max-w-[350px] bg-[#5F4F4F]/50 backdrop-blur-md rounded-xl flex items-center justify-center my-6 md:my-8 p-5 border border-white/20 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center">
          Messages
        </h1>
      </div>

     <ChatCard/>


      {/* Footer Quote */}
      <div className="max-w-2xl">
        <p className="text-2xl md:text-4xl mt-10 text-gray-900 text-center font-medium leading-tight">
          "A community is just a collection of shared hours."
        </p>
      </div>
    </main>
  );
}