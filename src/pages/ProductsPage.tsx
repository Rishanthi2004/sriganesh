import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, X } from 'lucide-react';
import { PRODUCTS, ProductCategoryGroup } from '../data/catalog';
import { PageTransition } from '../components/PageTransition';
import { ProductCard } from '../components/ProductCard';
import { ProductShowcaseStrip } from '../components/ProductShowcaseStrip';

type FilterValue = 'All' | ProductCategoryGroup;

const FILTER_OPTIONS: { label: string; value: FilterValue }[] = [
  { label: 'All Products', value: 'All' },
  { label: 'Plywood', value: 'Plywood' },
  { label: 'Paints', value: 'Paints' },
  { label: 'Hardware', value: 'Hardware' },
];

const VALID_CATEGORIES: ProductCategoryGroup[] = ['Plywood', 'Paints', 'Hardware'];

function parseCategoryParam(param: string | null): FilterValue {
  if (!param) return 'All';
  const matched = VALID_CATEGORIES.find(
    (cat) => cat.toLowerCase() === param.trim().toLowerCase()
  );
  return matched || 'All';
}

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<FilterValue>(() =>
    parseCategoryParam(searchParams.get('category'))
  );
  const [searchQuery, setSearchQuery] = useState('');

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
      {/* Page Header */}
      <section className="bg-[#EAF1FA] border-b border-[#D4DFEE] wood-grain-surface py-14 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="text-sm font-medium text-[#0E4DA4] mb-2">
              Product Catalog · {PRODUCTS.length} Product Ranges
            </p>
            <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-[#0B1D3A] tracking-tight leading-[1.12] mb-4 [text-wrap:balance]">
              Plywood, Paints &amp; Architectural Hardware
            </h1>
            <p className="text-base text-[#485A72] leading-relaxed">
              Explore our complete range of structural panels, decorative surfaces, interior &amp;
              exterior paints, wood finishes, doors, and precision fittings. Select any item to
              open full specifications, finishes, and stocked brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Showroom Highlights Strip + Filterable Catalog */}
      <section className="py-12 lg:py-16 bg-[#F6F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 5-Column Framed Reference-Style Showcase Strip */}
          <ProductShowcaseStrip />

          {/* Interactive Segmented Filter + Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-[#D4DFEE]">
            <div
              role="tablist"
              aria-label="Filter product categories"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#E4EEF9] rounded-lg border border-[#D4DFEE] self-start"
            >
              {FILTER_OPTIONS.map((option) => {
                const isActive = activeFilter === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleFilterChange(option.value)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-150 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#0B1D3A] text-[#F6F9FC] shadow-xs'
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
                placeholder="Search plywood, paints, hinges..."
                aria-label="Search products"
                className="w-full pl-10 pr-9 py-2.5 text-sm bg-white text-[#0B1D3A] placeholder:text-[#7386A0] border border-[#D4DFEE] rounded-lg focus:outline-none focus:border-[#0E4DA4] transition-colors"
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
          </div>

          {/* Results Count */}
          <p className="text-xs text-[#5E718B] mb-6 tabular-nums">
            Showing {filteredProducts.length} of {PRODUCTS.length} product ranges
          </p>

          {/* Compact Uniform Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
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
                No matching products found
              </h2>
              <p className="text-sm text-[#485A72] mb-5">
                Try clearing your search or switching back to all product categories.
              </p>
              <button
                type="button"
                onClick={() => {
                  handleFilterChange('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 text-sm font-medium text-[#F6F9FC] bg-[#0E4DA4] rounded-lg hover:bg-[#093678] transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
