import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BRANDS } from '../data/catalog';
import { BrandLogo } from './BrandLogo';

export function BrandMarquee() {
  return (
    <section
      aria-label="Exclusive dealer brands"
      className="py-12 lg:py-14 bg-[#EAF1FA] border-y border-[#D4DFEE] wood-grain-surface overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-7 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-[#0E4DA4] mb-1">
            Exclusive Dealers In
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0B1D3A] tracking-tight">
            Trusted Plywoods, Paints &amp; Hardwares Brands
          </h2>
        </div>

        <Link
          to="/brands"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E4DA4] hover:text-[#093678] transition-colors whitespace-nowrap shrink-0"
        >
          <span>View All {BRANDS.length} Brands</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Continuous Seamless Moving Banner */}
      <div className="relative brand-marquee-container">
        {/* Soft Side Fade Masks */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-[#EAF1FA] to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-[#EAF1FA] to-transparent"
        />

        <div className="brand-marquee-track py-2">
          {[0, 1].map((loopIndex) => (
            <div
              key={loopIndex}
              aria-hidden={loopIndex === 1}
              className="flex items-center gap-5 pr-5"
            >
              {BRANDS.map((brand) => (
                <Link
                  key={`${loopIndex}-${brand.id}`}
                  to="/brands"
                  tabIndex={loopIndex === 1 ? -1 : 0}
                  className="group flex items-center justify-center min-w-[160px] sm:min-w-[180px] h-[60px] sm:h-[68px] px-3.5 sm:px-4 bg-white rounded-xl border border-[#D4DFEE] shadow-[0_2px_8px_rgba(11,29,58,0.03)] hover:border-[#0E4DA4]/50 hover:shadow-[0_8px_20px_rgba(11,29,58,0.08)] hover:-translate-y-0.5 transition-all duration-200 shrink-0"
                >
                  <BrandLogo brandId={brand.id} compact />
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
