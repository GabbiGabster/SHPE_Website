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


// NEXT STEPS: Fix home layout
// Ensure values is larger at full screen and vision + mission + image block doesnt reuce its size
//reduce gap between vision and mission block and convention image
// Add favicon
// add subscribe to newletter option
// update exec board emails photos and linkedin
// why get plugged in change icons
//sponsorship  Conference Meal change icon to food
// remove hover effect on how contributuons make an impact section]
// Get plugged in page add contact 
// get plugged in add WUGO link 

export function Home() {
  return (
    <>
      <SEOHead
        title="WashU SHPE - Society of Hispanic Professional Engineers | Home"
        description="Welcome to Washington University in St. Louis SHPE. Empowering the Hispanic community in STEM through mentorship, professional development, and community service. Join our familia!"
        keywords="SHPE, WashU, Washington University, Hispanic Engineers, STEM, Engineering, St. Louis, Society of Hispanic Professional Engineers, mentorship, professional development"
      />
      <Hero />
      <div className="mt-8 sm:mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-6 items-stretch mb-8 sm:mb-12 px-6 sm:px-12">
        <div className="flex flex-col gap-4 sm:gap-5 justify-center">
          <Mission />
          <Vision />
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-none h-64 sm:h-80 lg:h-[420px] xl:h-[480px]">
            <OptimizedPicture
              webp={conImgWebp}
              fallback={conImg}
              alt="National Convention 2025"
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
