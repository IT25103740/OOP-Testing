interface HeroSectionProps {
  onAdminLogin: () => void;
  onGetStarted: () => void;
}

export default function HeroSection({ onAdminLogin, onGetStarted }: HeroSectionProps) {
  return (
    <section className="py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* Left Content */}
          <div className="lg:w-1/2 animate-slide-in-left">
            <span className="inline-flex items-center bg-orange-100/70 text-[#FF5E14] font-semibold px-5 py-2 rounded-full text-sm mb-6">
              <i className="fas fa-award mr-2"></i>
              Semester 2026 Registration
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-[3.8rem] font-extrabold text-[#0F2239] leading-[1.15] mb-6">
              Centralized Module <br />
              <span className="hero-highlight">Registration System</span>
            </h1>

            <p className="text-[#6B7385] text-lg leading-relaxed mb-8 max-w-xl">
              Welcome to the EduAll-powered academic gateway. Seamlessly manage module enrollments,
              waitlists, and system analytics powered by advanced Queue and Sorting algorithms.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onGetStarted}
                className="bg-[#FF5E14] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#0F2239] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl animate-pulse-glow cursor-pointer"
              >
                Enroll Now <i className="fas fa-arrow-right ml-2"></i>
              </button>
              <button
                onClick={onAdminLogin}
                className="bg-white border-2 border-[#0F2239] text-[#0F2239] px-8 py-4 rounded-xl font-semibold hover:bg-[#0F2239] hover:text-white transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                Admin Login
              </button>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8 mt-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <i className="fas fa-check-circle text-green-500 text-xl"></i>
                </div>
                <div>
                  <div className="font-bold text-[#0F2239]">98%</div>
                  <div className="text-xs text-[#6B7385]">Success Rate</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <i className="fas fa-book-open text-blue-500 text-xl"></i>
                </div>
                <div>
                  <div className="font-bold text-[#0F2239]">150+</div>
                  <div className="text-xs text-[#6B7385]">Active Modules</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative animate-slide-in-right">
            <div className="relative text-right">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Students collaborating"
                className="w-[90%] ml-auto rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] object-cover"
              />

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FF5E14]/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0F2239]/10 rounded-full blur-xl"></div>

              {/* Float Badge 1 - Enrolled Students */}
              <div className="animate-float absolute bottom-[10%] -left-2 md:left-[-30px] bg-white p-4 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.1)] flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="user"
                    className="w-10 h-10 rounded-full border-[3px] border-white object-cover"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="user"
                    className="w-10 h-10 rounded-full border-[3px] border-white object-cover"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="user"
                    className="w-10 h-10 rounded-full border-[3px] border-white object-cover"
                  />
                </div>
                <div>
                  <h6 className="font-bold text-[#0F2239] text-sm">1,245+</h6>
                  <small className="text-[#6B7385] text-xs">Enrolled Students</small>
                </div>
              </div>

              {/* Float Badge 2 - Live Queue */}
              <div className="animate-float-reverse absolute top-[15%] right-2 md:right-5 bg-white p-4 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.1)] border-l-[5px] border-l-[#FF5E14]">
                <div className="flex items-center gap-3">
                  <i className="fas fa-satellite-dish text-3xl text-[#FF5E14]"></i>
                  <div>
                    <h6 className="font-bold text-[#0F2239] text-sm">Live Queue</h6>
                    <small className="text-[#6B7385] text-xs">Radar Active</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
