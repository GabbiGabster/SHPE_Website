import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
            url: "https://linktr.ee/shpewashu?utm_source=linktree_profile_share&ltsid=7314bf18-c8bf-4ad2-bd9d-dc8bd91709cc",
            color: "#417DC1"
        }
    ];
    return (_jsx("footer", { className: "text-white py-12 sm:py-16 px-4 sm:px-6 bg-[var(--color-primary-blue)]", role: "contentinfo", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs("div", { className: "text-center mb-8 sm:mb-12", children: [_jsx("h2", { className: "text-3xl sm:text-4xl mb-3 sm:mb-4 px-2", children: "Contact Us" }), _jsx("p", { className: "text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 px-2", children: "Have questions? We'd love to hear from you!" }), _jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4", children: [_jsxs("a", { href: "mailto:shpe@wustl.edu", className: "inline-flex items-center justify-center gap-2 sm:gap-3 rounded-lg px-6 sm:px-8 py-3 sm:py-4 transition-all hover:scale-105 shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-semibold text-sm sm:text-base min-h-[44px] w-full sm:w-auto", style: { backgroundColor: "#E84E1B", color: "#FFFFFF" }, "aria-label": "Send email to shpe@wustl.edu", children: [_jsx(Mail, { className: "w-5 h-5 flex-shrink-0", "aria-hidden": "true", style: { color: "#FFFFFF" } }), _jsx("span", { className: "break-all sm:break-normal", children: "shpe@wustl.edu" })] }), _jsxs("a", { href: `mailto:shpe@wustl.edu?subject=${encodeURIComponent("Newsletter signup")}&body=${encodeURIComponent("Hi WashU SHPE,\n\nPlease add me to the newsletter.\n\nName:\nPreferred email:\n\nThank you!")}`, className: "inline-flex items-center justify-center gap-2 sm:gap-3 rounded-lg px-6 sm:px-8 py-3 sm:py-4 transition-all hover:scale-105 shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-semibold text-sm sm:text-base min-h-[44px] w-full sm:w-auto bg-white", style: { color: "#1B365D" }, "aria-label": "Email us to subscribe to the newsletter", children: [_jsx(Mail, { className: "w-5 h-5 flex-shrink-0", "aria-hidden": "true", style: { color: "#1B365D" } }), _jsx("span", { children: "Subscribe to Newsletter" })] })] })] }), _jsx("nav", { className: "flex justify-center items-center gap-3 sm:gap-4 mb-6 sm:mb-8", "aria-label": "Social media links", children: _jsx("ul", { className: "flex gap-3 sm:gap-4 list-none", role: "list", children: socialLinks.map((social) => (_jsx("li", { role: "listitem", children: _jsx("a", { href: social.url, className: "flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full transition-all hover:scale-110 shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white", style: { backgroundColor: social.color }, "aria-label": `Follow us on ${social.name}`, children: _jsx(social.icon, { className: "w-5 h-5 sm:w-6 sm:h-6 text-white", "aria-hidden": "true" }) }) }, social.name))) }) }), _jsxs("div", { className: "text-center text-sm sm:text-base text-gray-300 border-t pt-6 sm:pt-8 border-[var(--color-primary-light-blue)] px-2", children: [_jsx("p", { children: "\u00A9 2026 WashU SHPE. All rights reserved." }), _jsx("p", { className: "mt-2", children: "Society of Hispanic Professional Engineers" })] })] }) }));
}
