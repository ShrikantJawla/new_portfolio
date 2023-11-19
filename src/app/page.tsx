import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="w-[100vw] min-h-[100vh] max-w-[1600px] dark:bg-[#000000] m-auto flex justify-center items-center px-[16px] md:px-[40px] lg:px-[80px] xl:px-[140px] py-[10px] md:py-[24px]">
      <section className="w-full min-h-[100vh] flex flex-col gap-[60px]">
        <Navbar />
        <HomeSection />
        {/* Divider */}
        <div className="w-full flex justify-center items-center">
          <div className="w-[85%] h-[1px] bg-[#777777]"></div>
        </div>
        <SkillsSection />
      </section>
    </main>
  );
}
