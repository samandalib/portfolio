import Image from "next/image";
import styles from "./page.module.css";
import ProjectSlider from "../components/ProjectSlider";

export default function Home() {
  return (
    <main className="main-content flex flex-col min-h-screen px-8 py-12">
      <div className="w-full max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-200px)]">
        {/* Left Column - Text Content */}
        <div className="flex flex-col items-center lg:items-start justify-center">
          <div className="flex flex-col md:flex-row lg:flex-col items-center lg:items-start gap-8 lg:gap-12">
            {/* Profile Image */}
            <div className="relative flex-shrink-0 flex items-center justify-center" style={{ width: 240, height: 240, transform: 'scaleX(-1)' }}>
              {/* Accent color circle */}
              <div className="absolute inset-0 rounded-full bg-accent" />
              {/* Profile image on top of the circle */}
              <Image
                src="/assets/landing/Profile2.png"
                alt="Hesam Andalib profile"
                width={240}
                height={320}
                className="object-cover absolute"
                style={{ top: -88, left: -17, zIndex: 2, pointerEvents: 'none', transform: 'scale(1.05)' }}
                priority
              />
            </div>
            {/* Text Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="font-sans font-light max-w-lg text-foreground-light dark:text-foreground-dark leading-relaxed mb-2">Hi, I'm</span>
              <h1 className="text-4xl md:text-6xl font-light mb-4 font-heading text-foreground-light dark:text-foreground-dark">Hesam</h1>
              <p className="font-sans font-light max-w-lg text-foreground-light dark:text-foreground-dark leading-relaxed">
                A product designer based in Austin, TX. I specialize in turning hairy problems into simple, thoughtful products people actually love to use.
              </p>
            </div>
          </div>
        </div>
        {/* Right Column - Project Slider */}
        <div className="flex items-center justify-center">
          <ProjectSlider />
        </div>
      </div>
      {/* Social Media Logos Row */}
      <div className="w-full flex justify-center gap-2 mt-auto mb-8">
        {/* LinkedIn */}
        <span className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="32" height="32">
            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" fill="currentColor"/>
          </svg>
        </span>
        {/* GitHub */}
        <span className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
            <path d="M12 2A10 10 0 1 0 12 22A10 10 0 1 0 12 2Z" opacity="0"/>
            <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" fill="currentColor"/>
          </svg>
        </span>
        {/* Behance */}
        <span className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="32" height="32">
            <path d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 12 18 L 18.730469 18 C 19.460469 18 23.410156 17.950312 23.410156 21.570312 C 23.410156 23.490313 22.099766 24.139688 21.509766 24.429688 C 22.389766 24.709688 24 25.52 24 28 C 24 31.83 19.609531 32 19.019531 32 L 12 32 L 12 18 z M 29 18 L 36 18 L 36 20 L 29 20 L 29 18 z M 15 20.429688 L 15 23.710938 L 18.220703 23.710938 C 18.660703 23.710938 20.119141 23.47 20.119141 22 C 20.119141 20.53 18.219687 20.429688 17.929688 20.429688 L 15 20.429688 z M 32.730469 21 C 36.630469 21 37.689609 24.039766 37.849609 24.759766 C 37.999609 25.489766 38 26.13 38 27 L 30.099609 27 C 30.099609 27.87 30.560625 29.830078 32.890625 29.830078 C 33.510625 29.830078 33.969453 29.680625 34.439453 29.390625 C 34.899453 29.100625 35.060938 28.819297 35.210938 28.529297 L 37.839844 28.529297 C 37.379844 29.679297 36.760078 30.550859 35.830078 31.130859 C 34.900078 31.710859 33.820078 32 32.580078 32 C 31.800078 32 31.03 31.850547 30.25 31.560547 C 29.63 31.270547 29.010781 30.840156 28.550781 30.410156 C 28.090781 29.970156 27.780703 29.389922 27.470703 28.669922 C 27.160703 28.089922 27 27.22 27 26.5 C 27 25.78 27.290469 21 32.730469 21 z M 32.730469 23.029297 C 30.470469 23.029297 30.099609 25.199844 30.099609 25.339844 L 35.060547 25.339844 C 34.900547 24.619844 34.250469 23.029297 32.730469 23.029297 z M 15 25.710938 L 15 29.570312 L 18.351562 29.570312 C 18.640563 29.570312 20.679688 29.480937 20.679688 27.710938 C 20.679687 25.950937 19.077562 25.710938 18.351562 25.710938 L 15 25.710938 z" fill="currentColor"/>
          </svg>
        </span>
        {/* Medium */}
        <span className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="32" height="32">
            <path d="M47,19.5l-1.821,2.197C45.064,21.811,45,21.965,45,22.125V41.75c0,0.16,0.064,0.314,0.179,0.428L47,44.546V45H37v-0.454l2.821-2.368C39.936,42.064,40,41.91,40,41.75V23.879L31.848,45h-0.001h-1.543L22,24.375v16.108c0,0.22,0.076,0.433,0.215,0.605L25,44.546V45h-8v-0.454l2.783-3.438C19.923,40.936,20,40.721,20,40.5V22.388c0-0.142-0.05-0.279-0.142-0.388L18,19.5V19h7.097l7.624,19.183L40.002,19H47V19.5z" fill="currentColor"/>
          </svg>
        </span>
      </div>
    </main>
  );
}
