import { useState, useRef, useEffect } from 'react';
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
  Share2,
  Copy,
  Check,
  MessageCircle,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { STORE_INFO } from '../data/catalog';
import { PageTransition } from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';

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
  const { language, t } = useLanguage();
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copiedState, setCopiedState] = useState<'details' | 'link' | null>(null);
  const shareMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target as Node)) {
        setIsShareOpen(false);
      }
    }
    if (isShareOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isShareOpen]);

  const handleWhatsAppShare = () => {
    const founderTitle = t('founderName');
    const designation = t('founderDesignation');
    const text = `*${STORE_INFO.name}*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *${founderTitle}* (${designation})\n` +
      `🏢 *Company:* ${STORE_INFO.fullName}\n` +
      `📅 *Established:* 1998\n` +
      `📍 *Location:* 73, Mohanur Main Road, Near Iyappan Kovil, Namakkal, Tamil Nadu, All Over India\n` +
      `📞 *Phone:* ${STORE_INFO.phoneDisplay} / ${STORE_INFO.headOffice.phoneDisplay}\n` +
      `✉️ *Email:* ${STORE_INFO.email}\n` +
      `🌐 *Website:* ${window.location.origin}/about\n\n` +
      `Quality Plywoods, Reliable Hardwares & Architectural Finishes.`;

    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handleCopyDetails = async () => {
    const founderTitle = t('founderName');
    const designation = t('founderDesignation');
    const details = `Name: ${founderTitle}\n` +
      `Designation: ${designation}\n` +
      `Company: ${STORE_INFO.fullName}\n` +
      `Established: 1998\n` +
      `Location: Namakkal, Tamil Nadu, All Over India\n` +
      `Phone: ${STORE_INFO.phoneDisplay} / ${STORE_INFO.headOffice.phoneDisplay}\n` +
      `Email: ${STORE_INFO.email}\n` +
      `Address: 73, Mohanur Main Road, Near Iyappan Kovil, Namakkal – 637001\n` +
      `Website: ${window.location.origin}/about`;

    try {
      await navigator.clipboard.writeText(details);
      setCopiedState('details');
      setTimeout(() => setCopiedState(null), 3000);
    } catch {
      // Fallback
    }
  };

  const handleShareLink = async () => {
    const founderTitle = t('founderName');
    const designation = t('founderDesignation');
    const shareData = {
      title: `${founderTitle} – ${STORE_INFO.name}`,
      text: `${founderTitle}, ${designation} at ${STORE_INFO.name}.`,
      url: window.location.href,
    };

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err: any) {
        if (err?.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedState('link');
      setTimeout(() => setCopiedState(null), 3000);
    } catch {
      // Fallback
    }
  };

  return (
    <PageTransition>
      {/* 1. Founder Section (Featured First) */}
      <section className="py-7 sm:py-12 lg:py-18 bg-[#F6F9FC] border-b border-[#D4DFEE] relative overflow-hidden">
        {/* Subtle decorative background tints (Website Brand Blue & Green accents) */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0E4DA4]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#16803C]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-2xl mx-auto mb-6 sm:mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF1FA] border border-[#D4DFEE] text-xs font-semibold tracking-wider text-[#0E4DA4] uppercase mb-2 sm:mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0E4DA4]" />
              <span>{t('founderBadge')}</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1D3A] tracking-tight [text-wrap:balance]">
              {t('founderHeader')}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[#485A72] leading-relaxed">
              {t('founderHeaderDesc')}
            </p>
          </motion.div>

          {/* Clean Profile Card with Rounded Corners matching website aesthetic */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.12 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-[#D4DFEE] shadow-[0_8px_30px_rgba(11,29,58,0.06)] overflow-hidden"
          >
            {/* Top Brand Tri-Color Accent Line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#0E4DA4] via-[#D61F26] to-[#16803C]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              {/* Founder Photograph Column - Prominent & Compact on Mobile */}
              <div className="lg:col-span-5 p-4 sm:p-7 lg:p-10 flex flex-col items-center justify-center bg-[#EAF1FA]/40 border-b lg:border-b-0 lg:border-r border-[#D4DFEE]">
                <div className="relative w-full max-w-[210px] sm:max-w-[320px] lg:max-w-[380px] aspect-square rounded-2xl overflow-hidden shadow-md sm:shadow-lg border-3 sm:border-4 border-white ring-1 ring-[#D4DFEE] group">
                  <img
                    src="/founder_k_kalimuthu.jpg"
                    alt={`${t('founderName')} - ${t('founderDesignation')}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  {/* Verified badge */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 bg-white/95 backdrop-blur-md rounded-lg sm:rounded-xl py-1.5 px-2.5 sm:py-2 sm:px-3.5 border border-[#D4DFEE] shadow-xs flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs font-semibold text-[#0B1D3A] tracking-tight truncate">
                      SGPH Namakkal
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#16803C]">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#16803C] animate-pulse" />
                      {t('founderActive')}
                    </span>
                  </div>
                </div>

                {/* Credential Badges */}
                <div className="w-full max-w-[210px] sm:max-w-[320px] lg:max-w-[380px] mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#D4DFEE] flex items-center justify-around text-center">
                  <div>
                    <span className="block font-serif text-lg sm:text-xl font-bold text-[#0E4DA4]">28+</span>
                    <span className="text-[11px] sm:text-xs text-[#485A72] font-medium">{t('founderExp')}</span>
                  </div>
                  <div className="w-px h-6 sm:h-8 bg-[#D4DFEE]" />
                  <div>
                    <span className="block font-serif text-lg sm:text-xl font-bold text-[#16803C]">100%</span>
                    <span className="text-[11px] sm:text-xs text-[#485A72] font-medium">{t('founderStock')}</span>
                  </div>
                </div>
              </div>

              {/* Founder Information & Concise Introduction Column */}
              <div className="lg:col-span-7 p-4 sm:p-8 lg:p-12 flex flex-col justify-center">
                <div>
                  {/* Prominent Name & Designation (In English: K. Kalimuthu; In Tamil: கே. காளிமுத்து. Shop name is ALWAYS in Tamil) */}
                  <div className="mb-3 sm:mb-4">
                    <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#0E4DA4]/10 text-[#0E4DA4] text-[11px] sm:text-xs font-semibold tracking-wide uppercase mb-1.5">
                      {t('founderProfileTag')}
                    </div>
                    {/* Founder Name */}
                    <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0B1D3A] tracking-tight">
                      {t('founderName')}
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg font-semibold text-[#0E4DA4] mt-1 flex items-center gap-2 flex-wrap">
                      <span>{t('founderDesignation')}</span>
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#16803C]" />
                      <span className="text-[#64748B] font-normal text-xs sm:text-sm">{STORE_INFO.name}</span>
                    </p>
                  </div>

                  {/* Concise Introduction */}
                  <p className="mt-3 text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed">
                    {t('founderBio')}
                  </p>

                  {/* Accents / Key Highlights matching brand logo colors */}
                  <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#EAF1FA] border border-[#D4DFEE] text-[11px] sm:text-xs font-medium text-[#0E4DA4]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0E4DA4]" /> {t('founderPill1')}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F0FAF2] border border-[#C8E8D2] text-[11px] sm:text-xs font-medium text-[#16803C]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16803C]" /> {t('founderPill2')}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FDF2F2] border border-[#F8D2D4] text-[11px] sm:text-xs font-medium text-[#D61F26]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D61F26]" /> {t('founderPill3')}
                    </span>
                  </div>
                </div>

                {/* Share Founder Details Action Section */}
                <div className="mt-5 pt-4 sm:mt-8 sm:pt-6 border-t border-[#D4DFEE] relative" ref={shareMenuRef}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                    <div>
                      <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#7386A0]">
                        {t('shareFounderHeader')}
                      </p>
                      <p className="text-xs sm:text-sm text-[#485A72] font-medium">
                        {t('shareFounderSub')}
                      </p>
                    </div>

                    {/* Prominent Share Button */}
                    <button
                      type="button"
                      onClick={() => setIsShareOpen(!isShareOpen)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0E4DA4] hover:bg-[#093678] active:scale-[0.98] transition-all shadow-md shadow-[#0E4DA4]/20 cursor-pointer whitespace-nowrap self-stretch sm:self-auto"
                      aria-expanded={isShareOpen}
                      aria-haspopup="true"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>{t('shareFounderBtn')}</span>
                    </button>
                  </div>

                  {/* Share Menu Popover / Actions */}
                  {isShareOpen && (
                    <div className="mt-4 p-4 rounded-2xl bg-[#F6F9FC] border border-[#D4DFEE] shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#D4DFEE]">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#0B1D3A]">
                          {t('shareVia')}
                        </span>
                        <button
                          type="button"
                          onClick={() => setIsShareOpen(false)}
                          className="text-xs text-[#7386A0] hover:text-[#0B1D3A] cursor-pointer"
                        >
                          ✕ {t('closeBtn')}
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {/* 1. WhatsApp Share */}
                        <button
                          type="button"
                          onClick={handleWhatsAppShare}
                          className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-white border border-[#D5EBD9] hover:bg-[#F0FAF2] hover:border-[#25D366] text-left transition-all cursor-pointer group shadow-xs hover:shadow-sm"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#25D366]/15 text-[#16803C] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <MessageCircle className="w-4 h-4 fill-current" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="block text-xs font-semibold text-[#0B1D3A]">{t('shareWhatsApp')}</span>
                            <span className="block text-[11px] text-[#55694A] truncate">{t('shareWhatsAppSub')}</span>
                          </div>
                        </button>

                        {/* 2. Copy Details */}
                        <button
                          type="button"
                          onClick={handleCopyDetails}
                          className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-white border border-[#D4DFEE] hover:bg-[#EAF1FA] hover:border-[#0E4DA4] text-left transition-all cursor-pointer group shadow-xs hover:shadow-sm"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#0E4DA4]/10 text-[#0E4DA4] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            {copiedState === 'details' ? (
                              <Check className="w-4 h-4 text-[#16803C]" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="block text-xs font-semibold text-[#0B1D3A]">
                              {copiedState === 'details' ? t('copiedText') : t('copyDetails')}
                            </span>
                            <span className="block text-[11px] text-[#5A6E85] truncate">{t('copyDetailsSub')}</span>
                          </div>
                        </button>

                        {/* 3. Share Link */}
                        <button
                          type="button"
                          onClick={handleShareLink}
                          className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-white border border-[#D4DFEE] hover:bg-[#EAF1FA] hover:border-[#0B1D3A] text-left transition-all cursor-pointer group shadow-xs hover:shadow-sm"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#0B1D3A]/10 text-[#0B1D3A] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            {copiedState === 'link' ? (
                              <Check className="w-4 h-4 text-[#16803C]" />
                            ) : (
                              <ExternalLink className="w-4 h-4" />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="block text-xs font-semibold text-[#0B1D3A]">
                              {copiedState === 'link' ? t('linkCopiedText') : t('shareLink')}
                            </span>
                            <span className="block text-[11px] text-[#7386A0] truncate">{t('shareLinkSub')}</span>
                          </div>
                        </button>
                      </div>

                      {/* Toast Feedback */}
                      {copiedState && (
                        <div className="mt-3 p-2.5 rounded-xl bg-[#16803C]/10 border border-[#16803C]/20 text-[#16803C] text-xs font-medium flex items-center justify-center gap-2">
                          <Check className="w-4 h-4 shrink-0" />
                          <span>
                            {copiedState === 'details'
                              ? t('copiedSuccessToast')
                              : t('linkCopiedSuccessToast')}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Why Choose Us Section */}
      <section className="py-8 sm:py-14 lg:py-20 bg-white border-b border-[#D4DFEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl mb-6 sm:mb-10"
          >
            <p className="text-xs sm:text-sm font-semibold text-[#0E4DA4] mb-1 sm:mb-2">{t('whyTitle')}</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0B1D3A] tracking-tight [text-wrap:balance]">
              {t('whyHeading')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = item.icon;
              const cardThemes = [
                { iconColor: 'text-[#0E4DA4]', iconBg: 'bg-[#EAF1FA]', borderHover: 'hover:border-[#0E4DA4]', shadow: 'hover:shadow-[0_8px_20px_rgba(14,77,164,0.08)]' },
                { iconColor: 'text-[#16803C]', iconBg: 'bg-[#F0FAF2]', borderHover: 'hover:border-[#16803C]', shadow: 'hover:shadow-[0_8px_20px_rgba(22,128,60,0.08)]' },
                { iconColor: 'text-[#D61F26]', iconBg: 'bg-[#FDF2F2]', borderHover: 'hover:border-[#D61F26]', shadow: 'hover:shadow-[0_8px_20px_rgba(214,31,38,0.08)]' },
                { iconColor: 'text-[#0E4DA4]', iconBg: 'bg-[#EAF1FA]', borderHover: 'hover:border-[#0E4DA4]', shadow: 'hover:shadow-[0_8px_20px_rgba(14,77,164,0.08)]' },
                { iconColor: 'text-[#16803C]', iconBg: 'bg-[#F0FAF2]', borderHover: 'hover:border-[#16803C]', shadow: 'hover:shadow-[0_8px_20px_rgba(22,128,60,0.08)]' },
                { iconColor: 'text-[#D61F26]', iconBg: 'bg-[#FDF2F2]', borderHover: 'hover:border-[#D61F26]', shadow: 'hover:shadow-[0_8px_20px_rgba(214,31,38,0.08)]' },
              ];
              const theme = cardThemes[index % cardThemes.length];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.12 }}
                  transition={{
                    duration: 0.42,
                    delay: index * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`p-4 sm:p-6 rounded-xl bg-[#F6F9FC] border border-[#D4DFEE] ${theme.borderHover} ${theme.shadow} hover:-translate-y-0.5 transition-all`}
                >
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg ${theme.iconBg} ${theme.iconColor} flex items-center justify-center mb-3 shadow-2xs`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-[#0B1D3A] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#485A72] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#E4EEF9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6"
          >
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#0B1D3A] mb-1">
                {t('readyInspect')}
              </h3>
              <p className="text-xs sm:text-sm text-[#485A72]">
                {t('readyInspectSub')}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-[#F6F9FC] bg-[#0E4DA4] rounded-lg hover:bg-[#093678] transition-colors whitespace-nowrap flex-1 sm:flex-initial"
              >
                <span>{t('browseProductsBtn')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-[#0B1D3A] bg-[#F6F9FC] border border-[#D4DFEE] rounded-lg hover:bg-[#E4EEF9] transition-colors whitespace-nowrap flex-1 sm:flex-initial"
              >
                {t('contactShowroomBtn')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
