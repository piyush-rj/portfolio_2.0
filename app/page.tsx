import HomeMain from "@/src/components/HomeMain";

export default function Home() {
  return (
    <div className="h-full max-w-screen pt-30 md:pt-40 flex justify-center bg-[#141414] select-none custom-scrollbar relative">
      <div className="fixed top-0 left-0 w-full h-[50px] z-50 pointer-events-none bg-gradient-to-b from-[#141414]/70 via-[#141414]/40 to-transparent backdrop-blur-[4px] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-[#141414]/40 before:to-transparent before:pointer-events-none">
      </div>

      <HomeMain />
    </div>
  );
}
