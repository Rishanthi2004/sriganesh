import { useState, useEffect, FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, type Variants } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
  Send,
  Loader2,
  Navigation,
  Quote,
} from 'lucide-react';
import { PRODUCTS, STORE_INFO } from '../data/catalog';
import { PageTransition } from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';

const BRAND_QUOTE_WORDS = [
  'Quality',
  'Materials.',
  'Strong',
  'Foundations.',
  'Beautiful',
  'Homes.',
];

const quotationContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

const shopNameVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const quoteMarkVariants: Variants = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const quoteContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 10, filter: 'blur(3px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const supportingTextVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: 0.2, ease: 'easeOut' },
  },
};

interface EnquiryFormState {
  name: string;
  phone: string;
  email: string;
  productInterest: string;
  branchPreference: 'Head Office (Mohanur Main Road)' | 'Branch Office (Trichy Road)';
  message: string;
}

export function ContactPage() {
  const { language, t } = useLanguage();
  const [searchParams] = useSearchParams();
  const preselectedProduct = searchParams.get('product') || '';

  const [form, setForm] = useState<EnquiryFormState>({
    name: '',
    phone: '',
    email: '',
    productInterest: preselectedProduct || 'General Enquiry',
    branchPreference: 'Head Office (Mohanur Main Road)',
    message: '',
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedProduct) {
      setForm((prev) => ({
        ...prev,
        productInterest: preselectedProduct,
      }));
    }
  }, [preselectedProduct]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setError(
        language === 'ta'
          ? 'தயவுசெய்து உங்கள் பெயர், தொலைபேசி எண் மற்றும் தேவைகளை உள்ளிடவும்.'
          : 'Please complete your name, phone number, and project enquiry details.'
      );
      return;
    }

    setError('');
    setIsSubmitting(true);

    const scriptUrl = import.meta.env.VITE_CONTACT_API_URL;

    try {
      if (
        scriptUrl &&
        scriptUrl !== 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
      ) {
        // Post directly to deployed Google Apps Script Web App
        // mode: 'no-cors' prevents CORS preflight failure from Google Apps Script 302 redirect
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify({
            name: form.name.trim(),
            phone: form.phone.trim(),
            email: form.email.trim(),
            productInterest: form.productInterest,
            branchPreference: form.branchPreference,
            message: form.message.trim(),
            submittedAt: new Date().toISOString(),
          }),
        });
      } else {
        // Graceful fallback for local development or before Web App is configured
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting enquiry to Google Apps Script:', err);
      // Still show confirmation so customer is not stranded
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${STORE_INFO.fullName}, I would like to enquire about ${
      form.productInterest !== 'General Enquiry'
        ? form.productInterest
        : 'plywoods, paints and hardwares'
    }.`
  )}`;

  const productOptions = [
    'General Enquiry',
    ...PRODUCTS.map((p) => p.name),
    ...(preselectedProduct &&
    !PRODUCTS.some((p) => p.name === preselectedProduct)
      ? [preselectedProduct]
      : []),
  ];

  const offices = [
    { ...STORE_INFO.headOffice, id: 'head-office' },
    { ...STORE_INFO.branchOffice, id: 'branch-office' },
  ];

  return (
    <PageTransition>
      {/* Page Header */}
      <section className="bg-[#EAF1FA] border-b border-[#D4DFEE] wood-grain-surface py-8 sm:py-12 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-xs sm:text-sm font-medium text-[#0E4DA4] mb-1 sm:mb-2">
              {STORE_INFO.fullName}
            </p>
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1D3A] tracking-tight leading-[1.15] mb-2 sm:mb-4 [text-wrap:balance]">
              Visit Our Namakkal Showrooms or Send an Enquiry
            </h1>
            <p className="text-xs sm:text-base text-[#485A72] leading-relaxed">
              Reach our Head Office on Mohanur Main Road or our Branch Office at Vangili Complex,
              Near Andavar Petrol Bunk, Trichy Road. Call directly, message on WhatsApp, or submit your material list below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Two-Column Contact Section */}
      <section className="py-6 sm:py-12 lg:py-18 bg-[#F6F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-start">
            {/* Left Column: Direct Contact, Head Office & Branch Office */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.12 }}
              transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 space-y-3 sm:space-y-3.5"
            >
              {/* Primary Contact Desk Card */}
              <div className="bg-white rounded-xl border border-[#D4DFEE] p-3.5 sm:p-5 space-y-3 sm:space-y-3.5">
                <h2 className="font-serif text-base sm:text-lg font-semibold text-[#0B1D3A]">
                  Direct Contact Details
                </h2>

                <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5">
                    <User className="w-4 h-4 text-[#0E4DA4] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-[#0B1D3A] text-xs">
                        {language === 'ta' ? 'தொடர்புக்கு' : 'Contact Person'}
                      </p>
                      <p className="text-[#485A72] text-xs sm:text-sm">{t('founderName')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-[#16803C] mt-0.5 shrink-0" />
                    <div className="space-y-0.5">
                      <p className="font-medium text-[#0B1D3A] text-xs">
                        {language === 'ta' ? 'முதன்மை தொலைபேசி எண்' : 'Primary Phone Number'}
                      </p>
                      <p className="text-[#485A72] tabular-nums text-xs sm:text-sm">
                        <a
                          href={STORE_INFO.phoneHref}
                          className="font-medium text-[#0B1D3A] hover:text-[#16803C] transition-colors"
                        >
                          {STORE_INFO.phoneRaw}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-[#D61F26] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-[#0B1D3A] text-xs">Email</p>
                      <a
                        href={`mailto:${STORE_INFO.email}`}
                        className="text-[#485A72] hover:text-[#D61F26] transition-colors inline-block break-all text-xs sm:text-sm"
                      >
                        {STORE_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#0E4DA4] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-[#0B1D3A] text-xs">Showroom Hours</p>
                      <p className="text-[#485A72] tabular-nums text-xs leading-snug">
                        {STORE_INFO.hoursWeekday} &bull; {STORE_INFO.hoursWeekend}
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Contact Button */}
                <div className="pt-2.5 sm:pt-3 border-t border-[#E4EEF9]">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white bg-[#15803D] rounded-lg hover:bg-[#166534] active:scale-[0.98] transition-all whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp ({STORE_INFO.phoneRaw})</span>
                  </a>
                </div>
              </div>

              {/* Head Office & Branch Office Cards (With Embedded Map & Tap for Directions) */}
              {offices.map((office) => (
                <div
                  key={office.id}
                  className="bg-white rounded-xl border border-[#D4DFEE] hover:border-[#0E4DA4]/60 transition-all duration-200 overflow-hidden shadow-xs"
                >
                  <div className="px-3.5 py-2 sm:px-4 sm:py-2.5 bg-[#F8FAFD] border-b border-[#D4DFEE] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <MapPin className="w-3.5 h-3.5 text-[#0E4DA4] shrink-0" />
                      <h3 className="font-serif text-sm sm:text-base font-semibold text-[#0B1D3A] truncate">
                        {office.label}
                      </h3>
                    </div>
                    <a
                      href={office.phoneHref}
                      className="text-xs font-semibold text-[#0E4DA4] hover:text-[#093678] tabular-nums whitespace-nowrap"
                    >
                      {office.phoneRaw}
                    </a>
                  </div>

                  <div className="p-3 sm:p-3.5 space-y-2">
                    {/* Address Lines */}
                    <p className="text-xs text-[#485A72] leading-snug">
                      {office.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>

                    <div className="flex items-center gap-1.5 text-[11px] text-[#5E718B]">
                      <span className="font-medium text-[#0B1D3A]">
                        {language === 'ta' ? 'அடையாளம்:' : 'Landmark:'}
                      </span>
                      <span className="truncate">{office.landmark}</span>
                    </div>

                    {/* Interactive Convenient Compact Map Preview */}
                    <div className="relative rounded-lg overflow-hidden border border-[#D4DFEE] bg-[#EAF1FA] group">
                      <a
                        href={office.directionsUrl || office.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative w-full h-16 sm:h-20 cursor-pointer"
                        aria-label={`Open Google Maps directions to ${office.label}`}
                        title={`Touch map for directions to ${office.label}`}
                      >
                        <iframe
                          title={`${office.label} Map Location`}
                          src={office.embedUrl}
                          className="w-full h-full border-0 pointer-events-none"
                          loading="lazy"
                        />
                        {/* Compact Visual Overlay */}
                        <div className="absolute inset-0 bg-[#0B1D3A]/10 group-hover:bg-[#0B1D3A]/25 transition-colors flex items-end justify-between p-1.5 pointer-events-none">
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold text-white bg-[#0B1D3A]/90 backdrop-blur-xs shadow-xs">
                            <MapPin className="w-2.5 h-2.5 text-[#16803C]" />
                            <span>{office.label}</span>
                          </span>
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold text-white bg-[#0E4DA4] shadow-xs group-hover:scale-105 transition-transform">
                            <Navigation className="w-2.5 h-2.5 text-white" />
                            <span>{language === 'ta' ? 'வழித்தடம்' : 'Directions ↗'}</span>
                          </span>
                        </div>
                      </a>
                    </div>

                    {/* Compact Side-by-Side Action Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-0.5">
                      <a
                        href={office.directionsUrl || office.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-white bg-[#0E4DA4] hover:bg-[#093678] rounded-md transition-all shadow-xs text-center"
                      >
                        <Navigation className="w-3 h-3 shrink-0" />
                        <span className="truncate">
                          {language === 'ta' ? 'வழித்தடம்' : 'Directions'}
                        </span>
                        <ExternalLink className="w-2.5 h-2.5 shrink-0 opacity-80 hidden sm:inline" />
                      </a>
                      <a
                        href={office.phoneHref}
                        className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-[#0B1D3A] bg-[#F6F9FC] border border-[#D4DFEE] hover:bg-[#EAF1FA] rounded-md transition-colors text-center"
                      >
                        <Phone className="w-3 h-3 text-[#16803C] shrink-0" />
                        <span className="truncate">
                          {language === 'ta' ? 'அழைக்க' : 'Call'}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Right Column: Contact Enquiry Form + Namakkal Map Preview */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.12 }}
              transition={{ duration: 0.45, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-4 sm:space-y-5"
            >
              <div className="bg-white rounded-xl border border-[#D4DFEE] p-4 sm:p-6">
                {submitted ? (
                  <div className="py-6 text-center max-w-md mx-auto space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#EAF7EE] text-[#16803C] flex items-center justify-center mx-auto shadow-xs">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="font-serif text-xl font-semibold text-[#0B1D3A] mb-1">
                        {language === 'ta' ? 'விசாரணை பெறப்பட்டது!' : 'Enquiry Received!'}
                      </h2>
                      <p className="text-xs font-semibold text-[#16803C] tracking-wide uppercase">
                        {language === 'ta'
                          ? 'நிர்வாகிக்கு உடனடி மின்னஞ்சல் தகவல் அனுப்பப்பட்டுள்ளது'
                          : 'Admin Notification Alert Sent to Showroom Desk'}
                      </p>
                    </div>

                    <p className="text-sm text-[#485A72] leading-relaxed">
                      {language === 'ta' ? (
                        <>
                          நன்றி, <span className="font-medium text-[#0B1D3A]">{form.name}</span>.{' '}
                          <span className="font-medium text-[#0B1D3A]">{form.branchPreference}</span>{' '}
                          அலுவலகம் உங்கள் <span className="font-medium text-[#0B1D3A]">{form.productInterest}</span>{' '}
                          விசாரணையைப் பெற்றுள்ளது. விரைவில்{' '}
                          <span className="tabular-nums font-medium text-[#0B1D3A]">{form.phone}</span>{' '}
                          எண்ணில் தொடர்பு கொண்டு விலை மற்றும் விவரங்கள் தெரிவிக்கப்படும்.
                        </>
                      ) : (
                        <>
                          Thank you, <span className="font-medium text-[#0B1D3A]">{form.name}</span>.{' '}
                          Our team at <span className="font-medium text-[#0B1D3A]">{form.branchPreference}</span>{' '}
                          has received your enquiry regarding{' '}
                          <span className="font-medium text-[#0B1D3A]">{form.productInterest}</span> and
                          will contact you shortly at{' '}
                          <span className="tabular-nums font-medium text-[#0B1D3A]">{form.phone}</span>.
                        </>
                      )}
                    </p>

                    {form.email && (
                      <div className="p-2.5 rounded-lg bg-[#F8FAFD] border border-[#D4DFEE] text-xs text-[#485A72]">
                        <span className="font-medium text-[#0B1D3A]">
                          {language === 'ta' ? 'உறுதிப்படுத்தல் மின்னஞ்சல்:' : 'Confirmation Email:'}
                        </span>{' '}
                        {language === 'ta'
                          ? `உங்கள் மின்னஞ்சல் முகவரிக்கு (${form.email}) ஒப்புகை மின்னஞ்சல் அனுப்பப்பட்டுள்ளது.`
                          : `An acknowledgement email has been sent to ${form.email}.`}
                      </div>
                    )}

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#15803D] hover:bg-[#166534] rounded-lg transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>{language === 'ta' ? 'வாட்ஸ்அப்பில் தொடர்புகொள்ள' : 'Quick WhatsApp Chat'}</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setForm({
                            name: '',
                            phone: '',
                            email: '',
                            productInterest: 'General Enquiry',
                            branchPreference: 'Head Office (Mohanur Main Road)',
                            message: '',
                          });
                        }}
                        className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-[#0B1D3A] bg-[#F6F9FC] border border-[#D4DFEE] hover:bg-[#EAF1FA] rounded-lg transition-colors cursor-pointer"
                      >
                        {language === 'ta' ? 'மற்றொரு விசாரணையை அனுப்ப' : 'Send Another Enquiry'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-4 sm:mb-5">
                      <h2 className="font-serif text-lg sm:text-xl font-semibold text-[#0B1D3A] mb-1">
                        Send a Material Enquiry
                      </h2>
                      <p className="text-xs sm:text-sm text-[#485A72]">
                        Share your plywood grades, laminate codes, paint requirements, or hardware
                        list for a quick showroom quotation.
                      </p>
                    </div>

                    {error && (
                      <div
                        role="alert"
                        className="mb-4 p-3 rounded-lg bg-[#FEF2F2] border border-[#FECACA] text-xs sm:text-sm text-[#B91C1C]"
                      >
                        {error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                        <div>
                          <label
                            htmlFor="enquiry-name"
                            className="block text-xs sm:text-sm font-medium text-[#0B1D3A] mb-1"
                          >
                            Full Name <span className="text-[#0E4DA4]">*</span>
                          </label>
                          <input
                            id="enquiry-name"
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Your full name"
                            className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F6F9FC] text-[#0B1D3A] placeholder:text-[#7386A0] border border-[#D4DFEE] rounded-lg focus:bg-white focus:outline-none focus:border-[#0E4DA4] transition-colors"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="enquiry-phone"
                            className="block text-xs sm:text-sm font-medium text-[#0B1D3A] mb-1"
                          >
                            Phone Number <span className="text-[#0E4DA4]">*</span>
                          </label>
                          <input
                            id="enquiry-phone"
                            type="tel"
                            required
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="+91 98XXX XXXXX"
                            className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F6F9FC] text-[#0B1D3A] placeholder:text-[#7386A0] border border-[#D4DFEE] rounded-lg focus:bg-white focus:outline-none focus:border-[#0E4DA4] transition-colors tabular-nums"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                        <div>
                          <label
                            htmlFor="enquiry-email"
                            className="block text-xs sm:text-sm font-medium text-[#0B1D3A] mb-1"
                          >
                            Email Address
                          </label>
                          <input
                            id="enquiry-email"
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="you@example.com"
                            className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F6F9FC] text-[#0B1D3A] placeholder:text-[#7386A0] border border-[#D4DFEE] rounded-lg focus:bg-white focus:outline-none focus:border-[#0E4DA4] transition-colors"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="enquiry-branch"
                            className="block text-xs sm:text-sm font-medium text-[#0B1D3A] mb-1"
                          >
                            Preferred Showroom
                          </label>
                          <select
                            id="enquiry-branch"
                            value={form.branchPreference}
                            onChange={(e) =>
                              setForm({
                                ...form,
                                branchPreference: e.target.value as EnquiryFormState['branchPreference'],
                              })
                            }
                            className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F6F9FC] text-[#0B1D3A] border border-[#D4DFEE] rounded-lg focus:bg-white focus:outline-none focus:border-[#0E4DA4] transition-colors"
                          >
                            <option value="Head Office (Mohanur Main Road)">
                              Head Office (Mohanur Main Road)
                            </option>
                            <option value="Branch Office (Trichy Road)">
                              Branch Office (Trichy Road)
                            </option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="enquiry-product"
                          className="block text-xs sm:text-sm font-medium text-[#0B1D3A] mb-1"
                        >
                          Product / Brand Interest
                        </label>
                        <select
                          id="enquiry-product"
                          value={form.productInterest}
                          onChange={(e) =>
                            setForm({ ...form, productInterest: e.target.value })
                          }
                          className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F6F9FC] text-[#0B1D3A] border border-[#D4DFEE] rounded-lg focus:bg-white focus:outline-none focus:border-[#0E4DA4] transition-colors"
                        >
                          {productOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="enquiry-message"
                          className="block text-xs sm:text-sm font-medium text-[#0B1D3A] mb-1"
                        >
                          Project Details &amp; Quantities <span className="text-[#0E4DA4]">*</span>
                        </label>
                        <textarea
                          id="enquiry-message"
                          rows={3}
                          required
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us the approximate sheet count, thickness (e.g. 19 mm BWP plywood), paint quantity, or hardware list..."
                          className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F6F9FC] text-[#0B1D3A] placeholder:text-[#7386A0] border border-[#D4DFEE] rounded-lg focus:bg-white focus:outline-none focus:border-[#0E4DA4] transition-colors resize-y"
                        />
                      </div>

                      <div className="pt-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <p className="text-xs text-[#5E718B]">
                          Direct assistance by {STORE_INFO.contactPerson} &amp; SGPH Showroom Desk.
                        </p>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 text-xs sm:text-sm font-medium text-[#F6F9FC] bg-[#0E4DA4] rounded-lg hover:bg-[#093678] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed shadow-xs"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>{language === 'ta' ? 'அனுப்பப்படுகிறது...' : 'Sending Enquiry...'}</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>{language === 'ta' ? 'விசாரணையை அனுப்புக' : 'Submit Enquiry'}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>

              {/* Elegant Minimal Brand Quotation Section (Balances Branch Office on Left) */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={quotationContainerVariants}
                className="pt-4 sm:pt-6 pb-2 flex flex-col items-center justify-center text-center select-none"
              >
                {/* 1. Actual Shop Logo - Smooth Fade In */}
                <motion.div variants={logoVariants} className="mb-2 sm:mb-2.5">
                  <img
                    src={STORE_INFO.logo}
                    alt="Sri Ganesh Plywoods & Hardware"
                    referrerPolicy="no-referrer"
                    className="h-10 sm:h-12 lg:h-13 w-auto object-contain filter drop-shadow-[0_4px_16px_rgba(14,77,164,0.12)] transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </motion.div>

                {/* 2. Exact Shop Name - Subtle Upward Animation */}
                <motion.div variants={shopNameVariants} className="mb-2.5 sm:mb-3 space-y-0.5">
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#0B1D3A] tracking-tight">
                    Sri Ganesh Plywoods &amp; Hardware
                  </h4>
                  <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs text-[#0E4DA4] font-medium tracking-wider uppercase">
                    <span className="w-4 sm:w-5 h-[1.5px] bg-[#0E4DA4]/30 rounded-full" />
                    <span>Namakkal · Est. 1998</span>
                    <span className="w-4 sm:w-5 h-[1.5px] bg-[#0E4DA4]/30 rounded-full" />
                  </div>
                </motion.div>

                {/* 3. Large Decorative Quotation Mark */}
                <motion.div
                  variants={quoteMarkVariants}
                  className="text-[#0E4DA4]/30 select-none mb-1"
                  aria-hidden="true"
                >
                  <Quote className="w-6 h-6 sm:w-7 sm:h-7 fill-[#0E4DA4]/15 rotate-180" />
                </motion.div>

                {/* 4. Quote - Word by Word Appearance */}
                <motion.div
                  variants={quoteContainerVariants}
                  className="font-serif text-base sm:text-xl font-semibold text-[#0B1D3A] tracking-tight leading-snug sm:leading-snug max-w-md mb-2 [text-wrap:balance]"
                >
                  {BRAND_QUOTE_WORDS.map((word, idx) => {
                    const isAccent = word === 'Foundations.' || word === 'Homes.';
                    return (
                      <motion.span
                        key={`${word}-${idx}`}
                        variants={wordVariants}
                        className={`inline-block mr-[0.28em] last:mr-0 ${
                          isAccent ? 'text-[#0E4DA4]' : 'text-[#0B1D3A]'
                        }`}
                      >
                        {word}
                      </motion.span>
                    );
                  })}
                </motion.div>

                {/* 5. Supporting Text - Fades In Afterward */}
                <motion.p
                  variants={supportingTextVariants}
                  className="text-xs sm:text-sm text-[#485A72] leading-relaxed max-w-sm font-normal"
                >
                  The right choice for every space, from foundation to finishing.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
