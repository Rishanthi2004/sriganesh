import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Layers, Truck, ChevronLeft, ChevronRight, Instagram, Play, Pause } from 'lucide-react';
import {
  PRODUCTS,
  HOME_CATEGORIES,
  STORE_INFO,
} from '../data/catalog';
import { PageTransition } from '../components/PageTransition';
import { ProductCard } from '../components/ProductCard';
import { SafeImage } from '../components/SafeImage';
import { BrandMarquee } from '../components/BrandMarquee';
import { useLanguage } from '../context/LanguageContext';

const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.featured);

const CATEGORY_COLORS: Record<
  string,
  {
    headerBg: string;
    headerHover: string;
    border: string;
    borderHover: string;
    badge: string;
    textColor: string;
  }
> = {
  Plywood: {
    headerBg: 'bg-[#0E4DA4]',
    headerHover: 'group-hover:bg-[#093678]',
    border: 'border-[#B5CBE6]',
    borderHover: 'hover:border-[#0E4DA4]',
    badge: 'bg-[#EAF1FA] text-[#0E4DA4]',
    textColor: 'group-hover:text-[#0E4DA4]',
  },
  Hardware: {
    headerBg: 'bg-[#D61F26]',
    headerHover: 'group-hover:bg-[#B91C1C]',
    border: 'border-[#F8D2D4]',
    borderHover: 'hover:border-[#D61F26]',
    badge: 'bg-[#FDF2F2] text-[#D61F26]',
    textColor: 'group-hover:text-[#D61F26]',
  },
  Paints: {
    headerBg: 'bg-[#16803C]',
    headerHover: 'group-hover:bg-[#126b32]',
    border: 'border-[#C8E8D2]',
    borderHover: 'hover:border-[#16803C]',
    badge: 'bg-[#F0FAF2] text-[#16803C]',
    textColor: 'group-hover:text-[#16803C]',
  },
};

export function HomePage() {
  const { t } = useLanguage();
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  const leftVideoRef = useRef<HTMLVideoElement>(null);
  const rightVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayback = () => {
    const left = leftVideoRef.current;
    const right = rightVideoRef.current;
    if (!left || !right) return;

    if (isPlaying) {
      left.pause();
      right.pause();
      setIsPlaying(false);
    } else {
      left.play().catch(() => {});
      right.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const scrollToCategory = (index: number) => {
    if (!categoryScrollRef.current) return;
    const targetIndex = (index + HOME_CATEGORIES.length) % HOME_CATEGORIES.length;
    const container = categoryScrollRef.current;
    const slideWidth = container.clientWidth;
    container.scrollTo({
      left: targetIndex * slideWidth,
      behavior: 'smooth',
    });
    setCurrentCategoryIndex(targetIndex);
  };

  const handleCategoryScroll = () => {
    if (!categoryScrollRef.current) return;
    const container = categoryScrollRef.current;
    const scrollLeft = container.scrollLeft;
    const slideWidth = container.clientWidth;
    if (slideWidth > 0) {
      const newIndex = Math.round(scrollLeft / slideWidth);
      if (newIndex >= 0 && newIndex < HOME_CATEGORIES.length) {
        setCurrentCategoryIndex(newIndex);
      }
    }
  };

  const SHOWROOM_PILLARS = [
    {
      icon: ShieldCheck,
      title: t('pillar1Title'),
      detail: t('pillar1Desc'),
      colorClass: 'text-[#16803C] bg-[#16803C]/10',
    },
    {
      icon: Layers,
      title: t('pillar2Title'),
      detail: t('pillar2Desc'),
      colorClass: 'text-[#0E4DA4] bg-[#0E4DA4]/10',
    },
    {
      icon: Truck,
      title: t('pillar3Title'),
      detail: t('pillar3Desc'),
      colorClass: 'text-[#D61F26] bg-[#D61F26]/10',
    },
  ];

  return (
    <PageTransition>
      {/* 1. Architectural Hero Section */}
      <section className="relative min-h-[440px] sm:min-h-[500px] lg:min-h-[580px] flex items-center overflow-hidden bg-[#0B1D3A]">
        {/* Seamless Continuous Panoramic Video Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full overflow-hidden"
        >
          {/* Dual Videos Blended Seamlessly into One Continuous Video (No Black Bars or Gaps) */}
          <div className="relative w-full h-full flex items-center justify-between overflow-hidden">
            {/* Left Video: Landscape Video shifted slightly to the left, full height */}
            <div className="relative flex-1 h-full overflow-hidden">
              <video
                ref={leftVideoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover object-[32%_center] sm:object-[25%_center] lg:object-[20%_center] transform -translate-x-3 sm:-translate-x-6 lg:-translate-x-10 scale-[1.04]"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Right Video: Instagram Reel maintaining vertical 9:16 proportion & seamless left feathering */}
            <div className="relative w-[50%] sm:w-[45%] md:w-[40%] lg:w-[35%] h-full shrink-0 overflow-hidden -ml-10 sm:-ml-16 lg:-ml-24 [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_22%)] [mask-image:linear-gradient(to_right,transparent_0%,black_22%)]">
              <video
                ref={rightVideoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover object-center scale-[1.04]"
              >
                <source src="/instagram-reel.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Soft Seamless Feathery Junction Blend Overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-[50%] sm:right-[45%] md:right-[40%] lg:right-[35%] translate-x-1/2 w-28 sm:w-44 bg-gradient-to-r from-transparent via-[#0B1D3A]/25 to-transparent backdrop-blur-[1px]"
            />
          </div>

          {/* Unified Cinematic Gradient Overlay (Maintains high contrast for hero text & smooth visual cohesion) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent pointer-events-none" />

          {/* Discreet Play / Pause Toggle Button */}
          <button
            type="button"
            onClick={togglePlayback}
            aria-label={isPlaying ? 'Pause videos' : 'Play videos'}
            className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white/90 bg-black/55 hover:bg-black/80 backdrop-blur-md border border-white/20 transition-all shadow-md active:scale-95 cursor-pointer"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-white" />
                <span className="hidden sm:inline">Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-white fill-white" />
                <span>Play Video</span>
              </>
            )}
          </button>

          {/* Instagram Reel Direct Link Badge */}
          <a
            href="https://www.instagram.com/reels/Df4ZvHLSdnn/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 z-20 inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium text-white bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/20 transition-all shadow-md active:scale-95"
            title="View original reel on Instagram"
          >
            <Instagram className="w-3 h-3 text-[#E1306C]" />
            <span className="hidden sm:inline">Instagram Reel</span>
            <span>↗</span>
          </a>
        </motion.div>

        {/* Minimal Hero Copy & Compact CTAs */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24 w-full">
          <div className="max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.12 }}
              transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2 sm:mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] leading-tight"
            >
              {t('heroTitle')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.12 }}
              transition={{ duration: 0.45, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs sm:text-base text-[#E2E8F0] font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-md mb-4 sm:mb-6"
            >
              {t('heroSubtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.12 }}
              transition={{ duration: 0.45, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#0E4DA4] hover:bg-[#1262cb] shadow-lg shadow-black/40 transition-all active:scale-[0.98]"
              >
                <span>{t('heroExplore')}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#16803C] hover:bg-[#126b32] shadow-lg shadow-black/40 transition-all active:scale-[0.98]"
              >
                <span>{t('heroWhatsApp')}</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Shop by Category: Plywood, Paints & Hardware (Mobile Next/Next Slide Carousel · Desktop 3-Column Grid) */}
      <section className="py-8 sm:py-14 lg:py-20 bg-white border-b border-[#D4DFEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-end justify-between mb-5 sm:mb-10"
          >
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#0E4DA4] mb-1 sm:mb-2">
                {t('deptBrowse')}
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0B1D3A] tracking-tight [text-wrap:balance]">
                {t('deptTitle')}
              </h2>
            </div>

            {/* Mobile Next / Previous Controls */}
            <div className="flex md:hidden items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => scrollToCategory(currentCategoryIndex - 1)}
                aria-label="Previous Category Slide"
                className="w-9 h-9 rounded-full bg-white border border-[#D4DFEE] text-[#0B1D3A] flex items-center justify-center hover:bg-[#EAF1FA] active:scale-95 transition-all shadow-2xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollToCategory(currentCategoryIndex + 1)}
                aria-label="Next Category Slide"
                className="w-9 h-9 rounded-full bg-[#0E4DA4] text-white flex items-center justify-center hover:bg-[#093678] active:scale-95 transition-all shadow-xs cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Carousel on Mobile (1 card per slide with smooth snap) / 3-Column Grid on Desktop */}
          <div
            ref={categoryScrollRef}
            onScroll={handleCategoryScroll}
            className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [-webkit-overflow-scrolling:touch] -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {HOME_CATEGORIES.map((category, index) => {
              const count = PRODUCTS.filter((p) => p.group === category.id).length;
              const theme = CATEGORY_COLORS[category.id] || CATEGORY_COLORS.Plywood;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.12 }}
                  transition={{ duration: 0.42, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full shrink-0 snap-center md:w-auto md:shrink"
                >
                  <Link
                    to={`/products?category=${encodeURIComponent(category.id)}`}
                    className={`group h-full flex flex-col bg-white rounded-xl border-2 ${theme.border} ${theme.borderHover} p-2.5 sm:p-3 shadow-[0_2px_10px_rgba(11,29,58,0.04)] hover:shadow-[0_14px_30px_rgba(11,29,58,0.09)] hover:-translate-y-1 transition-all duration-200`}
                  >
                    <div className={`rounded-lg ${theme.headerBg} ${theme.headerHover} transition-colors duration-200 px-3 py-2 sm:px-4 sm:py-2.5 text-center shadow-xs`}>
                      <h3 className="font-serif text-lg sm:text-xl font-semibold text-white tracking-tight">
                        {category.title}
                      </h3>
                    </div>

                    <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-white mt-2.5 sm:mt-3">
                      <SafeImage
                        src={category.image}
                        alt={`${category.title} category`}
                        fallbackTitle={category.title}
                        className="w-full h-full object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>

                    <div className="px-1.5 sm:px-2 pt-3 pb-1.5 flex flex-col flex-1">
                      <div className="flex items-center justify-between gap-2 text-xs font-semibold mb-1.5">
                        <span className={`px-2 py-0.5 rounded-md ${theme.badge}`}>
                          {category.subtitle}
                        </span>
                        <span className="text-[#7386A0] font-normal tabular-nums">
                          {count} {count === 1 ? t('range') : t('ranges')}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#485A72] leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                        {category.description}
                      </p>

                      <div className={`mt-auto pt-2.5 sm:pt-3.5 border-t border-[#E4EEF9] flex items-center justify-between text-xs sm:text-sm font-semibold text-[#0B1D3A] ${theme.textColor} transition-colors`}>
                        <span>{t('exploreCat')} {category.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Slide Dot Indicators (Color coded to Plywood, Paints, Hardware) */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4">
            {HOME_CATEGORIES.map((cat, i) => {
              const isActive = i === currentCategoryIndex;
              const dotColors = ['bg-[#0E4DA4]', 'bg-[#16803C]', 'bg-[#D61F26]'];
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => scrollToCategory(i)}
                  aria-label={`Go to ${cat.title} slide`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive ? `w-7 ${dotColors[i]}` : 'w-2 bg-[#D4DFEE]'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Moving Brands Banner */}
      <BrandMarquee />

      {/* 4. Grounded Showroom Standards Strip */}
      <section className="bg-[#F6F9FC] border-b border-[#D4DFEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#C5D5EA]">
            {SHOWROOM_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.12 }}
                  transition={{ duration: 0.42, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className={idx === 0 ? 'pt-0 md:pr-8' : 'pt-4 md:pt-0 md:px-8 last:md:pr-0'}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg shrink-0 ${pillar.colorClass}`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                    </div>
                    <div>
                      <h2 className="font-serif text-sm sm:text-base font-semibold text-[#0B1D3A] mb-0.5 sm:mb-1">
                        {pillar.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#485A72] leading-relaxed">{pillar.detail}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Featured Materials: Plywood, Paints & Hardware */}
      <section className="py-8 sm:py-14 lg:py-20 bg-[#F6F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6 mb-6 sm:mb-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <p className="text-xs sm:text-sm font-medium text-[#0E4DA4] mb-1 sm:mb-2">
                Featured Materials
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0B1D3A] tracking-tight [text-wrap:balance]">
                Plywoods, Paints &amp; Hardwares Essentials
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.12 }}
              transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-[#0E4DA4] hover:text-[#093678] transition-colors whitespace-nowrap"
              >
                <span>View All {PRODUCTS.length} Product Ranges</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-7">
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
      <section className="py-8 sm:py-14 lg:py-20 bg-white border-t border-[#D4DFEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.12 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl bg-[#0B1D3A] wood-grain-dark text-[#F6F9FC] px-5 py-7 sm:px-12 sm:py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8"
          >
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-medium text-[#8CC2FF] mb-1 sm:mb-2">
                Architects · Contractors · Homeowners
              </p>
              <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight mb-2 sm:mb-3 [text-wrap:balance]">
                Planning a Renovation or New Build?
              </h2>
              <p className="text-xs sm:text-base text-[#B8CBE2] leading-relaxed">
                Compare wood grades, inspect finish swatches in natural light, and receive a
                complete material estimate directly from our showroom specialists.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium text-[#0B1D3A] bg-[#F6F9FC] rounded-lg hover:bg-[#E4EEF9] active:scale-[0.98] transition-all whitespace-nowrap"
              >
                <span>Request an Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/brands"
                className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium text-[#F6F9FC] border border-[#2E4E80] rounded-lg hover:border-[#8CC2FF] transition-colors whitespace-nowrap"
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
