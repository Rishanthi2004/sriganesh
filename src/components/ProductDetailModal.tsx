import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { X, ArrowRight, Check } from 'lucide-react';
import { ProductItem } from '../data/catalog';
import { SafeImage } from './SafeImage';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!product) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  const handleEnquire = () => {
    if (!product) return;
    const targetName = product.name;
    onClose();
    navigate(`/contact?product=${encodeURIComponent(targetName)}`);
  };

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-[#0B1D3A]/65 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#F6F9FC] rounded-2xl border border-[#D4DFEE] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close product details"
              className="absolute top-4 right-4 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 text-[#0B1D3A] border border-[#D4DFEE] hover:bg-[#0B1D3A] hover:text-[#F6F9FC] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto">
              {/* Left Media Column */}
              <div className="lg:col-span-5 bg-[#E4EEF9] flex flex-col">
                <div className="aspect-[4/3] lg:aspect-auto lg:flex-1 w-full overflow-hidden">
                  <SafeImage
                    src={product.image}
                    alt={product.name}
                    fallbackTitle={product.name}
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 bg-[#EAF1FA] border-t border-[#D4DFEE]">
                  <p className="text-xs font-medium text-[#0E4DA4] mb-1">
                    Brands Stocked
                  </p>
                  <p className="text-sm text-[#0B1D3A] font-medium">
                    {product.brands.join(' · ')}
                  </p>
                </div>
              </div>

              {/* Right Details Column */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#0E4DA4] font-medium mb-2">
                    <span>{product.group}</span>
                    <span aria-hidden="true" className="text-[#A7BDD8]">·</span>
                    <span className="text-[#485A72] tabular-nums">{product.standardSizes}</span>
                  </div>

                  <h2
                    id="product-modal-title"
                    className="font-serif text-2xl sm:text-3xl font-semibold text-[#0B1D3A] tracking-tight mb-3"
                  >
                    {product.name}
                  </h2>

                  <p className="text-sm sm:text-[15px] text-[#485A72] leading-relaxed mb-6">
                    {product.fullDescription}
                  </p>

                  {/* Specifications Table */}
                  <div className="mb-6">
                    <h3 className="font-serif text-sm font-semibold text-[#0B1D3A] mb-3">
                      Technical Specifications
                    </h3>
                    <dl className="divide-y divide-[#E4EEF9] border-y border-[#E4EEF9]">
                      {product.specs.map((spec) => (
                        <div
                          key={spec.label}
                          className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 text-sm"
                        >
                          <dt className="sm:col-span-4 text-[#5E718B] font-medium">
                            {spec.label}
                          </dt>
                          <dd className="sm:col-span-8 text-[#0B1D3A] tabular-nums">
                            {spec.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  {/* Common Applications */}
                  <div className="mb-7">
                    <h3 className="font-serif text-sm font-semibold text-[#0B1D3A] mb-2.5">
                      Recommended Applications
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.applications.map((app) => (
                        <div
                          key={app}
                          className="flex items-center gap-2 text-sm text-[#485A72]"
                        >
                          <Check className="w-4 h-4 text-[#0E4DA4] shrink-0" />
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="pt-5 border-t border-[#E4EEF9] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="button"
                    onClick={handleEnquire}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#F6F9FC] bg-[#0E4DA4] rounded-lg hover:bg-[#093678] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>Enquire About {product.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-3 text-sm font-medium text-[#0B1D3A] bg-[#F6F9FC] border border-[#D4DFEE] rounded-lg hover:bg-[#E4EEF9] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
