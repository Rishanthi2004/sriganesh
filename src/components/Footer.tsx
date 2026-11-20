import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, User } from 'lucide-react';
import { STORE_INFO } from '../data/catalog';
import { useLanguage } from '../context/LanguageContext';

const QUICK_LINKS = [
  { to: '/', key: 'navHome' },
  { to: '/about', key: 'navAbout' },
  { to: '/products', key: 'navProducts' },
  { to: '/brands', key: 'navBrands' },
  { to: '/contact', key: 'navContact' },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0B1D3A] text-[#F6F9FC] wood-grain-dark border-t border-[#1B345E] relative">
      {/* Brand Tri-Color Accent Line (Royal Blue · Vibrant Red · Emerald Green) */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#0E4DA4] via-[#D61F26] to-[#16803C]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {/* Column 1: Brand Overview (Always in Tamil) */}
          <div className="space-y-3 sm:space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 sm:gap-3 font-serif text-base sm:text-lg font-semibold tracking-tight text-[#F6F9FC]"
            >
              <span className="inline-flex items-center justify-center bg-white rounded-lg px-2 py-1 shrink-0 shadow-xs border border-white/20">
                <img
                  src={STORE_INFO.logo}
                  alt={`${STORE_INFO.fullName} logo`}
                  referrerPolicy="no-referrer"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </span>
              <span className="leading-snug">{STORE_INFO.fullName}</span>
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed text-[#B8CBE2]">
              {t('footerDesc')}
            </p>
            <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-[#B8CBE2] pt-1">
              <p className="flex items-center gap-2">
                <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8CC2FF] shrink-0" />
                <span>
                  {t('footerContactPerson')}: {t('founderName')}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#16803C] shrink-0" />
                <a
                  href={STORE_INFO.phoneHref}
                  className="tabular-nums hover:text-[#86EFAC] transition-colors font-medium text-white"
                >
                  {STORE_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D61F26] shrink-0" />
                <a
                  href={`mailto:${STORE_INFO.email}`}
                  className="hover:text-[#FCA5A5] transition-colors break-all"
                >
                  {STORE_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (2-column on mobile for compactness) */}
          <div>
            <h3 className="font-serif text-sm sm:text-base font-medium text-[#F6F9FC] mb-2.5 sm:mb-4">
              {t('footerShowroomPages')}
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 text-xs sm:text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[#B8CBE2] hover:text-[#F6F9FC] transition-colors inline-block py-0.5"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Head Office */}
          <div>
            <h3 className="font-serif text-sm sm:text-base font-medium text-[#F6F9FC] mb-2.5 sm:mb-4">
              {STORE_INFO.headOffice.label}
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[#B8CBE2]">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 text-[#0E4DA4] sm:text-[#4B91E2] shrink-0" />
                <span>
                  {STORE_INFO.headOffice.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#16803C] shrink-0" />
                <a
                  href={STORE_INFO.headOffice.phoneHref}
                  className="tabular-nums hover:text-[#86EFAC] transition-colors"
                >
                  {STORE_INFO.headOffice.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Branch Office */}
          <div>
            <h3 className="font-serif text-sm sm:text-base font-medium text-[#F6F9FC] mb-2.5 sm:mb-4">
              {STORE_INFO.branchOffice.label}
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[#B8CBE2]">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 text-[#D61F26] shrink-0" />
                <span>
                  {STORE_INFO.branchOffice.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#16803C] shrink-0" />
                <a
                  href={STORE_INFO.branchOffice.phoneHref}
                  className="tabular-nums hover:text-[#86EFAC] transition-colors"
                >
                  {STORE_INFO.branchOffice.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-[#1B345E] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-[#859BB8]">
          <p>
            © {new Date().getFullYear()} {STORE_INFO.fullName}. {t('footerRights')}
          </p>
          <p>Namakkal, Tamil Nadu · Plywoods, Paints &amp; Architectural Hardwares</p>
        </div>
      </div>
    </footer>
  );
}
