import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: 'rgba(11,15,14,0.85)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }
          : {}
      }
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 cursor-pointer">
            <img
              src="https://static.readdy.ai/image/9dd5690ef9c07cebb697edae64fe8cdc/cb56ff5ec8b0df6bbce7c55095adebc6.svg"
              alt="The Golf Mill Logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-dm font-medium transition-colors duration-200 cursor-pointer ${
                  location.pathname === link.to
                    ? 'text-golf-text-primary'
                    : 'text-golf-text-secondary hover:text-golf-text-primary'
                }`}
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact" className="btn-primary cursor-pointer">
              Book Session
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center cursor-pointer text-golf-text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <i className={`ri-${mobileOpen ? 'close' : 'menu-3'}-line text-xl`}></i>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            background: 'rgba(11,15,14,0.95)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div className="container-wide py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium py-2 text-golf-text-secondary hover:text-golf-text-primary transition-colors cursor-pointer"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary mt-2 w-fit cursor-pointer">
              Book Session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
