import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PRODUCT_SHOWCASE_HIGHLIGHTS } from '../data/catalog';
import { SafeImage } from './SafeImage';

export function ProductShowcaseStrip() {
  return (
    <div className="mb-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
        <div>
          <p className="text-sm font-medium text-[#0E4DA4] mb-1">
            Showroom Highlights
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0B1D3A] tracking-tight">
            Core Product Ranges at a Glance
          </h2>
        </div>
        <p className="text-xs text-[#5E718B]">
          Select any showcase tile to open full technical specifications
        </p>
      </div>

      {/* 5-Column Framed Showroom Strip Styled After Reference Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {PRODUCT_SHOWCASE_HIGHLIGHTS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.38,
              delay: index * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Link
              to={`/products/${item.productSlug}`}
              className="group h-full flex flex-col rounded-xl bg-white border-2 border-[#B5CBE6] p-2 shadow-[0_2px_10px_rgba(11,29,58,0.05)] hover:border-[#0E4DA4] hover:shadow-[0_14px_26px_rgba(11,29,58,0.12)] hover:-translate-y-1 transition-all duration-200"
            >
              {/* Framed Top Title Header Bar */}
              <div className="rounded-lg bg-[#0E4DA4] group-hover:bg-[#0B1D3A] transition-colors duration-200 px-3 py-2.5 text-center min-h-[54px] flex items-center justify-center">
                <h3 className="font-sans text-xs font-bold tracking-wide text-white uppercase leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Pure White Studio Product Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-b-lg bg-white mt-2 flex items-center justify-center">
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  fallbackTitle={item.title}
                  className="w-full h-full object-contain p-1.5 transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Clean Footer Cue */}
              <div className="mt-auto pt-2.5 px-1.5 pb-1 border-t border-[#EAF1FA] flex items-center justify-between text-xs font-medium text-[#485A72] group-hover:text-[#0E4DA4] transition-colors">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
