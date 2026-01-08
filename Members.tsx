import { useEffect } from "react";
import { Contact } from "../components/Contact";
import {
  Instagram,
  Linkedin,
  Slack,
  ExternalLink,
  Calendar,
  Users,
} from "lucide-react";
import { SEOHead } from "../components/SEOHead";

export function Members() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://w.behold.so/widget.js"]',
    );
    if (existing) return;

    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://w.behold.so/widget.js";
    document.head.appendChild(script);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <SEOHead
        title="Members & Events - WashU SHPE"
        description="Stay connected with the SHPE familia! View upcoming events, follow us on Instagram, join our Slack workspace, and connect on WUGO. Get plugged into the WashU SHPE community."
        keywords="SHPE events, WashU SHPE members, SHPE calendar, Hispanic engineers events, STEM networking, SHPE Slack, WUGO SHPE, SHPE Instagram"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <header className="text-center mb-12 sm:mb-16 px-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 text-[#1B365D] leading-tight">
            Members & Events
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
            Stay connected with the SHPE familia! Check out our upcoming events,
            follow us on Instagram, and join the conversation.
          </p>
        </header>

        {/* Calendar Section */}
        <section className="mb-12 sm:mb-20" aria-labelledby="events-heading">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-2 border-[#5B9BD5]">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 rounded-lg bg-[#E8F4F8] flex-shrink-0">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#5B9BD5]" aria-hidden="true" />
              </div>
              <h2 id="events-heading" className="text-2xl sm:text-3xl text-[#1B365D]">
                Upcoming Events
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              View our calendar to see all upcoming workshops, socials, and networking events.
            </p>
            <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-md border border-gray-200">
              <iframe
                src="https://outlook.office365.com/owa/calendar/f8241a43c9054867871293ed9595feca@wustl.edu/9f1b50bdd6934c41977034651bbb2e7b2332332838884438037/calendar.html"
                className="w-full h-full border-0"
                title="SHPE Events Calendar"
                aria-label="SHPE Events Calendar - View upcoming events"
              />
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <section className="mb-12 sm:mb-20" aria-labelledby="instagram-heading">
          <div className="bg-[#FEF2EE] rounded-2xl p-6 sm:p-8 md:p-12">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white mb-3 sm:mb-4 shadow-lg">
                <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-[#E84E1B]" aria-hidden="true" />
              </div>
              <h2 id="instagram-heading" className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-[#1B365D] px-2">
                Follow Our Journey
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
                See what we're up to! Follow us on Instagram to stay connected with our
                community, see event highlights, and get behind-the-scenes content.
              </p>
              <a
                href="https://www.instagram.com/washushpe/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 rounded-lg px-6 sm:px-8 py-3 sm:py-4 transition-all hover:scale-105 shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-semibold text-sm sm:text-base min-h-[44px]"
                style={{ backgroundColor: "#E84E1B", color: "#FFFFFF" }}
                aria-label="Follow @washushpe on Instagram (opens in new window)"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" aria-hidden="true" style={{ color: "#FFFFFF" }} />
                <span>Follow @washushpe</span>
                <ExternalLink className="w-4 h-4 flex-shrink-0" aria-hidden="true" style={{ color: "#FFFFFF" }} />
              </a>
            </div>

            {/* Instagram Feed */}
            <div className="mt-8 bg-white rounded-xl p-4 shadow-md">
              <behold-widget feed-id="gZukTIlscdP6HZISRbbb"></behold-widget>
            </div>
          </div>
        </section>

        {/* Get Plugged In Section */}
        <section className="text-center" aria-labelledby="get-plugged-in-heading">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12 border-2 border-[#E84E1B]">
            <h2 id="get-plugged-in-heading" className="text-2xl sm:text-3xl mb-3 sm:mb-4 text-[#1B365D] px-2">
              Get Plugged In
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Stay connected with the WashU SHPE community across all our platforms. 
              Join the conversation, get updates, and be part of our familia!
            </p>
            
            {/* Platform Cards */}
            <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
              <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 border-2 border-[#E42217] hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
                  <div className="p-3 sm:p-4 rounded-xl bg-[#FEF2EE] flex-shrink-0">
                    <Users className="w-8 h-8 sm:w-10 sm:h-10 text-[#E42217]" aria-hidden="true" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-xl sm:text-2xl mb-2 text-[#1B365D]">Join Our Club on WUGO</h3>
                    <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                      Become an official member of SHPE WashU through the WUGO portal and gain access to exclusive resources and events.
                    </p>
                    <a
                      href="https://wustl.presence.io/organization/society-of-hispanic-professional-engineers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg px-5 sm:px-6 py-2.5 sm:py-3 transition-all hover:scale-105 shadow-md font-semibold text-sm sm:text-base min-h-[44px]"
                      style={{ backgroundColor: "#E42217", color: "#FFFFFF" }}
                      aria-label="Join on WUGO (opens in new window)"
                    >
                      <span>Join on WUGO</span>
                      <ExternalLink className="w-4 h-4 flex-shrink-0" aria-hidden="true" style={{ color: "#FFFFFF" }} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 border-2 border-[#E84E1B] hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
                  <div className="p-3 sm:p-4 rounded-xl bg-[#FEF2EE] flex-shrink-0">
                    <Slack className="w-8 h-8 sm:w-10 sm:h-10 text-[#E84E1B]" aria-hidden="true" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-xl sm:text-2xl mb-2 text-[#1B365D]">Join Us on Slack</h3>
                    <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                      Connect with members, get real-time updates, and participate in discussions.
                    </p>
                    <a
                      href="https://shpeexecboard.slack.com/join/shared_invite/zt-3mthk5cja-6KJtvK~Oh6w6yeNPPYGg7w#/shared-invite/email"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg px-5 sm:px-6 py-2.5 sm:py-3 transition-all hover:scale-105 shadow-md font-semibold text-sm sm:text-base min-h-[44px]"
                      style={{ backgroundColor: "#E84E1B", color: "#FFFFFF" }}
                      aria-label="Join Slack Workspace (opens in new window)"
                    >
                      <span>Join Workspace</span>
                      <ExternalLink className="w-4 h-4 flex-shrink-0" aria-hidden="true" style={{ color: "#FFFFFF" }} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 border-2 border-[#5B9BD5] hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
                  <div className="p-3 sm:p-4 rounded-xl bg-[#E8F4F8] flex-shrink-0">
                    <Linkedin className="w-8 h-8 sm:w-10 sm:h-10 text-[#5B9BD5]" aria-hidden="true" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-xl sm:text-2xl mb-2 text-[#1B365D]">Follow Us on LinkedIn</h3>
                    <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                      Stay updated on professional development opportunities, job postings, and connect with our alumni network.
                    </p>
                    <a
                      href="https://www.linkedin.com/company/washu-society-of-hispanic-professional-engineers/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg px-5 sm:px-6 py-2.5 sm:py-3 transition-all hover:scale-105 shadow-md font-semibold text-sm sm:text-base min-h-[44px]"
                      style={{ backgroundColor: "#5B9BD5", color: "#FFFFFF" }}
                      aria-label="Follow on LinkedIn (opens in new window)"
                    >
                      <span>Follow on LinkedIn</span>
                      <ExternalLink className="w-4 h-4 flex-shrink-0" aria-hidden="true" style={{ color: "#FFFFFF" }} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 border-2 border-[#1B365D] hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
                  <div className="p-3 sm:p-4 rounded-xl bg-[#E8ECF2] flex-shrink-0">
                    <Instagram className="w-8 h-8 sm:w-10 sm:h-10 text-[#1B365D]" aria-hidden="true" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-xl sm:text-2xl mb-2 text-[#1B365D]">Follow Us on Instagram</h3>
                    <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                      See what we're up to! Follow our Instagram for event photos, stories, and behind-the-scenes content.
                    </p>
                    <a
                      href="https://www.instagram.com/washushpe/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg px-5 sm:px-6 py-2.5 sm:py-3 transition-all hover:scale-105 shadow-md font-semibold text-sm sm:text-base min-h-[44px]"
                      style={{ backgroundColor: "#1B365D", color: "#FFFFFF" }}
                      aria-label="Follow on Instagram (opens in new window)"
                    >
                      <span>Follow on Instagram</span>
                      <ExternalLink className="w-4 h-4 flex-shrink-0" aria-hidden="true" style={{ color: "#FFFFFF" }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Contact />
    </main>
  );
}