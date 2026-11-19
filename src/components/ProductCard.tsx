import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ProductItem } from '../data/catalog';
import { SafeImage } from './SafeImage';

interface ProductCardProps {
  product: ProductItem;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const detailPath = `/products/${product.slug}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.05, 0.25),
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group h-full flex flex-col bg-white rounded-xl border border-[#D4DFEE] overflow-hidden shadow-[0_2px_10px_rgba(11,29,58,0.04)] hover:shadow-[0_14px_30px_rgba(11,29,58,0.09)] hover:border-[#9AB7DC] hover:-translate-y-1 transition-all duration-200"
    >
      {/* 4:3 Image Frame with Smooth Hover Zoom */}
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

      {/* Clean Minimal Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 border-t border-[#EAF1FA]">
        <span className="text-xs font-medium text-[#0E4DA4] mb-1">
          {product.group}
        </span>

        <h3 className="font-serif text-lg font-semibold text-[#0B1D3A] tracking-tight mb-1">
          <Link to={detailPath} className="hover:text-[#0E4DA4] transition-colors">
            {product.name}
          </Link>
        </h3>

        <p className="text-xs sm:text-sm text-[#485A72] leading-snug mb-4">
          {product.shortDescription}
        </p>

        <div className="mt-auto">
          <Link
            to={detailPath}
            className="w-full inline-flex items-center justify-between px-3.5 py-2 text-xs sm:text-sm font-medium text-[#0B1D3A] bg-[#F6F9FC] rounded-lg border border-[#D4DFEE] group-hover:bg-[#0B1D3A] group-hover:text-[#F6F9FC] group-hover:border-[#0B1D3A] active:scale-[0.98] transition-all duration-150 whitespace-nowrap"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
