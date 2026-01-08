import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import shpeLogo from "../images/SHPE_logo.png";

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/members", label: "Members" },
    { path: "/sponsorship", label: "Sponsorship" },
    { path: "/leadership", label: "Leadership" },
    { path: "/get-plugged-in", label: "Get Plugged In" }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav 
      className="sticky top-0 z-50 shadow-md"
      style={{ 
        backgroundColor: '#FFFFFF', 
        isolation: 'isolate',
        position: 'sticky',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex items-center justify-between" style={{ backgroundColor: '#FFFFFF' }}>
          <Link 
            to="/" 
            className="flex items-center gap-3" 
            style={{ textDecoration: 'none', backgroundColor: '#FFFFFF' }}
            onClick={closeMenu}
          >
            <div style={{ backgroundColor: '#FFFFFF', padding: '4px', borderRadius: '4px' }}>
              <img src={shpeLogo} alt="SHPE Logo" className="h-10 sm:h-12 w-auto" style={{ backgroundColor: '#FFFFFF' }} />
            </div>
          </Link>
          
          {/* Desktop Navigation - Only visible on md and above */}
          <div className="hidden md:flex gap-4 lg:gap-6" style={{ backgroundColor: '#FFFFFF' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 lg:px-4 py-2 rounded-lg transition-all hover:scale-105 text-sm lg:text-base"
                style={{
                  backgroundColor: isActive(link.path) ? '#E84E1B' : 'transparent',
                  color: isActive(link.path) ? 'white' : '#1B365D',
                  textDecoration: 'none',
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Only visible on mobile (hidden on md and above) */}
          <button
            onClick={toggleMenu}
            className="block md:hidden p-2 rounded-lg transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B365D]"
            style={{ 
              backgroundColor: '#FFFFFF',
              color: '#1B365D',
              minWidth: '44px',
              minHeight: '44px',
            }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div 
            className="md:hidden mt-4 pb-4 border-t border-gray-200"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className="px-4 py-3 rounded-lg transition-all text-base font-medium"
                  style={{
                    backgroundColor: isActive(link.path) ? '#E84E1B' : 'transparent',
                    color: isActive(link.path) ? 'white' : '#1B365D',
                    textDecoration: 'none',
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}