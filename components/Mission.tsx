import { Target } from "lucide-react";

export function Mission() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6" aria-labelledby="mission-heading">
      <div className="max-w-4xl mx-auto">
        <article className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-2 border-[var(--color-primary-light-blue)]">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 rounded-lg bg-[#E8F4F8] flex-shrink-0" aria-hidden="true">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-primary-light-blue)]" aria-hidden="true" />
            </div>
            <h2 id="mission-heading" className="text-2xl sm:text-3xl text-[var(--color-primary-blue)]">Our Mission</h2>
          </div>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed">
            SHPE changes lives by empowering the Hispanic community to realize its fullest 
            potential and to impact the world through STEM awareness, access, support, and development.
          </p>
        </article>
      </div>
    </section>
  );
}