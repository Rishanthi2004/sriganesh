import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, X } from 'lucide-react';
import { PRODUCTS, ProductCategoryGroup } from '../data/catalog';
import { PageTransition } from '../components/PageTransition';
import { ProductCard } from '../components/ProductCard';
import { ProductShowcaseStrip } from '../components/ProductShowcaseStrip';
import { useLanguage } from '../context/LanguageContext';

type FilterValue = 'All' | ProductCategoryGroup;

const FILTER_ACTIVE_STYLES: Record<FilterValue, string> = {
  All: 'bg-[#0B1D3A] text-[#F6F9FC] shadow-xs',
  Plywood: 'bg-[#0E4DA4] text-white shadow-sm',
  Paints: 'bg-[#16803C] text-white shadow-sm',
  Hardware: 'bg-[#D61F26] text-white shadow-sm',
};

const VALID_CATEGORIES: ProductCategoryGroup[] = ['Plywood', 'Paints', 'Hardware'];

function parseCategoryParam(param: string | null): FilterValue {
  if (!param) return 'All';
  const matched = VALID_CATEGORIES.find(
    (cat) => cat.toLowerCase() === param.trim().toLowerCase()
  );
  return matched || 'All';
}

export function ProductsPage() {
  const { language, t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<FilterValue>(() =>
    parseCategoryParam(searchParams.get('category'))
  );
  const [searchQuery, setSearchQuery] = useState('');

  const filterOptions: { label: string; value: FilterValue }[] = [
    { label: t('allProducts'), value: 'All' },
    { label: language === 'ta' ? 'ப்ளைவுட்ஸ்' : 'Plywoods', value: 'Plywood' },
    { label: language === 'ta' ? 'பெயின்ட்ஸ்' : 'Paints', value: 'Paints' },
    { label: language === 'ta' ? 'ஹார்ட்வேர்ஸ்' : 'Hardwares', value: 'Hardware' },
  ];

  useEffect(() => {
    setActiveFilter(parseCategoryParam(searchParams.get('category')));
  }, [searchParams]);

  const handleFilterChange = (value: FilterValue) => {
    setActiveFilter(value);
    if (value === 'All') {
      setSearchParams({}, { replace: true });
    } else {
      setSearchParams({ category: value }, { replace: true });
    }
  };

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return PRODUCTS.filter((product) => {
      const matchesGroup = activeFilter === 'All' || product.group === activeFilter;
      if (!matchesGroup) return false;
      if (!query) return true;
      return (
        product.name.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        product.brands.some((b) => b.toLowerCase().includes(query))
      );
    });
  }, [activeFilter, searchQuery]);

  return (
    <PageTransition>
      {/* Showroom Highlights Strip + Filterable Catalog */}
      <section className="py-5 sm:py-8 lg:py-12 bg-[#F6F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 5-Column Framed Reference-Style Showcase Strip (Swipeable on Mobile) */}
          <ProductShowcaseStrip />

          {/* Interactive Segmented Filter + Search (Compact on Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.12 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-5 mb-5 sm:pb-8 sm:mb-8 border-b border-[#D4DFEE]"
          >
            <div
              role="tablist"
              aria-label="Filter product categories"
              className="flex items-center gap-1 p-1 bg-[#E4EEF9] rounded-lg border border-[#D4DFEE] overflow-x-auto max-w-full scrollbar-none [scrollbar-width:none] [-webkit-overflow-scrolling:touch]"
            >
              {filterOptions.map((option) => {
                const isActive = activeFilter === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleFilterChange(option.value)}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold rounded-md transition-all duration-150 whitespace-nowrap cursor-pointer shrink-0 ${
                      isActive
                        ? FILTER_ACTIVE_STYLES[option.value]
                        : 'text-[#485A72] hover:text-[#0B1D3A]'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#7386A0] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('searchPlaceholder')}
                aria-label="Search products"
                className="w-full pl-10 pr-9 py-2 sm:py-2.5 text-xs sm:text-sm bg-white text-[#0B1D3A] placeholder:text-[#7386A0] border border-[#D4DFEE] rounded-lg focus:outline-none focus:border-[#0E4DA4] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#7386A0] hover:text-[#0B1D3A] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>

          {/* Results Count */}
          <p className="text-xs text-[#5E718B] mb-4 sm:mb-6 tabular-nums">
            {t('showingText')} {filteredProducts.length} {t('productRangesText')} {PRODUCTS.length}
          </p>

          {/* Compact Uniform Grid (Side by side 2 cards on mobile) */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-7">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="py-16 px-6 text-center bg-white rounded-xl border border-[#D4DFEE]">
              <h2 className="font-serif text-xl font-semibold text-[#0B1D3A] mb-2">
                {language === 'ta' ? 'தயாரிப்புகள் எதுவும் கிடைக்கவில்லை' : 'No matching products found'}
              </h2>
              <p className="text-sm text-[#485A72] mb-5">
                {language === 'ta'
                  ? 'தேடலை அழித்து அல்லது அனைத்து வகைகளையும் தேர்ந்தெடுத்து மீண்டும் முயலவும்.'
                  : 'Try clearing your search or switching back to all product categories.'}
              </p>
              <button
                type="button"
                onClick={() => {
                  handleFilterChange('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 text-sm font-medium text-[#F6F9FC] bg-[#0E4DA4] rounded-lg hover:bg-[#093678] transition-colors cursor-pointer"
              >
                {language === 'ta' ? 'அனைத்தையும் காட்டு' : 'Reset Filters'}
              </button>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
