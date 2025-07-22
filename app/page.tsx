import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Profile Image with Green Circle */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <Image
            src="/assets/landing/hesam3.png"
            alt="Hesam Andalib profile"
            width={350}
            height={350}
            className="object-contain"
            priority
          />
        </div>
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start mt-8 md:mt-0">
          <span className="text-xl md:text-2xl font-light mb-2">Hi, I'm</span>
          <h1 className="text-5xl md:text-7xl font-light mb-2 font-heading">Hesam</h1>
          <p className="text-lg md:text-xl font-light max-w-xl text-center md:text-left text-gray-200">
            A product designer based in Austin, TX. I specialize in turning hairy problems into simple, thoughtful products people actually love to use.
          </p>
        </div>
      </div>
      {/* Down Arrow */}
      <div className="mt-16 animate-bounce">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 34L14 24H34L24 34Z" fill="#16A34A"/>
        </svg>
      </div>
    </main>
  );
}
