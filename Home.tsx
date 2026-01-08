import { Hero } from "../components/Hero";
import { Mission } from "../components/Mission";
import { Vision } from "../components/Vision";
import { Values } from "../components/Values";
import { ExploreMore } from "../components/ExploreMore";
import { History } from "../components/History"
import { Contact } from "../components/Contact";
import { SEOHead } from "../components/SEOHead";

export function Home() {
  return (
    <>
      <SEOHead
        title="WashU SHPE - Society of Hispanic Professional Engineers | Home"
        description="Welcome to Washington University in St. Louis SHPE. Empowering the Hispanic community in STEM through mentorship, professional development, and community service. Join our familia!"
        keywords="SHPE, WashU, Washington University, Hispanic Engineers, STEM, Engineering, St. Louis, Society of Hispanic Professional Engineers, mentorship, professional development"
      />
      <Hero />
      <Mission />
      <Vision />
      <Values />
      <ExploreMore />
      <History />
      <Contact />
    </>
  );
}
