import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[100vw] min-h-[100vh] max-w-[1640px] dark:bg-[#000000] m-auto flex justify-center items-center px-[16px] md:px-[40px] lg:px-[80px] xl:px-[140px] py-[10px] md:py-[24px] border border-red-400">
      <section className="w-full min-h-[100vh]">
        <Navbar />
      </section>
    </main>
  );
}
