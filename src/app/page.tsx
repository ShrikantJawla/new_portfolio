import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="w-[100vw] min-h-[100vh] dark:bg-[#000000] m-auto flex justify-center items-center ">
      <section className="w-full min-h-[100vh] flex flex-col gap-[60px] items-center">
        <section className="section_common_padding">
          <Navbar />
        </section>
        <section className="section_common_padding">
          <HomeSection />
        </section>
        {/* Divider */}
        <div className="w-full flex justify-center items-center">
          <div className="w-[85%] h-[1px] bg-[#777777]"></div>
        </div>
        <section className="section_common_padding">
          <SkillsSection />
        </section>
        <section className="section_common_padding bg-[#f9f9f9]">
          <ProjectSection />
        </section>
      </section>
    </main>
  );
}
