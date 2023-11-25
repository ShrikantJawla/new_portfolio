import ContactUsSection from "@/components/ContactUsSection";
import GithubStats from "@/components/GithubStats";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";
import dynamic from "next/dynamic";
const GithubCalender = dynamic(() => import("@/components/GithubCalender"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="w-[100vw] min-h-[100vh] dark:bg-[#000000] m-auto flex justify-center items-center">
      <section className="w-full min-h-[100vh] flex flex-col gap-[30px] items-center">
        <section className="section_common_padding max-w-[1600px]">
          <Navbar />
        </section>
        {/* Home Section */}
        <section className="section_common_padding max-w-[1600px]">
          <HomeSection />
        </section>
        {/* Divider */}
        <div className="w-full flex justify-center items-center">
          <div className="w-[85%] h-[1px] bg-[#777777]"></div>
        </div>
        {/* Skills */}
        <section className="section_common_padding max-w-[1600px]">
          <SkillsSection />
        </section>
        {/* Project section */}
        <section className="section_common_padding dark:bg-black light:bg-[#f9f9f9] ">
          <div className="w-full max-w-[1600px] px-[10px] md:px-[17px]">
            <ProjectSection />
          </div>
        </section>
        {/* Github Calender Section */}
        <section className="section_common_padding max-w-[1600px]">
          <GithubCalender />
        </section>
        {/* Github Stats Section */}
        <section className="section_common_padding max-w-[1600px]">
          <GithubStats />
        </section>
        {/* Contact Us Section */}
        <section className="section_common_padding max-w-[1600px]">
          <ContactUsSection />
        </section>
      </section>
    </main>
  );
}
