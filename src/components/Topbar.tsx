export default function Topbar() {
  return (
    <div className="hidden lg:block bg-[#0F2239] text-white py-2.5 text-sm">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="flex items-center">
            <i className="fas fa-envelope text-[#FF5E14] mr-2"></i>
            admin@sliit.lk
          </span>
          <span className="flex items-center">
            <i className="fas fa-phone-alt text-[#FF5E14] mr-2"></i>
            +94 11 241 3900
          </span>
        </div>
        <div className="flex items-center gap-5">
          <span className="flex items-center">
            <i className="fas fa-map-marker-alt text-[#FF5E14] mr-2"></i>
            New Kandy Rd, Malabe
          </span>
          <div className="flex items-center gap-3 ml-4 border-l border-white/20 pl-4">
            <a href="#" className="text-white/70 hover:text-[#FF5E14] transition-colors"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white/70 hover:text-[#FF5E14] transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white/70 hover:text-[#FF5E14] transition-colors"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}
