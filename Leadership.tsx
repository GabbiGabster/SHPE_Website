import { Linkedin, Mail } from "lucide-react";
import { Contact } from "../components/Contact";
import { SEOHead } from "../components/SEOHead";

interface Leader {
  position: string;
  name: string;
  major: string;
  image?: string;
  email: string;
  linkedin?: string;
}

export function Leadership() {
  const leaders: Leader[] = [
    {
      position: "President",
      name: "Diego Gonzalez",
      major: "Computer Science",
      image: " https://media.licdn.com/dms/image/v2/D5603AQEIXuz575SluA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1669850168856?e=1769644800&v=beta&t=d--O0F1-i_dSkBw7GxFvtyUru_xYaJhLoyOLSvutiBQ",
      email: "d.gonzalez@wustl.edu",
      linkedin: "https://www.linkedin.com/in/diego-gonzalezz/",
    },
    {
      position: "Vice-President",
      name: "Gabriella Arguello",
      major: "Computer Science",
      image: " https://media.licdn.com/dms/image/v2/D4D03AQEbE7FM4PtoKA/profile-displayphoto-scale_400_400/B4DZmGaU.UGwAg-/0/1758896673483?e=1769644800&v=beta&t=Lwnwu1kX9UUqqYfS5F5e3shUVhOxlnzD-AmApcvaxqk",
      email: "a.gabbi@wustl.edu",
      linkedin: "https://www.linkedin.com/in/gabbiarguello/",
    },
    {
      position: "External Representative",
      name: "Miguel Lopez",
      major: "Mechanical Engineering",
      image: " https://media.licdn.com/dms/image/v2/D5635AQEeemD7LcbjJw/profile-framedphoto-shrink_400_400/B56Zsi09YdI8Ag-/0/1765815867183?e=1768453200&v=beta&t=j9_vXSDyRJxCPZFeuMBwnlwHQ5DYei2QrBiz0f2Ftt4",
      email: "lmiguel@wustl.edu",
      linkedin: "https://www.linkedin.com/in/miguel-lopez100/",
    },
    {
      position: "Internal Representative",
      name: "Melita Ocampo",
      major: "Computer Science",
      image: " https://media.licdn.com/dms/image/v2/D4E03AQHg35eB16fexA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1691697576627?e=1769644800&v=beta&t=eNqqrWDwDh6nMinytDvS6osBYxEzVfGefz54Fa0CJWk",
      email: "melita@wustl.edu",
      linkedin: "https://www.linkedin.com/in/melitao/",
    },
    {
      position: "Secretary",
      name: "Nadia Ahmed",
      major: "Math + Computer Science",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQFidqh8NTcwtw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729382664214?e=1769644800&v=beta&t=4gO1FNXvH7UChyFCnLPMAJ_HfkFHZj9OjntlQzkHxyI",
      email: "ahmed.nadia@wustl.edu",
      linkedin: "https://www.linkedin.com/in/nadiaahmed06/",
    },
    {
      position: "Treasurer",
      name: "Anette Martinez Vazquez",
      major: "Mechanical Engineering",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHq5-ATvHiT3Q/profile-displayphoto-shrink_400_400/B56Zn47R1rKAAg-/0/1760817913977?e=1769644800&v=beta&t=tQwuphFZbf4qqHwJsL0j_eFGFfmVXpRMxNpIH9SKHMg",
      email: "email@wustl.edu",
      linkedin: "https://www.linkedin.com/in/anett-martinez-vazquez/",
    },
    {
      position: "Community Service Chair",
      name: "Angela Delgado",
      major: "Mechanical Engineering",
      image: "https://media.licdn.com/dms/image/v2/D5603AQE2fcNQeQH_cQ/profile-displayphoto-scale_400_400/B56ZsZ8MI4HIAg-/0/1765666767821?e=1769644800&v=beta&t=pM_e-TiN07h3EvY1HpIK8LLxII2F9do2PoboF8ebxo0",
      email: "a.j.delgado@wustl.edu",
      linkedin: "https://www.linkedin.com/in/angela-del7/",
    },
    {
      position: "Event Coordinator",
      name: "Diana Cardenas-Jara",
      major: "Computer Science + Political Science",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFyoz0PtudiQA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730318511853?e=1769644800&v=beta&t=zt-p0gqnf2KsKc9qjA7sPF5YlxB1y_ejR7pM9CuDZkg",
      email: "cardenas-jara@wustl.edu",
      linkedin: "https://www.linkedin.com/in/diana-cardenas-jara/",
    },
    {
      position: "First Year Representative",
      name: "Tobias Montilla",
      major: "Mechanical Engineering",
      image: "https://media.licdn.com/dms/image/v2/D5603AQG1C85B1sEeOA/profile-displayphoto-scale_400_400/B56Zn9Ucx3I0Ag-/0/1760891621030?e=1769644800&v=beta&t=y_mp5ACjrEwqHfmPE0IpoCgEPryHB2dbROJ0p4KAQ0A",
      email: "montilla@wustl.edu",
      linkedin: "https://www.linkedin.com/in/tobiasmontilla",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <SEOHead
        title="Our Leadership Team - WashU SHPE"
        description="Meet the dedicated executive board members who lead WashU SHPE. Get to know our President, Vice-President, and other leaders working to support the Hispanic engineering community."
        keywords="SHPE leadership, WashU SHPE board, executive board, SHPE officers, Hispanic student leaders, engineering student leadership"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <header className="text-center mb-12 sm:mb-16 px-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 text-[#1B365D] leading-tight">
            Our Leadership Team
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
            Meet the dedicated executive board members who lead WashU SHPE and
            work tirelessly to support our community.
          </p>
        </header>

        <section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          aria-label="Executive board members"
        >
          {leaders.map((leader, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group relative flex flex-col"
            >
              <div className="relative">
                {/* Image Container */}
                <div className="w-full h-56 sm:h-64 bg-gradient-to-br from-[#1B365D] to-[#5B9BD5] flex items-center justify-center overflow-hidden">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={`${leader.name}, ${leader.position}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-white text-5xl sm:text-6xl font-bold">
                      {leader.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Hover Overlay with Contact Buttons */}
                <div className="absolute inset-0 bg-[#1B365D] bg-opacity-95 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 sm:gap-4">
                  <a
                    href={`mailto:${leader.email}`}
                    className="bg-white rounded-full p-3 sm:p-4 hover:scale-110 active:scale-95 transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white shadow-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label={`Email ${leader.name}`}
                  >
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#1B365D]" aria-hidden="true" />
                  </a>
                  {leader.linkedin && (
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white rounded-full p-3 sm:p-4 hover:scale-110 active:scale-95 transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white shadow-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
                      aria-label={`${leader.name}'s LinkedIn profile (opens in new window)`}
                    >
                      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-[#1B365D]" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex-grow">
                <h2 className="text-base sm:text-lg font-semibold text-[#E84E1B] mb-1">
                  {leader.position}
                </h2>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1B365D] mb-1 sm:mb-2">
                  {leader.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{leader.major}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
      <Contact />
    </main>
  );
}

