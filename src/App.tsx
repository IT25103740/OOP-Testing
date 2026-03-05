import { useState, useCallback } from 'react';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortalsSection from './components/PortalsSection';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activePortal, setActivePortal] = useState('admin');

  const openAuth = useCallback((portal: string) => {
    setActivePortal(portal);
    setModalOpen(true);
  }, []);

  const closeAuth = useCallback(() => {
    setModalOpen(false);
  }, []);

  const scrollToPortals = useCallback(() => {
    const el = document.getElementById('portals');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <Navbar onGetStarted={scrollToPortals} />

      <main className="flex-1">
        <HeroSection
          onAdminLogin={() => openAuth('admin')}
          onGetStarted={scrollToPortals}
        />
        <PortalsSection onOpenAuth={openAuth} />
      </main>

      <Footer />

      <AuthModal
        isOpen={modalOpen}
        portal={activePortal}
        onClose={closeAuth}
      />
    </div>
  );
}
