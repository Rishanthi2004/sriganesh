import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Layers,
  Ruler,
  Truck,
  Award,
  Handshake,
  ArrowRight,
} from 'lucide-react';
import { SHOWROOM_IMAGES, STORE_INFO } from '../data/catalog';
import { PageTransition } from '../components/PageTransition';
import { SafeImage } from '../components/SafeImage';

const STATS = [
  { value: '28+', label: 'Years in Timber & Hardware' },
  { value: '600+', label: 'Laminate & Veneer Shades' },
  { value: '13', label: 'Exclusive Dealer Brands' },
  { value: '4,500+', label: 'Residential & Commercial Projects' },
];

const WHY_CHOOSE_US = [
  {
    icon: ShieldCheck,
    title: 'Certified Authenticity',
    description:
      'Every sheet and hardware box is sourced directly from authorized brand distributors with verifiable warranty seals.',
  },
  {
    icon: Layers,
    title: 'Zero Core-Gap Inspection',
    description:
      'We inspect batches for calibrated thickness, moisture balance, and uniform core bonding before stocking our racks.',
  },
  {
    icon: Ruler,
    title: 'Practical Material Guidance',
    description:
      'Our counter team helps match the right plywood grade, hinge load capacity, and lock backset to your exact drawings.',
  },
  {
    icon: Award,
    title: 'Coordinated Finishes',
    description:
      'Pair matching edge bands, decorative laminates, veneers, and PVD architectural hardware finishes side-by-side.',
  },
  {
    icon: Truck,
    title: 'Careful Site Logistics',
    description:
      'Flat-bed, corner-protected sheet delivery ensures boards and veneers arrive clean and ready for carpentry.',
  },
  {
    icon: Handshake,
    title: 'Transparent Trade Pricing',
    description:
      'Clear, itemized quotations with consistent billing for homeowners, interior studios, and turnkey contractors.',
  },
];

export function AboutPage() {
  return (
    <PageTransition>
      {/* Page Header */}
      <section className="bg-[#EAF1FA] border-b border-[#D4DFEE] wood-grain-surface py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="text-sm font-medium text-[#0E4DA4] mb-2.5">
              About {STORE_INFO.name}
            </p>
            <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-[#0B1D3A] tracking-tight leading-[1.12] mb-5 [text-wrap:balance]">
              Built on Honest Timber, Precision Hardware &amp; Craftsmanship.
            </h1>
            <p className="text-base sm:text-lg text-[#485A72] leading-relaxed">
              Since {STORE_INFO.established}, {STORE_INFO.name} has served as a dependable material
              partner for carpenters, architects, and families building homes that endure decades of
              everyday use.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story + Architectural Dual-Image Layout */}
      <section className="py-16 lg:py-24 bg-[#F6F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Editorial Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col justify-center space-y-6"
            >
              <div>
                <p className="text-sm font-medium text-[#0E4DA4] mb-2">
                  Our Experience &amp; Commitment
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0B1D3A] tracking-tight mb-4 [text-wrap:balance]">
                  Nearly Three Decades of Supplying Materials You Can Trust
                </h2>
                <div className="space-y-4 text-[15px] text-[#485A72] leading-relaxed">
                  <p>
                    Interior work is only as durable as the core beneath its finish. A kitchen
                    carcass exposed to humidity or a heavy teak entrance door swung open dozens of
                    times a day demands calibrated plywood and accurately rated hardware.
                  </p>
                  <p>
                    We founded our showroom with a straightforward standard: never compromise on
                    plywood grade, core density, or metal alloy quality. Every sheet of BWP marine
                    ply, every decorative laminate, and every hydraulic hinge on our floor is
                    selected for predictable performance on site.
                  </p>
                  <p>
                    Whether you are selecting book-matched walnut veneers for a single residence or
                    sourcing full hardware schedules for a multi-floor commercial project, our
                    team walks you through real physical samples so every specification is clear
                    before delivery.
                  </p>
                </div>
              </div>

              {/* Clean Tabular Metrics */}
              <div className="pt-6 border-t border-[#D4DFEE] grid grid-cols-2 gap-6">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-3xl font-semibold text-[#0E4DA4] tabular-nums">
                      {stat.value}
                    </p>
                    <p className="text-sm text-[#485A72] mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Balanced Two-Image Layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 grid grid-cols-1 gap-6"
            >
              <div className="rounded-xl overflow-hidden border border-[#D4DFEE] bg-[#E4EEF9] aspect-[4/3]">
                <SafeImage
                  src={SHOWROOM_IMAGES.aboutShowroom}
                  alt="Organized veneer racks and hardware display table at Timber & Ply Co. showroom"
                  fallbackTitle="Showroom Gallery"
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-[#D4DFEE] bg-[#E4EEF9] aspect-[4/3]">
                <SafeImage
                  src={SHOWROOM_IMAGES.aboutCraft}
                  alt="Close-up of stacked calibrated hardwood plywood and brushed brass door handles"
                  fallbackTitle="Material Inspection"
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-white border-t border-[#D4DFEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mb-12"
          >
            <p className="text-sm font-medium text-[#0E4DA4] mb-2">Why Choose Us</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0B1D3A] tracking-tight [text-wrap:balance]">
              Dependable Quality at Every Stage of Your Build
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.42,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-6 rounded-xl bg-[#F6F9FC] border border-[#D4DFEE] hover:border-[#9AB7DC] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#E4EEF9] text-[#0E4DA4] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#0B1D3A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#485A72] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-14 pt-10 border-t border-[#E4EEF9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl font-semibold text-[#0B1D3A] mb-1">
                Ready to inspect materials in person?
              </h3>
              <p className="text-sm text-[#485A72]">
                Browse our complete catalog or speak with our showroom team directly.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#F6F9FC] bg-[#0E4DA4] rounded-lg hover:bg-[#093678] transition-colors whitespace-nowrap"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-[#0B1D3A] bg-[#F6F9FC] border border-[#D4DFEE] rounded-lg hover:bg-[#E4EEF9] transition-colors whitespace-nowrap"
              >
                Contact Showroom
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
