import Image from "next/image";
import styles from "./page.module.css";
import ProjectSlider from "../components/ProjectSlider";

export default function Home() {
  return (
    <main className="flex-1 px-8 py-12">
      <div className="w-full max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-200px)]">
        {/* Left Column - Text Content */}
        <div className="flex flex-col items-center lg:items-start justify-center">
          <div className="flex flex-col md:flex-row lg:flex-col items-center lg:items-start gap-8 lg:gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <Image
                src="/assets/landing/hesam3.png"
                alt="Hesam Andalib profile"
                width={240}
                height={240}
                className="object-contain"
                priority
              />
            </div>
            {/* Text Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-xl md:text-2xl font-light mb-2">Hi, I'm</span>
              <h1 className="text-4xl md:text-6xl font-light mb-4 font-heading">Hesam</h1>
              <p className="text-lg md:text-xl font-light max-w-lg text-foreground-light dark:text-foreground-dark leading-relaxed">
                A product designer based in Austin, TX. I specialize in turning hairy problems into simple, thoughtful products people actually love to use.
              </p>
            </div>
          </div>
        </div>
        
        {/* Right Column - Project Slider */}
        <div className="flex items-center justify-center w-full">
          <ProjectSlider />
        </div>
      </div>
    </main>
  );
}
