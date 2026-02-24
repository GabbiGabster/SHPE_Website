import { Mail, Instagram, Linkedin, Link2 } from "lucide-react";

export function Contact() {
  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/washushpe/",
      color: "#5B9BD5"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/washu-society-of-hispanic-professional-engineers/posts/?feedView=all",
      color: "#E42217"
    },
    {
      icon: Link2,
      name: "Linktree",
      url: "#",
      color: "#417DC1"
    }
  ];

  return (
    <footer className="text-white py-12 sm:py-16 px-4 sm:px-6 bg-[var(--color-primary-blue)]" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl mb-3 sm:mb-4 px-2">Contact Us</h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 px-2">
            Have questions? We'd love to hear from you!
          </p>

          <a 
            href="mailto:shpe@wustl.edu"
            className="inline-flex items-center gap-2 sm:gap-3 rounded-lg px-6 sm:px-8 py-3 sm:py-4 transition-all hover:scale-105 shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-semibold text-sm sm:text-base min-h-[44px]"
            style={{ backgroundColor: "#E84E1B", color: "#FFFFFF" }}
            aria-label="Send email to shpe@wustl.edu"
          >
            <Mail className="w-5 h-5 flex-shrink-0" aria-hidden="true" style={{ color: "#FFFFFF" }} />
            <span className="break-all sm:break-normal">shpe@wustl.edu</span>
          </a>
        </div>

        <nav className="flex justify-center items-center gap-3 sm:gap-4 mb-6 sm:mb-8" aria-label="Social media links">
          <ul className="flex gap-3 sm:gap-4 list-none" role="list">
            {socialLinks.map((social) => (
              <li key={social.name} role="listitem">
                <a
                  href={social.url}
                  className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full transition-all hover:scale-110 shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  style={{ backgroundColor: social.color }}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-center text-sm sm:text-base text-gray-300 border-t pt-6 sm:pt-8 border-[var(--color-primary-light-blue)] px-2">
          <p>© 2026 WashU SHPE. All rights reserved.</p>
          <p className="mt-2">Society of Hispanic Professional Engineers</p>
        </div>
      </div>
    </footer>
  );
}