import { Eye } from "lucide-react";

export function Vision() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6" aria-labelledby="vision-heading">
      <div className="max-w-4xl mx-auto">
        <article className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-2 border-[var(--color-primary-orange)]">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 rounded-lg bg-[#FEF2EE] flex-shrink-0" aria-hidden="true">
              <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-primary-orange)]" aria-hidden="true" />
            </div>
            <h2 id="vision-heading" className="text-2xl sm:text-3xl text-[var(--color-primary-blue)]">Our Vision</h2>
          </div>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed">
            SHPE's vision is a world where Hispanics are highly valued and influential as 
            leading innovators, scientists, mathematicians, and engineers.
          </p>
        </article>
      </div>
    </section>
  );
}