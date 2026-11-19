import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  MessageCircle,
  ShieldCheck,
  Layers,
  Truck,
} from 'lucide-react';
import { PRODUCTS, STORE_INFO } from '../data/catalog';
import { PageTransition } from '../components/PageTransition';
import { SafeImage } from '../components/SafeImage';
import { ProductCard } from '../components/ProductCard';

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.group === product.group && p.id !== product.id
  ).slice(0, 3);

  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${STORE_INFO.name}, I would like pricing and availability details for ${product.name} (${product.standardSizes}).`
  )}`;

  return (
    <PageTransition>
      {/* Top Breadcrumb Bar */}
      <section className="bg-[#EAF1FA] border-b border-[#D4DFEE] wood-grain-surface py-3 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2 sm:gap-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#485A72]">
            <Link to="/" className="hover:text-[#0E4DA4] transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link to="/products" className="hover:text-[#0E4DA4] transition-colors">
              Products
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              to={`/products?category=${encodeURIComponent(product.group)}`}
              className="hover:text-[#0E4DA4] transition-colors"
            >
              {product.group}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#0B1D3A] font-medium truncate max-w-[150px] sm:max-w-none">{product.name}</span>
          </nav>

          <Link
            to={`/products?category=${encodeURIComponent(product.group)}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#0E4DA4] hover:text-[#093678] transition-colors whitespace-nowrap"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Back to {product.group}</span>
          </Link>
        </div>
      </section>

      {/* Main Product Details Module */}
      <section className="py-6 sm:py-12 lg:py-16 bg-[#F6F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            {/* Left Gallery Frame */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 space-y-5 lg:sticky lg:top-24"
            >
              <div className="rounded-2xl bg-white border-2 border-[#B5CBE6] p-3 shadow-[0_4px_20px_rgba(11,29,58,0.05)]">
                <div className="rounded-xl bg-[#0E4DA4] px-4 py-2.5 text-center mb-3">
                  <p className="text-xs font-bold tracking-wider text-white uppercase">
                    {product.group} · {product.name}
                  </p>
                </div>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-white">
                  <SafeImage
                    src={product.image}
                    alt={product.name}
                    fallbackTitle={product.name}
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Showroom Assurances */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-[#D4DFEE] text-center shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-[#16803C] mx-auto mb-1.5" />
                  <p className="text-xs font-semibold text-[#0B1D3A]">Genuine Stock</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#D4DFEE] text-center shadow-xs">
                  <Layers className="w-4 h-4 text-[#0E4DA4] mx-auto mb-1.5" />
                  <p className="text-xs font-semibold text-[#0B1D3A]">Samples Ready</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#D4DFEE] text-center shadow-xs">
                  <Truck className="w-4 h-4 text-[#D61F26] mx-auto mb-1.5" />
                  <p className="text-xs font-semibold text-[#0B1D3A]">Site Delivery</p>
                </div>
              </div>
            </motion.div>

            {/* Right Technical Details & Enquiry Module */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.12 }}
              transition={{ duration: 0.48, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 bg-white rounded-2xl border border-[#D4DFEE] p-6 sm:p-8 lg:p-9"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#0E4DA4] font-medium mb-2">
                <span>{product.group}</span>
                <span aria-hidden="true" className="text-[#A7BDD8]">·</span>
                <span className="text-[#485A72] tabular-nums">{product.standardSizes}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0B1D3A] tracking-tight mb-4">
                {product.name}
              </h1>

              <p className="text-[15px] sm:text-base text-[#485A72] leading-relaxed mb-7">
                {product.fullDescription}
              </p>

              {/* Technical Specifications Table */}
              <div className="mb-7">
                <h2 className="font-serif text-lg font-semibold text-[#0B1D3A] mb-3">
                  Technical Specifications
                </h2>
                <dl className="divide-y divide-[#E4EEF9] border-y border-[#E4EEF9]">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="py-3 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 text-sm"
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

              {/* Ideal Applications */}
              <div className="mb-7">
                <h2 className="font-serif text-lg font-semibold text-[#0B1D3A] mb-3">
                  Recommended Applications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
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

              {/* Authorized Brands Stocked */}
              <div className="mb-8 p-4 rounded-xl bg-[#F6F9FC] border border-[#E4EEF9]">
                <p className="text-xs font-medium text-[#0E4DA4] mb-1">
                  Authorized Brands Available in Stock
                </p>
                <p className="text-sm font-semibold text-[#0B1D3A]">
                  {product.brands.join(' · ')}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-[#F6F9FC] bg-[#0E4DA4] rounded-lg hover:bg-[#093678] active:scale-[0.98] transition-all whitespace-nowrap"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-white bg-[#15803D] rounded-lg hover:bg-[#166534] active:scale-[0.98] transition-all whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products in Category */}
      {relatedProducts.length > 0 && (
        <section className="py-14 lg:py-18 bg-white border-t border-[#D4DFEE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-end justify-between gap-4 mb-8"
            >
              <div>
                <p className="text-sm font-medium text-[#0E4DA4] mb-1">
                  More in {product.group}
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0B1D3A] tracking-tight">
                  Related Products
                </h2>
              </div>
              <Link
                to={`/products?category=${encodeURIComponent(product.group)}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E4DA4] hover:text-[#093678] transition-colors whitespace-nowrap"
              >
                <span>View All</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-7">
              {relatedProducts.map((item, idx) => (
                <ProductCard key={item.id} product={item} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}
    </PageTransition>
  );
}
