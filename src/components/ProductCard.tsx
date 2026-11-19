import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ProductItem } from '../data/catalog';
import { SafeImage } from './SafeImage';
import { useLanguage } from '../context/LanguageContext';

interface ProductCardProps {
  product: ProductItem;
  index?: number;
}

const GROUP_THEMES: Record<
  string,
  {
    stripe: string;
    badge: string;
    hoverBorder: string;
    hoverShadow: string;
    btnHover: string;
  }
> = {
  Plywood: {
    stripe: 'bg-[#0E4DA4]',
    badge: 'text-[#0E4DA4] bg-[#EAF1FA] border-[#B5CBE6]',
    hoverBorder: 'hover:border-[#0E4DA4]',
    hoverShadow: 'hover:shadow-[0_12px_28px_rgba(14,77,164,0.12)]',
    btnHover: 'group-hover:bg-[#0E4DA4] group-hover:border-[#0E4DA4]',
  },
  Hardware: {
    stripe: 'bg-[#D61F26]',
    badge: 'text-[#D61F26] bg-[#FDF2F2] border-[#F8D2D4]',
    hoverBorder: 'hover:border-[#D61F26]',
    hoverShadow: 'hover:shadow-[0_12px_28px_rgba(214,31,38,0.12)]',
    btnHover: 'group-hover:bg-[#D61F26] group-hover:border-[#D61F26]',
  },
  Paints: {
    stripe: 'bg-[#16803C]',
    badge: 'text-[#16803C] bg-[#F0FAF2] border-[#C8E8D2]',
    hoverBorder: 'hover:border-[#16803C]',
    hoverShadow: 'hover:shadow-[0_12px_28px_rgba(22,128,60,0.12)]',
    btnHover: 'group-hover:bg-[#16803C] group-hover:border-[#16803C]',
  },
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { language, t } = useLanguage();
  const detailPath = `/products/${product.slug}`;
  const theme = GROUP_THEMES[product.group] || GROUP_THEMES.Plywood;

  const groupLabel =
    language === 'ta'
      ? product.group === 'Plywood'
        ? 'ப்ளைவுட்'
        : product.group === 'Paints'
        ? 'பெயின்ட்ஸ்'
        : 'ஹார்ட்வேர்'
      : product.group;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.12 }}
      transition={{
        duration: 0.42,
        delay: Math.min(index * 0.04, 0.18),
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group h-full flex flex-col bg-white rounded-xl border border-[#D4DFEE] overflow-hidden shadow-[0_2px_8px_rgba(11,29,58,0.04)] ${theme.hoverShadow} ${theme.hoverBorder} hover:-translate-y-0.5 transition-all duration-200`}
    >
      {/* Brand Category Accent Top Stripe */}
      <div className={`h-[3.5px] w-full ${theme.stripe}`} />

      {/* 4:3 Image Frame */}
      <Link
        to={detailPath}
        aria-label={`View details for ${product.name}`}
        className="relative aspect-[4/3] w-full overflow-hidden bg-white block"
      >
        <SafeImage
          src={product.image}
          alt={product.name}
          fallbackTitle={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </Link>

      {/* Clean Minimal Body (Optimized for side-by-side 2-column on mobile) */}
      <div className="p-2.5 sm:p-5 flex flex-col flex-1 border-t border-[#EAF1FA]">
        <div className="mb-1">
          <span className={`inline-block px-1.5 py-0.5 sm:px-2 rounded text-[9px] sm:text-[11px] font-semibold border ${theme.badge}`}>
            {groupLabel}
          </span>
        </div>

        <h3 className="font-serif text-xs xs:text-sm sm:text-lg font-semibold text-[#0B1D3A] tracking-tight mb-1 line-clamp-1">
          <Link to={detailPath} className="hover:text-[#0E4DA4] transition-colors">
            {product.name}
          </Link>
        </h3>

        <p className="text-[11px] sm:text-sm text-[#485A72] leading-snug mb-2.5 sm:mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        <div className="mt-auto">
          <Link
            to={detailPath}
            className={`w-full inline-flex items-center justify-between px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-sm font-semibold text-[#0B1D3A] bg-[#F6F9FC] rounded-lg border border-[#D4DFEE] ${theme.btnHover} group-hover:text-white active:scale-[0.98] transition-all duration-150 whitespace-nowrap`}
          >
            <span>{t('viewDetails')}</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
