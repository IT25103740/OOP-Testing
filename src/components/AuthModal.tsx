import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

interface AuthModalProps {
  isOpen: boolean;
  portal: string;
  onClose: () => void;
}

export default function AuthModal({ isOpen, portal, onClose }: AuthModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setEmail('');
      setPassword('');
      setShowPassword(false);
    }
  }, [isOpen, portal]);

  const getTitle = () => {
    switch (portal) {
      case 'radar': return 'Queue Reader Login';
      case 'hod': return 'HOD Restricted Login';
      case 'student': return 'Student Portal';
      default: return 'Admin Login';
    }
  };

  const getSubtitle = () => {
    if (portal === 'student') return 'Access your enrollment dashboard';
    return 'Private Access Only. Students are restricted.';
  };

  const getIcon = () => {
    switch (portal) {
      case 'student': return 'fa-user-graduate';
      case 'radar': return 'fa-satellite-dish';
      case 'hod': return 'fa-chart-pie';
      default: return 'fa-shield-alt';
    }
  };

  const handleVerify = () => {
    if (portal === 'student') {
      onClose();
      Swal.fire({
        icon: 'success',
        title: 'Welcome, Student!',
        text: 'Redirecting to Module Registration...',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        background: '#fff',
        customClass: { popup: 'rounded-2xl' },
      });
      return;
    }

    if (!email || !password) {
      Swal.fire({
        icon: 'warning',
        title: 'Empty Fields',
        text: 'Please enter your email and password.',
        confirmButtonColor: '#FF5E14',
        customClass: { popup: 'rounded-2xl' },
      });
      return;
    }

    let isAuthenticated = false;
    let roleName = '';

    if ((portal === 'admin' || portal === 'radar') && email === 'admin@sliit.lk' && password === 'admin123') {
      isAuthenticated = true;
      roleName = portal === 'admin' ? 'Admin Dashboard' : 'Waitlist Radar';
    } else if (portal === 'hod' && email === 'hod@sliit.lk' && password === 'hod123') {
      isAuthenticated = true;
      roleName = 'HOD Analytics';
    }

    if (isAuthenticated) {
      onClose();
      Swal.fire({
        icon: 'success',
        title: 'Access Granted',
        html: `<p style="color:#6B7385;">Routing to <strong>${roleName}</strong> dashboard...</p>`,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        background: '#fff',
        customClass: { popup: 'rounded-2xl' },
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Access Denied',
        text: 'Invalid credentials. Private use only. Students are strictly prohibited from accessing this area.',
        confirmButtonColor: '#0F2239',
        customClass: { popup: 'rounded-2xl' },
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop" onClick={onClose}>
      <div className="absolute inset-0 bg-[#0F2239]/60" />

      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0F2239] text-white p-8 text-center relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors text-xl cursor-pointer bg-transparent"
          >
            <i className="fas fa-times"></i>
          </button>

          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#FF5E14]/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

          <div className="relative">
            <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">
              <i className={`fas ${getIcon()} text-[#FF5E14]`}></i>
            </div>
            <h4 className="font-bold text-xl mb-1">{getTitle()}</h4>
            <p className="text-white/50 text-sm">{getSubtitle()}</p>
          </div>
        </div>

        {/* Body */}
        <div className="p-8">
          {portal === 'student' ? (
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                <i className="fas fa-door-open text-green-500"></i>
              </div>
              <h5 className="font-bold text-[#0F2239] text-lg mb-2">Open Access Portal</h5>
              <p className="text-[#6B7385] text-sm mb-6">No authentication required for student module registration.</p>
              <button
                onClick={handleVerify}
                className="w-full bg-[#FF5E14] text-white py-3.5 rounded-xl font-semibold hover:bg-[#0F2239] transition-all duration-300 text-base cursor-pointer"
              >
                Enter Student Portal <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); handleVerify(); }}>
              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#0F2239] mb-2">Institutional Email</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7385]">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={portal === 'hod' ? 'hod@sliit.lk' : 'admin@sliit.lk'}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 text-[#0F2239] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF5E14]/30 focus:border-[#FF5E14] transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#0F2239] mb-2">Password</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7385]">
                    <i className="fas fa-key"></i>
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-12 pr-12 text-[#0F2239] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF5E14]/30 focus:border-[#FF5E14] transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7385] hover:text-[#FF5E14] transition-colors cursor-pointer bg-transparent"
                  >
                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#FF5E14] text-white py-3.5 rounded-xl font-semibold hover:bg-[#0F2239] transition-all duration-300 text-base cursor-pointer"
              >
                Login Securely <i className="fas fa-sign-in-alt ml-2"></i>
              </button>

              {/* Hint */}
              <div className="mt-5 p-3 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="text-xs text-amber-700 text-center">
                  <i className="fas fa-info-circle mr-1"></i>
                  {portal === 'hod'
                    ? 'Demo: hod@sliit.lk / hod123'
                    : 'Demo: admin@sliit.lk / admin123'}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
