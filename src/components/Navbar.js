import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import shpeLogo from '/SHPE_logo.png';
export function Navbar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isActive = (path) => location.pathname === path;
    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/members", label: "Members" },
        { path: "/sponsorship", label: "Sponsorship" },
        { path: "/leadership", label: "Leadership" },
        { path: "/get-plugged-in", label: "Get Plugged In" }
    ];
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const handleNavClick = () => {
        setIsMenuOpen(false);
        // Run scroll after navigation so it always applies to the new page
        setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }, 0);
    };
    return (_jsx("nav", { className: "sticky top-0 z-50 shadow-md", style: { backgroundColor: '#FFFFFF', isolation: 'isolate' }, children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Link, { to: "/", className: "flex items-center gap-3", onClick: handleNavClick, style: { textDecoration: 'none' }, children: _jsx("div", { style: { padding: '4px', borderRadius: '4px' }, children: _jsx("img", { src: shpeLogo, alt: "SHPE Logo", className: "h-10 sm:h-12 w-auto" }) }) }), _jsx("div", { className: "hidden md:flex gap-4 lg:gap-6", children: navLinks.map((link) => (_jsx(Link, { to: link.path, onClick: handleNavClick, className: "px-3 lg:px-4 py-2 rounded-lg transition-all hover:scale-105 text-sm lg:text-base", style: {
                                    backgroundColor: isActive(link.path) ? '#E84E1B' : 'transparent',
                                    color: isActive(link.path) ? 'white' : '#1B365D',
                                    textDecoration: 'none',
                                    minHeight: '44px',
                                    display: 'flex',
                                    alignItems: 'center',
                                }, children: link.label }, link.path))) }), _jsx("button", { onClick: toggleMenu, className: "block md:hidden p-2 rounded-lg transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B365D]", style: { minWidth: '44px', minHeight: '44px' }, "aria-label": isMenuOpen ? "Close menu" : "Open menu", "aria-expanded": isMenuOpen, children: isMenuOpen ? _jsx(X, { className: "w-6 h-6" }) : _jsx(Menu, { className: "w-6 h-6" }) })] }), isMenuOpen && (_jsx("div", { className: "md:hidden mt-4 pb-4 border-t border-gray-200", children: _jsx("div", { className: "flex flex-col gap-2 pt-4", children: navLinks.map((link) => (_jsx(Link, { to: link.path, onClick: handleNavClick, className: "px-4 py-3 rounded-lg transition-all text-base font-medium", style: {
                                backgroundColor: isActive(link.path) ? '#E84E1B' : 'transparent',
                                color: isActive(link.path) ? 'white' : '#1B365D',
                                textDecoration: 'none',
                                minHeight: '44px',
                                display: 'flex',
                                alignItems: 'center',
                            }, children: link.label }, link.path))) }) }))] }) }));
}
