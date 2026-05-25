import { Hero } from "../components/Hero";
import { Mission } from "../components/Mission";
import { Vision } from "../components/Vision";
import { Values } from "../components/Values";
import { ExploreMore } from "../components/ExploreMore";
import { History } from "../components/History"
import { Contact } from "../components/Contact";
import { SEOHead } from "../components/SEOHead";
import { OptimizedPicture } from "@/components/OptimizedPicture";
import conImg from "/images/conventionImg.jpeg";
import conImgWebp from "/images/conventionImg.webp";

export function Home() {
  return (
    <>
      <SEOHead
        title="WashU SHPE - Society of Hispanic Professional Engineers | Home"
        description="Welcome to Washington University in St. Louis SHPE. Empowering the Hispanic community in STEM through mentorship, professional development, and community service. Join our familia!"
        keywords="SHPE, WashU, Washington University, Hispanic Engineers, STEM, Engineering, St. Louis, Society of Hispanic Professional Engineers, mentorship, professional development"
      />
      <Hero />
      <div className="flex flex-col lg:flex-row items-center gap-8">
  
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <Mission />
          <Vision />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 w-full max-w-xl">
            <OptimizedPicture
              webp={conImgWebp}
              fallback={conImg}
              alt="WashU Noche De Ciencias"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

      </div>
      <Values />
      <ExploreMore />
      <History />
      <Contact/>
    </>
  );
}
