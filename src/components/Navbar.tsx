import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { STORE_INFO } from '../data/catalog';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/brands', label: 'Brands' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#D4DFEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Logo & Wordmark */}
        <Link
          to="/"
          className="inline-flex items-center gap-2.5 font-serif text-base lg:text-lg font-semibold tracking-tight text-[#0B1D3A] hover:text-[#0E4DA4] transition-colors whitespace-nowrap shrink-0"
        >
          <img
            src={STORE_INFO.logo}
            alt={`${STORE_INFO.fullName} logo`}
            referrerPolicy="no-referrer"
            className="h-11 w-auto object-contain shrink-0"
          />
          <span className="hidden sm:inline">{STORE_INFO.name}</span>
          <span className="sm:hidden">Sri Ganesh ({STORE_INFO.shortName})</span>
        </Link>

        {/* Zone 2: 5 clean single-line navigation links */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative py-1.5 text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-[#0E4DA4]'
                    : 'text-[#485A72] hover:text-[#0B1D3A]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-underline"
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-0 right-0 -bottom-[19px] h-[2.5px] bg-[#D61F26]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: 1 primary CTA on desktop + mobile hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#0E4DA4] rounded-lg hover:bg-[#093678] active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0"
          >
            Request Quote
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#0B1D3A] hover:bg-[#E4EEF9] transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-[#F6F9FC] border-t border-[#D4DFEE]"
          >
            <nav aria-label="Mobile" className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#E4EEF9] text-[#0E4DA4]'
                        : 'text-[#0B1D3A] hover:bg-[#E8F0FA]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-3 mt-2 border-t border-[#D4DFEE]">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-[#F6F9FC] bg-[#0B1D3A] rounded-lg hover:bg-[#0E4DA4] transition-colors"
                >
                  Request Quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
