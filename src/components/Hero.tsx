import washuCampusWebp from "/images/WashUCampus.webp";
import washuCampus from "/images/WashUCampus.jpg";

export function Hero() {
  return (
    <section className="relative" aria-labelledby="hero-heading">
      <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
        <picture>
          <source srcSet={washuCampusWebp} type="image/webp" />
          <img
            src={washuCampus}
            alt="Washington University in St. Louis campus"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>

        <div className="absolute inset-0 bg-gradient-to-b from-[#1B365D]/80 via-[#1B365D]/60 to-[#1B365D]/80" aria-hidden="true" />

        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 px-2 text-white font-bold drop-shadow-lg leading-tight">
              Welcome to WashU SHPE
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-2xl mx-auto drop-shadow-md px-2">
              Society of Hispanic Professional Engineers at Washington University in St. Louis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
