import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { BRANDS, BrandCategoryGroup } from '../data/catalog';
import { PageTransition } from '../components/PageTransition';
import { BrandLogo } from '../components/BrandLogo';

type BrandFilter = 'All' | BrandCategoryGroup;

const BRAND_FILTERS: { label: string; value: BrandFilter }[] = [
  { label: 'All Brands', value: 'All' },
  { label: 'Plywoods & Laminates', value: 'Plywoods & Laminates' },
  { label: 'Paints & Adhesives', value: 'Paints & Adhesives' },
  { label: 'Hardwares & Kitchen', value: 'Hardwares & Kitchen' },
];

export function BrandsPage() {
  const [filter, setFilter] = useState<BrandFilter>('All');

  const visibleBrands =
    filter === 'All'
      ? BRANDS
      : BRANDS.filter((brand) => brand.category === filter);

  return (
    <PageTransition>
      {/* Page Header */}
      <section className="bg-[#EAF1FA] border-b border-[#D4DFEE] wood-grain-surface py-8 sm:py-12 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-xs sm:text-sm font-medium text-[#0E4DA4] mb-1 sm:mb-2">
              Exclusive Dealers In
            </p>
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1D3A] tracking-tight leading-[1.15] mb-2 sm:mb-4 [text-wrap:balance]">
              Trusted Plywoods, Paints &amp; Hardwares Brands
            </h1>
            <p className="text-xs sm:text-base text-[#485A72] leading-relaxed">
              We are authorized dealers for leading plywoods, laminates, paints, kitchen fittings,
              and architectural hardwares manufacturers—guaranteeing genuine stock and official
              brand warranties across every order.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brands Directory */}
      <section className="py-6 sm:py-10 lg:py-16 bg-[#F6F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interactive Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.12 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 mb-4 sm:pb-8 sm:mb-8 border-b border-[#D4DFEE]"
          >
            <div
              role="tablist"
              aria-label="Filter brands by category"
              className="flex items-center gap-1 p-1 bg-[#E4EEF9] rounded-lg border border-[#D4DFEE] overflow-x-auto max-w-full scrollbar-none [scrollbar-width:none] [-webkit-overflow-scrolling:touch]"
            >
              {BRAND_FILTERS.map((opt) => {
                const active = filter === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(opt.value)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-150 whitespace-nowrap cursor-pointer ${
                      active
                        ? 'bg-[#0B1D3A] text-[#F6F9FC] shadow-xs'
                        : 'text-[#485A72] hover:text-[#0B1D3A]'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-[#5E718B] tabular-nums">
              Showing {visibleBrands.length} of {BRANDS.length} authorized brands
            </p>
          </motion.div>

          {/* Clean Brand Logo Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleBrands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.12 }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.04, 0.2),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group bg-white rounded-xl border border-[#D4DFEE] p-6 flex flex-col justify-between shadow-[0_2px_8px_rgba(11,29,58,0.03)] hover:shadow-[0_12px_26px_rgba(11,29,58,0.08)] hover:border-[#9AB7DC] hover:-translate-y-1 transition-all duration-200"
              >
                <div>
                  {/* Clean Logo Presentation Stage */}
                  <div className="h-20 px-4 mb-5 rounded-lg bg-[#F6F9FC] border border-[#E4EEF9] flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
                    <BrandLogo brandId={brand.id} />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#5E718B] mb-1.5">
                    <span className="text-[#0E4DA4] font-medium">{brand.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">{brand.tagline}</span>
                  </div>

                  <h2 className="font-serif text-xl font-semibold text-[#0B1D3A] tracking-tight mb-2">
                    {brand.name}
                  </h2>

                  <p className="text-sm text-[#485A72] leading-relaxed">
                    {brand.specialty}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EAF1FA] flex items-center justify-between text-xs">
                  <span className="text-[#5E718B]">Exclusive Dealer</span>
                  <Link
                    to={`/contact?product=${encodeURIComponent(brand.name)}`}
                    className="inline-flex items-center gap-1.5 font-medium text-[#0E4DA4] group-hover:text-[#0B1D3A] transition-colors whitespace-nowrap"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bulk Requirement Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 p-7 sm:p-9 rounded-xl bg-white border border-[#D4DFEE] flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="max-w-xl">
              <h3 className="font-serif text-xl font-semibold text-[#0B1D3A] mb-1.5">
                Looking for a specific architectural grade or bulk project pricing?
              </h3>
              <p className="text-sm text-[#485A72] leading-relaxed">
                Send us your Bill of Quantities (BOQ) or finish schedule. We coordinate direct
                mill and brand dispatches for residential and commercial sites.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#F6F9FC] bg-[#0B1D3A] rounded-lg hover:bg-[#0E4DA4] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Submit Material List</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
