import { Heart, Users, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ExploreMore() {
  const navigate = useNavigate();
  
  const actions = [
    {
      icon: Heart,
      title: "Donate",
      description: "Support our mission and help empower the Hispanic community in STEM",
      color: "#E84E1B",
      hoverColor: "#C43E12",
      path: "/sponsorship"
    },
    {
      icon: Users,
      title: "Become a Member",
      description: "Join our familia and be part of a supportive community",
      color: "#1B365D",
      hoverColor: "#142949",
      path: "/get-plugged-in"
    },
    {
      icon: Calendar,
      title: "View Events",
      description: "Check out our upcoming workshops, socials, and networking events",
      color: "#5B9BD5",
      hoverColor: "#4A8AC4",
      path: "/members"
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50" aria-labelledby="explore-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="explore-heading" className="text-3xl sm:text-4xl text-center mb-3 sm:mb-4 text-[var(--color-primary-blue)] px-2">Explore More</h2>
        <p className="text-center text-sm sm:text-base text-[var(--color-text-tertiary)] mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
          Get involved with WashU SHPE and make a difference in the community
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12" aria-hidden="true">
          <div className="rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80">
            {/* <ImageWithFallback
              src="https://images.unsplash.com/photo-1755053757912-a63da9d6e0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwdGVhbXdvcmt8ZW58MXx8fHwxNzY3NTYzOTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Engineering students collaborating"
              className="w-full h-full object-cover"
            /> */}
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80">
            {/* <ImageWithFallback
              src="https://images.unsplash.com/photo-1604487095738-dc3d2ceb65bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXNwYW5pYyUyMHN0ZW0lMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc2NzU2Mzk0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="STEM professionals working together"
              className="w-full h-full object-cover"
            /> */}
          </div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 list-none" role="list">
          {actions.map((action) => (
            <li key={action.title} role="listitem">
              <button
                onClick={() => navigate(action.path)}
                className="text-white rounded-xl p-6 sm:p-8 shadow-lg transition-all hover:scale-105 hover:shadow-xl text-left w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white min-h-[140px] sm:min-h-[180px]"
                style={{ backgroundColor: action.color }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = action.hoverColor}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = action.color}
                onFocus={(e) => e.currentTarget.style.backgroundColor = action.hoverColor}
                onBlur={(e) => e.currentTarget.style.backgroundColor = action.color}
                aria-label={`${action.title}: ${action.description}`}
              >
                <action.icon className="w-7 h-7 sm:w-8 sm:h-8 mb-3 sm:mb-4" aria-hidden="true" />
                <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 font-semibold">{action.title}</h3>
                <p className="text-sm sm:text-base text-white/90">
                  {action.description}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}