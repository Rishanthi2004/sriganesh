import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Layers, Truck } from 'lucide-react';
import {
  PRODUCTS,
  HOME_CATEGORIES,
  SHOWROOM_IMAGES,
  STORE_INFO,
} from '../data/catalog';
import { PageTransition } from '../components/PageTransition';
import { ProductCard } from '../components/ProductCard';
import { SafeImage } from '../components/SafeImage';
import { BrandMarquee } from '../components/BrandMarquee';

const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.featured);

const SHOWROOM_PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Genuine Certified Stock',
    detail: '100% authentic IS:710 marine plywood, IS:303 boards, and warranted architectural hardware.',
  },
  {
    icon: Layers,
    title: 'Complete Interior Range',
    detail: 'Over 600 laminate shades, architectural paints, wood finishes, and fittings under one roof.',
  },
  {
    icon: Truck,
    title: 'Dependable Site Delivery',
    detail: 'Carefully stacked sheet transport and prompt dispatch for residential and commercial sites.',
  },
];

export function HomePage() {
  return (
    <PageTransition>
      {/* 1. Architectural Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[680px] flex items-center overflow-hidden bg-[#0B1D3A]">
        {/* Background Image with Gentle Drift */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <SafeImage
            src={SHOWROOM_IMAGES.hero}
            alt="SGPH Plywood & Hardware architectural wood showroom"
            fallbackTitle={STORE_INFO.name}
            loading="eager"
            className="w-full h-full object-cover animate-hero-drift"
          />
          {/* Measured Scrim for WCAG AA+ Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D3A]/88 via-[#0B1D3A]/68 to-[#0B1D3A]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/65 via-transparent to-[#0B1D3A]/25" />
        </motion.div>

        {/* Hero Copy & CTAs */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm font-medium tracking-wide text-[#8CC2FF] mb-4"
            >
              Established {STORE_INFO.established} · Plywood, Paints &amp; Hardware Showroom
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(2.25rem,4.5vw,3.85rem)] font-semibold leading-[1.1] tracking-tight text-[#F6F9FC] mb-6 [text-wrap:balance]"
            >
              Quality Plywood. Reliable Hardware. Built to Last.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#DCE8F7] leading-relaxed mb-9 max-w-xl"
            >
              Supplying interior designers, contractors, and homeowners with calibrated hardwood
              plywood, architectural paints &amp; finishes, solid-core doors, and precision door hardware.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#F6F9FC] bg-[#0E4DA4] rounded-lg hover:bg-[#1662C7] active:scale-[0.98] transition-all duration-150 shadow-lg shadow-black/20 whitespace-nowrap shrink-0"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-[#F6F9FC] bg-[#F6F9FC]/10 backdrop-blur-xs border border-[#F6F9FC]/35 rounded-lg hover:bg-[#F6F9FC] hover:text-[#0B1D3A] active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Shop by Category: Plywood, Paints & Hardware */}
      <section className="py-16 lg:py-22 bg-white border-b border-[#D4DFEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mb-11"
          >
            <p className="text-sm font-medium text-[#0E4DA4] mb-2">
              Browse by Department
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0B1D3A] tracking-tight [text-wrap:balance]">
              Shop Our Core Categories
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
            {HOME_CATEGORIES.map((category, index) => {
              const count = PRODUCTS.filter((p) => p.group === category.id).length;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    to={`/products?category=${encodeURIComponent(category.id)}`}
                    className="group h-full flex flex-col bg-white rounded-xl border-2 border-[#B5CBE6] p-3 shadow-[0_2px_10px_rgba(11,29,58,0.04)] hover:shadow-[0_14px_30px_rgba(11,29,58,0.09)] hover:border-[#0E4DA4] hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className="rounded-lg bg-[#0E4DA4] group-hover:bg-[#0B1D3A] transition-colors duration-200 px-4 py-3 text-center">
                      <h3 className="font-serif text-xl font-semibold text-white tracking-tight">
                        {category.title}
                      </h3>
                    </div>

                    <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-white mt-3">
                      <SafeImage
                        src={category.image}
                        alt={`${category.title} category`}
                        fallbackTitle={category.title}
                        className="w-full h-full object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>

                    <div className="px-2 pt-4 pb-2 flex flex-col flex-1">
                      <div className="flex items-center justify-between gap-2 text-xs text-[#0E4DA4] font-medium mb-2">
                        <span>{category.subtitle}</span>
                        <span className="text-[#7386A0] font-normal tabular-nums">
                          {count} {count === 1 ? 'range' : 'ranges'}
                        </span>
                      </div>

                      <p className="text-sm text-[#485A72] leading-relaxed mb-5">
                        {category.description}
                      </p>

                      <div className="mt-auto pt-3.5 border-t border-[#E4EEF9] flex items-center justify-between text-sm font-medium text-[#0B1D3A] group-hover:text-[#0E4DA4] transition-colors">
                        <span>Explore {category.title}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Moving Brands Banner */}
      <BrandMarquee />

      {/* 4. Grounded Showroom Standards Strip */}
      <section className="bg-[#F6F9FC] border-b border-[#D4DFEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#C5D5EA]">
            {SHOWROOM_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={idx === 0 ? 'pt-0 md:pr-8' : 'pt-6 md:pt-0 md:px-8 last:md:pr-0'}
                >
                  <div className="flex items-start gap-3.5">
                    <Icon className="w-5 h-5 text-[#0E4DA4] mt-0.5 shrink-0" strokeWidth={1.75} />
                    <div>
                      <h2 className="font-serif text-base font-semibold text-[#0B1D3A] mb-1">
                        {pillar.title}
                      </h2>
                      <p className="text-sm text-[#485A72] leading-relaxed">{pillar.detail}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Featured Materials: Plywood, Paints & Hardware */}
      <section className="py-16 lg:py-22 bg-[#F6F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl"
            >
              <p className="text-sm font-medium text-[#0E4DA4] mb-2">
                Featured Materials
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0B1D3A] tracking-tight [text-wrap:balance]">
                Plywood, Paints &amp; Hardware Essentials
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E4DA4] hover:text-[#093678] transition-colors whitespace-nowrap"
              >
                <span>View All {PRODUCTS.length} Product Ranges</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {FEATURED_PRODUCTS.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Showroom Consultation Banner */}
      <section className="py-16 lg:py-20 bg-white border-t border-[#D4DFEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl bg-[#0B1D3A] wood-grain-dark text-[#F6F9FC] px-7 py-10 sm:px-12 sm:py-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8"
          >
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#8CC2FF] mb-2">
                Architects · Contractors · Homeowners
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight mb-3 [text-wrap:balance]">
                Planning a Renovation or New Build?
              </h2>
              <p className="text-sm sm:text-base text-[#B8CBE2] leading-relaxed">
                Compare wood grades, inspect finish swatches in natural light, and receive a
                complete material estimate directly from our showroom specialists.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[#0B1D3A] bg-[#F6F9FC] rounded-lg hover:bg-[#E4EEF9] active:scale-[0.98] transition-all whitespace-nowrap"
              >
                <span>Request an Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/brands"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#F6F9FC] border border-[#2E4E80] rounded-lg hover:border-[#8CC2FF] transition-colors whitespace-nowrap"
              >
                Our Brands
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
