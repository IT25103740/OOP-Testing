import { useState } from 'react';

interface NavbarProps {
  onGetStarted: () => void;
}

export default function Navbar({ onGetStarted }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-[0_4px_15px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="text-[26px] font-extrabold text-[#0F2239] tracking-tight select-none">
          SLIIT<span className="text-[#FF5E14]">.Eduall</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-2">
          {['Home', 'Modules', 'Admissions', 'About'].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="px-4 py-2 text-[#0F2239] font-medium rounded-lg hover:text-[#FF5E14] hover:bg-orange-50 transition-all duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:block">
          <button
            onClick={onGetStarted}
            className="bg-[#FF5E14] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#0F2239] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#0F2239] text-2xl p-2 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-fade-in-up">
          <div className="px-4 py-4 space-y-2">
            {['Home', 'Modules', 'Admissions', 'About'].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-4 py-3 text-[#0F2239] font-medium rounded-lg hover:bg-orange-50 hover:text-[#FF5E14] transition-all"
              >
                {item}
              </a>
            ))}
            <button
              onClick={onGetStarted}
              className="w-full mt-2 bg-[#FF5E14] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0F2239] transition-all cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
