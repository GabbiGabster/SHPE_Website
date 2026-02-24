import { FileText, ExternalLink } from "lucide-react";

export function History() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6" aria-labelledby="history-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="history-heading" className="text-3xl sm:text-4xl text-center mb-3 sm:mb-4 text-[var(--color-primary-blue)] px-2">Our History</h2>
        <p className="text-center text-sm sm:text-base text-[var(--color-text-tertiary)] mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
          Learn about the foundation and growth of WashU SHPE
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center mb-8 sm:mb-12">
        <div className="rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 lg:h-96" aria-hidden="true">
          <img 
            src="/images/con2023.jpg"
            alt="Washington University Activities Fair"
            className="w-full h-full object-cover"
            style={{ display: 'block', minHeight: '100%' }}
          /> 
        </div>
          <div>
            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6 sm:mb-8">
            WashU SHPE was founded in Fall 2016 by Dylan Zubata and Michael Pichardo to support Hispanic students in STEM and build a strong community at WashU.
            After becoming inactive during the COVID-19 pandemic, the chapter was reestablished in October 2022 through the leadership of Nicole Lucas, who led the effort to re-register with both SHPE National and the university. Today, WashU SHPE continues to grow, grounded in resilience, familia, service, and professional development.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="/SHPE-Student-Chapter-Bylaws.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg px-5 sm:px-6 py-3 sm:py-4 shadow-lg transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-semibold text-sm sm:text-base min-h-[44px]"
                style={{ backgroundColor: "#5B9BD5", color: "#FFFFFF" }}
                aria-label="View SHPE Bylaws (opens in new window)"
              >
                <FileText className="w-5 h-5 flex-shrink-0" aria-hidden="true" style={{ color: "#FFFFFF" }} />
                <span>View Bylaws</span>
                <ExternalLink className="w-4 h-4 flex-shrink-0" aria-hidden="true" style={{ color: "#FFFFFF" }} />
              </a>
              <a 
                href="/SHPE_Constitution.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg px-5 sm:px-6 py-3 sm:py-4 shadow-lg transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-semibold text-sm sm:text-base min-h-[44px]"
                style={{ backgroundColor: "#E84E1B", color: "#FFFFFF" }}
                aria-label="View SHPE Constitution (opens in new window)"
              >
                <FileText className="w-5 h-5 flex-shrink-0" aria-hidden="true" style={{ color: "#FFFFFF" }} />
                <span>View Constitution</span>
                <ExternalLink className="w-4 h-4 flex-shrink-0" aria-hidden="true" style={{ color: "#FFFFFF" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}