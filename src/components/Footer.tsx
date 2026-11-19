import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, User } from 'lucide-react';
import { STORE_INFO } from '../data/catalog';

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/brands', label: 'Brands' },
  { to: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-[#0B1D3A] text-[#F6F9FC] wood-grain-dark border-t border-[#1B345E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand Overview */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-serif text-lg font-semibold tracking-tight text-[#F6F9FC]"
            >
              <span className="inline-flex items-center justify-center bg-white rounded-lg px-2 py-1 shrink-0">
                <img
                  src={STORE_INFO.logo}
                  alt={`${STORE_INFO.fullName} logo`}
                  referrerPolicy="no-referrer"
                  className="h-9 w-auto object-contain"
                />
              </span>
              <span className="leading-snug">{STORE_INFO.fullName}</span>
            </Link>
            <p className="text-sm leading-relaxed text-[#B8CBE2]">
              Exclusive dealers in quality plywood, laminates, paints, and architectural
              hardware serving Namakkal and surrounding regions.
            </p>
            <div className="space-y-1.5 text-sm text-[#B8CBE2] pt-1">
              <p className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#4B91E2] shrink-0" />
                <span>Contact: {STORE_INFO.contactPerson}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#4B91E2] shrink-0" />
                <a
                  href={STORE_INFO.phoneHref}
                  className="tabular-nums hover:text-[#F6F9FC] transition-colors"
                >
                  {STORE_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#4B91E2] shrink-0" />
                <a
                  href={`mailto:${STORE_INFO.email}`}
                  className="hover:text-[#F6F9FC] transition-colors break-all"
                >
                  {STORE_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-base font-medium text-[#F6F9FC] mb-4">
              Showroom Pages
            </h3>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[#B8CBE2] hover:text-[#F6F9FC] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Head Office */}
          <div>
            <h3 className="font-serif text-base font-medium text-[#F6F9FC] mb-4">
              {STORE_INFO.headOffice.label}
            </h3>
            <ul className="space-y-3 text-sm text-[#B8CBE2]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-[#4B91E2] shrink-0" />
                <span>
                  {STORE_INFO.headOffice.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#4B91E2] shrink-0" />
                <a
                  href={STORE_INFO.headOffice.phoneHref}
                  className="tabular-nums hover:text-[#F6F9FC] transition-colors"
                >
                  {STORE_INFO.headOffice.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Branch Office */}
          <div>
            <h3 className="font-serif text-base font-medium text-[#F6F9FC] mb-4">
              {STORE_INFO.branchOffice.label}
            </h3>
            <ul className="space-y-3 text-sm text-[#B8CBE2]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-[#4B91E2] shrink-0" />
                <span>
                  {STORE_INFO.branchOffice.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#4B91E2] shrink-0" />
                <a
                  href={STORE_INFO.branchOffice.phoneHref}
                  className="tabular-nums hover:text-[#F6F9FC] transition-colors"
                >
                  {STORE_INFO.branchOffice.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#1B345E] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#859BB8]">
          <p>
            © {new Date().getFullYear()} {STORE_INFO.fullName}. All rights reserved.
          </p>
          <p>Namakkal, Tamil Nadu · Plywood, Paints &amp; Architectural Hardware</p>
        </div>
      </div>
    </footer>
  );
}
