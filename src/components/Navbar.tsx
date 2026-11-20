import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { STORE_INFO } from '../data/catalog';
import { useLanguage } from '../context/LanguageContext';

const NAV_KEYS = [
  { to: '/', key: 'navHome' },
  { to: '/about', key: 'navAbout' },
  { to: '/products', key: 'navProducts' },
  { to: '/brands', key: 'navBrands' },
  { to: '/contact', key: 'navContact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

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
      {/* Brand Tri-Color Accent Line (Royal Blue · Vibrant Red · Emerald Green) */}
      <div className="h-[2.5px] w-full bg-gradient-to-r from-[#0E4DA4] via-[#D61F26] to-[#16803C] shadow-2xs" />

      {/* Top Utility Announcement Bar */}
      <div className="hidden sm:block bg-[#0B1D3A] text-xs text-[#DCE8F7] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-[#1A335B]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <span className="w-2 h-2 rounded-full bg-[#16803C] animate-pulse" />
              {t('authorizedStockists')}
            </span>
            <span className="hidden md:inline text-[#8CC2FF]">• Namakkal, Tamil Nadu</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#8CC2FF]">
              {t('navHelpline')}:{' '}
              <a href={STORE_INFO.phoneHref} className="text-white font-medium hover:text-[#8CC2FF] transition-colors">
                {STORE_INFO.phoneDisplay}
              </a>
            </span>
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#16803C] hover:bg-[#126b32] text-white text-[11px] font-semibold transition-colors shadow-xs"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 h-15 sm:h-16 flex items-center justify-between gap-1 sm:gap-4 lg:gap-8">
        {/* Zone 1: Brand Logo & Wordmark (First Line: ஸ்ரீ கணேஷ் / Second Line: பிளைவுட் & ஹார்ட்வேர்) - shrink-0 to NEVER hide on mobile */}
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="inline-flex items-center gap-1.5 sm:gap-3 text-[#0B1D3A] hover:text-[#0E4DA4] transition-colors shrink-0 group py-1 select-none"
        >
          <span className="inline-flex items-center justify-center bg-white rounded-lg p-0.5 border border-[#D4DFEE] shadow-2xs group-hover:border-[#0E4DA4] transition-colors shrink-0">
            <img
              src={STORE_INFO.logo}
              alt={`${STORE_INFO.fullName} logo`}
              referrerPolicy="no-referrer"
              className="h-8 sm:h-10 lg:h-11 w-auto object-contain shrink-0"
            />
          </span>
          <div className="flex flex-col text-left leading-none justify-center shrink-0">
            <span className="font-serif font-bold text-sm sm:text-base lg:text-lg text-[#0B1D3A] tracking-tight group-hover:text-[#0E4DA4] transition-colors whitespace-nowrap">
              ஸ்ரீ கணேஷ்
            </span>
            <span className="font-serif font-semibold text-[11px] sm:text-xs lg:text-[13px] text-[#0E4DA4] tracking-tight mt-0.5 whitespace-nowrap">
              பிளைவுட்ஸ் &amp; ஹார்ட்வேர்ஸ்
            </span>
          </div>
        </Link>

        {/* Zone 2: Navigation Links */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-6 lg:gap-7">
          {NAV_KEYS.map((item) => (
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
                  <span>{t(item.key)}</span>
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-underline"
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-0 right-0 -bottom-[19px] h-[3px] bg-gradient-to-r from-[#0E4DA4] via-[#D61F26] to-[#16803C] rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Language Toggle + CTA + Mobile Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 lg:gap-3 shrink-0">
          {/* Language Switcher Button (Compact & responsive on mobile) */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1 px-1.5 py-1 sm:px-2.5 sm:py-1.5 rounded-lg text-[10.5px] sm:text-xs font-semibold border border-[#D4DFEE] bg-[#F6F9FC] text-[#0B1D3A] hover:bg-[#EAF1FA] hover:border-[#0E4DA4] active:scale-95 transition-all cursor-pointer shadow-2xs shrink-0"
            title="Switch Language / மொழியை மாற்றுக"
            aria-label="Switch Language"
          >
            <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0E4DA4] shrink-0" />
            <span className={language === 'ta' ? 'text-[#0E4DA4] font-bold' : 'text-[#7386A0]'}>தமிழ்</span>
            <span className="text-[#CBD5E1]">/</span>
            <span className={language === 'en' ? 'text-[#0E4DA4] font-bold' : 'text-[#7386A0]'}>EN</span>
          </button>

          {/* Desktop Estimate Button */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#0E4DA4] to-[#093678] hover:from-[#D61F26] hover:to-[#B91C1C] rounded-lg active:scale-[0.98] transition-all duration-200 whitespace-nowrap shrink-0 shadow-xs"
          >
            {t('navQuote')}
          </Link>

          {/* Mobile Hamburger Menu Button (Always visible on mobile) */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#F6F9FC] border border-[#D4DFEE] text-[#0B1D3A] hover:bg-[#EAF1FA] hover:border-[#0E4DA4] active:scale-95 transition-all cursor-pointer shrink-0 shadow-2xs"
          >
            {mobileOpen ? (
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#D61F26]" strokeWidth={2.5} />
            ) : (
              <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E4DA4]" strokeWidth={2.5} />
            )}
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
            className="md:hidden overflow-hidden bg-white/98 backdrop-blur-lg border-t border-[#D4DFEE] shadow-xl"
          >
            <nav aria-label="Mobile Navigation" className="px-3.5 py-4 flex flex-col gap-1.5">
              {NAV_KEYS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-[#EAF1FA] text-[#0E4DA4] border-l-4 border-[#0E4DA4] shadow-xs'
                        : 'text-[#0B1D3A] hover:bg-[#F6F9FC]'
                    }`
                  }
                >
                  <span>{t(item.key)}</span>
                  <span className="text-xs text-[#7386A0]">›</span>
                </NavLink>
              ))}

              <div className="pt-3 mt-1.5 border-t border-[#D4DFEE] flex flex-col gap-2.5">
                {/* Secondary language toggle inside mobile drawer */}
                <button
                  type="button"
                  onClick={toggleLanguage}
                  className="w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold border border-[#D4DFEE] bg-[#F6F9FC] text-[#0B1D3A] hover:bg-[#EAF1FA] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#0E4DA4]" />
                    <span>{language === 'ta' ? 'மொழி தேர்வு / Language' : 'Language / மொழி'}</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-white border border-[#D4DFEE] text-[#0E4DA4] font-bold">
                    {language === 'ta' ? 'தமிழ் (Tamil)' : 'English'}
                  </span>
                </button>

                {/* Direct Action Buttons in Mobile Menu */}
                <div className="grid grid-cols-2 gap-2 pt-0.5">
                  <a
                    href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#16803C] hover:bg-[#126b32] active:scale-98 transition-all shadow-xs"
                  >
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={STORE_INFO.phoneHref}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-semibold text-[#0B1D3A] bg-[#F6F9FC] border border-[#D4DFEE] hover:bg-[#EAF1FA] active:scale-98 transition-all"
                  >
                    <span>📞 {language === 'ta' ? 'அழைக்க' : 'Call'}</span>
                  </a>
                </div>

                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#0E4DA4] to-[#093678] hover:from-[#D61F26] hover:to-[#B91C1C] rounded-xl shadow-xs transition-all active:scale-98"
                >
                  {t('navQuote')}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
