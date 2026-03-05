export default function Footer() {
  return (
    <footer className="bg-[#0F2239] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-extrabold tracking-tight block mb-4">
              SLIIT<span className="text-[#FF5E14]">.Eduall</span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Centralized academic module registration system powered by advanced data structures and algorithms.
            </p>
            <div className="flex gap-3">
              {['facebook-f', 'twitter', 'linkedin-in', 'github'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:bg-[#FF5E14] hover:text-white transition-all duration-300"
                >
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold text-lg mb-5 relative">
              Quick Links
              <span className="absolute bottom-[-8px] left-0 w-8 h-0.5 bg-[#FF5E14]"></span>
            </h5>
            <ul className="space-y-3 mt-4">
              {['Home', 'Student Portal', 'Admin Panel', 'Queue Reader', 'HOD Analytics'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-[#FF5E14] transition-colors text-sm flex items-center gap-2">
                    <i className="fas fa-chevron-right text-[10px] text-[#FF5E14]"></i>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic */}
          <div>
            <h5 className="font-bold text-lg mb-5 relative">
              Academic
              <span className="absolute bottom-[-8px] left-0 w-8 h-0.5 bg-[#FF5E14]"></span>
            </h5>
            <ul className="space-y-3 mt-4">
              {['Module Catalog', 'Enrollment Queue', 'Waitlist System', 'Sorting Algorithms', 'Data Structures'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-[#FF5E14] transition-colors text-sm flex items-center gap-2">
                    <i className="fas fa-chevron-right text-[10px] text-[#FF5E14]"></i>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-bold text-lg mb-5 relative">
              Contact Us
              <span className="absolute bottom-[-8px] left-0 w-8 h-0.5 bg-[#FF5E14]"></span>
            </h5>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-[#FF5E14] mt-1"></i>
                <span className="text-white/60 text-sm">New Kandy Rd, Malabe, Sri Lanka</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-phone-alt text-[#FF5E14] mt-1"></i>
                <span className="text-white/60 text-sm">+94 11 241 3900</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-envelope text-[#FF5E14] mt-1"></i>
                <span className="text-white/60 text-sm">admin@sliit.lk</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-clock text-[#FF5E14] mt-1"></i>
                <span className="text-white/60 text-sm">Mon - Fri: 8:30 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            © 2026 SLIIT Eduall. All Rights Reserved. Built with DSA.
          </p>
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span className="flex items-center gap-1">
              <i className="fas fa-code text-[#FF5E14]"></i> React
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <i className="fas fa-paint-brush text-[#FF5E14]"></i> Tailwind CSS
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <i className="fas fa-bolt text-[#FF5E14]"></i> Vite
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
