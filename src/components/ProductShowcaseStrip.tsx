import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PRODUCT_SHOWCASE_HIGHLIGHTS } from '../data/catalog';
import { SafeImage } from './SafeImage';
import { useLanguage } from '../context/LanguageContext';

const SHOWCASE_THEMES: Record<
  string,
  { headerBg: string; borderHover: string; textHover: string; badgeBg: string }
> = {
  Plywood: {
    headerBg: 'bg-[#0E4DA4] group-hover:bg-[#093678]',
    borderHover: 'hover:border-[#0E4DA4]',
    textHover: 'group-hover:text-[#0E4DA4]',
    badgeBg: 'bg-[#0E4DA4]',
  },
  Hardware: {
    headerBg: 'bg-[#D61F26] group-hover:bg-[#B91C1C]',
    borderHover: 'hover:border-[#D61F26]',
    textHover: 'group-hover:text-[#D61F26]',
    badgeBg: 'bg-[#D61F26]',
  },
  Paints: {
    headerBg: 'bg-[#16803C] group-hover:bg-[#126b32]',
    borderHover: 'hover:border-[#16803C]',
    textHover: 'group-hover:text-[#16803C]',
    badgeBg: 'bg-[#16803C]',
  },
};

export function ProductShowcaseStrip() {
  const { language } = useLanguage();

  return (
    <div className="mb-8 sm:mb-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.12 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-1.5 sm:gap-3 mb-4 sm:mb-6"
      >
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#0E4DA4]" />
            <span className="w-2 h-2 rounded-full bg-[#D61F26]" />
            <span className="w-2 h-2 rounded-full bg-[#16803C]" />
            <p className="text-xs sm:text-sm font-semibold text-[#0E4DA4] ml-1">
              {language === 'ta' ? 'ஷோரூம் சிறப்பம்சங்கள்' : 'Showroom Highlights'}
            </p>
          </div>
          <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold text-[#0B1D3A] tracking-tight">
            {language === 'ta' ? 'பிரதான தயாரிப்புகள்' : 'Core Product Ranges at a Glance'}
          </h2>
        </div>
        <p className="text-[11px] sm:text-xs text-[#5E718B]">
          {language === 'ta' ? 'விவரங்களை அறிய கிளிக் செய்யவும்' : 'Swipe / click any tile for specifications'}
        </p>
      </motion.div>

      {/* Horizontal Swipe Carousel on Mobile / Multi-color Grid on Desktop */}
      <div className="flex gap-3 overflow-x-auto pb-3 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-4 snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [-webkit-overflow-scrolling:touch]">
        {PRODUCT_SHOWCASE_HIGHLIGHTS.map((item, index) => {
          const theme = SHOWCASE_THEMES[item.category] || SHOWCASE_THEMES.Plywood;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.12 }}
              transition={{
                duration: 0.42,
                delay: index * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-[155px] xs:w-[175px] shrink-0 sm:w-auto snap-start"
            >
              <Link
                to={`/products/${item.productSlug}`}
                className={`group h-full flex flex-col rounded-xl bg-white border border-[#D4DFEE] sm:border-2 p-1.5 sm:p-2 shadow-[0_2px_8px_rgba(11,29,58,0.04)] ${theme.borderHover} hover:shadow-[0_12px_24px_rgba(11,29,58,0.1)] active:scale-[0.98] transition-all duration-200`}
              >
                {/* Framed Top Title Header Bar with Brand Colors */}
                <div className={`rounded-lg ${theme.headerBg} transition-colors duration-200 px-2 py-1.5 sm:px-3 sm:py-2 text-center min-h-[42px] sm:min-h-[50px] flex items-center justify-center shadow-2xs`}>
                  <h3 className="font-sans text-[11px] sm:text-xs font-bold tracking-wide text-white uppercase leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                </div>

                {/* Pure White Studio Product Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-b-lg bg-white mt-1.5 sm:mt-2 flex items-center justify-center">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    fallbackTitle={item.title}
                    className="w-full h-full object-contain p-1 sm:p-1.5 transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Clean Footer Cue */}
                <div className={`mt-auto pt-2 px-1 pb-0.5 border-t border-[#EAF1FA] flex items-center justify-between text-[11px] sm:text-xs font-medium text-[#485A72] ${theme.textHover} transition-colors`}>
                  <span className="truncate">{language === 'ta' ? 'விவரம்' : 'View Details'}</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 shrink-0" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
