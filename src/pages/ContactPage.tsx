import { useState, useEffect, FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
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
} from 'lucide-react';
import { PRODUCTS, STORE_INFO } from '../data/catalog';
import { PageTransition } from '../components/PageTransition';

interface EnquiryFormState {
  name: string;
  phone: string;
  email: string;
  productInterest: string;
  branchPreference: 'Head Office (Mohanur Main Road)' | 'Branch Office (Trichy Road)';
  message: string;
}

export function ContactPage() {
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
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedProduct) {
      setForm((prev) => ({
        ...prev,
        productInterest: preselectedProduct,
      }));
    }
  }, [preselectedProduct]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setError('Please complete your name, phone number, and project enquiry details.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${STORE_INFO.fullName}, I would like to enquire about ${
      form.productInterest !== 'General Enquiry'
        ? form.productInterest
        : 'plywood, paints and hardware'
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

  const offices = [STORE_INFO.headOffice, STORE_INFO.branchOffice];

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
              {STORE_INFO.fullName}
            </p>
            <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-[#0B1D3A] tracking-tight leading-[1.12] mb-4 [text-wrap:balance]">
              Visit Our Namakkal Showrooms or Send an Enquiry
            </h1>
            <p className="text-base text-[#485A72] leading-relaxed">
              Reach our Head Office on Mohanur Main Road or our Branch Office at Vangili Complex,
              Trichy Road. Call directly, message on WhatsApp, or submit your material list below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Two-Column Contact Section */}
      <section className="py-12 lg:py-18 bg-[#F6F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Direct Contact, Head Office & Branch Office */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Primary Contact Desk Card */}
              <div className="bg-white rounded-xl border border-[#D4DFEE] p-6 sm:p-7 space-y-5">
                <h2 className="font-serif text-xl font-semibold text-[#0B1D3A]">
                  Direct Contact Details
                </h2>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3.5">
                    <User className="w-5 h-5 text-[#0E4DA4] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-[#0B1D3A]">Contact Person</p>
                      <p className="text-[#485A72] mt-0.5">{STORE_INFO.contactPerson}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-[#0E4DA4] mt-0.5 shrink-0" />
                    <div className="space-y-1">
                      <p className="font-medium text-[#0B1D3A]">Phone Numbers</p>
                      <p className="text-[#485A72] tabular-nums">
                        Primary:{' '}
                        <a
                          href={STORE_INFO.phoneHref}
                          className="font-medium text-[#0B1D3A] hover:text-[#0E4DA4] transition-colors"
                        >
                          {STORE_INFO.phoneRaw}
                        </a>
                      </p>
                      <p className="text-[#485A72] tabular-nums">
                        Head Office:{' '}
                        <a
                          href={STORE_INFO.headOffice.phoneHref}
                          className="font-medium text-[#0B1D3A] hover:text-[#0E4DA4] transition-colors"
                        >
                          {STORE_INFO.headOffice.phoneRaw}
                        </a>
                      </p>
                      <p className="text-[#485A72] tabular-nums">
                        Branch Office:{' '}
                        <a
                          href={STORE_INFO.branchOffice.phoneHref}
                          className="font-medium text-[#0B1D3A] hover:text-[#0E4DA4] transition-colors"
                        >
                          {STORE_INFO.branchOffice.phoneRaw}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-[#0E4DA4] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-[#0B1D3A]">Email</p>
                      <a
                        href={`mailto:${STORE_INFO.email}`}
                        className="text-[#485A72] hover:text-[#0E4DA4] transition-colors mt-0.5 inline-block break-all"
                      >
                        {STORE_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-[#0E4DA4] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-[#0B1D3A]">Showroom Hours</p>
                      <p className="text-[#485A72] tabular-nums mt-0.5">
                        {STORE_INFO.hoursWeekday}
                        <br />
                        {STORE_INFO.hoursWeekend}
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Contact Button */}
                <div className="pt-4 border-t border-[#E4EEF9]">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 text-sm font-medium text-white bg-[#15803D] rounded-lg hover:bg-[#166534] active:scale-[0.98] transition-all whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp ({STORE_INFO.phoneRaw})</span>
                  </a>
                </div>
              </div>

              {/* Head Office & Branch Office Cards with Google Maps Links */}
              {offices.map((office) => (
                <div
                  key={office.label}
                  className="bg-white rounded-xl border border-[#D4DFEE] overflow-hidden"
                >
                  <div className="px-6 py-4 bg-[#EAF1FA] border-b border-[#D4DFEE] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#0E4DA4] shrink-0" />
                      <h3 className="font-serif text-base font-semibold text-[#0B1D3A]">
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

                  <div className="p-6 space-y-4">
                    <p className="text-sm text-[#485A72] leading-relaxed">
                      {office.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>

                    <div className="pt-3 border-t border-[#EAF1FA] flex items-center justify-between gap-3">
                      <span className="text-xs text-[#5E718B] truncate">
                        {office.landmark}
                      </span>
                      <a
                        href={office.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#0B1D3A] bg-[#F6F9FC] border border-[#D4DFEE] rounded-lg hover:bg-[#0B1D3A] hover:text-[#F6F9FC] hover:border-[#0B1D3A] transition-colors whitespace-nowrap shrink-0"
                      >
                        <span>Open in Google Maps</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Right Column: Contact Enquiry Form + Namakkal Map Preview */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="bg-white rounded-xl border border-[#D4DFEE] p-6 sm:p-9">
                {submitted ? (
                  <div className="py-10 text-center max-w-md mx-auto">
                    <div className="w-12 h-12 rounded-full bg-[#E4EEF9] text-[#0E4DA4] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h2 className="font-serif text-2xl font-semibold text-[#0B1D3A] mb-2">
                      Enquiry Received
                    </h2>
                    <p className="text-sm text-[#485A72] leading-relaxed mb-6">
                      Thank you, <span className="font-medium text-[#0B1D3A]">{form.name}</span>.
                      Our team at <span className="font-medium text-[#0B1D3A]">{form.branchPreference}</span>{' '}
                      has received your enquiry regarding{' '}
                      <span className="font-medium text-[#0B1D3A]">{form.productInterest}</span> and
                      will contact you shortly at{' '}
                      <span className="tabular-nums font-medium text-[#0B1D3A]">{form.phone}</span>.
                    </p>
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
                      className="px-5 py-2.5 text-sm font-medium text-[#F6F9FC] bg-[#0B1D3A] rounded-lg hover:bg-[#0E4DA4] transition-colors cursor-pointer"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-7">
                      <h2 className="font-serif text-2xl font-semibold text-[#0B1D3A] mb-1.5">
                        Send a Material Enquiry
                      </h2>
                      <p className="text-sm text-[#485A72]">
                        Share your plywood grades, laminate codes, paint requirements, or hardware
                        list for a quick showroom quotation.
                      </p>
                    </div>

                    {error && (
                      <div
                        role="alert"
                        className="mb-6 p-3.5 rounded-lg bg-[#FEF2F2] border border-[#FECACA] text-sm text-[#B91C1C]"
                      >
                        {error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="enquiry-name"
                            className="block text-sm font-medium text-[#0B1D3A] mb-1.5"
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
                            className="w-full px-3.5 py-2.5 text-sm bg-[#F6F9FC] text-[#0B1D3A] placeholder:text-[#7386A0] border border-[#D4DFEE] rounded-lg focus:bg-white focus:outline-none focus:border-[#0E4DA4] transition-colors"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="enquiry-phone"
                            className="block text-sm font-medium text-[#0B1D3A] mb-1.5"
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
                            className="w-full px-3.5 py-2.5 text-sm bg-[#F6F9FC] text-[#0B1D3A] placeholder:text-[#7386A0] border border-[#D4DFEE] rounded-lg focus:bg-white focus:outline-none focus:border-[#0E4DA4] transition-colors tabular-nums"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="enquiry-email"
                            className="block text-sm font-medium text-[#0B1D3A] mb-1.5"
                          >
                            Email Address
                          </label>
                          <input
                            id="enquiry-email"
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="you@example.com"
                            className="w-full px-3.5 py-2.5 text-sm bg-[#F6F9FC] text-[#0B1D3A] placeholder:text-[#7386A0] border border-[#D4DFEE] rounded-lg focus:bg-white focus:outline-none focus:border-[#0E4DA4] transition-colors"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="enquiry-branch"
                            className="block text-sm font-medium text-[#0B1D3A] mb-1.5"
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
                            className="w-full px-3.5 py-2.5 text-sm bg-[#F6F9FC] text-[#0B1D3A] border border-[#D4DFEE] rounded-lg focus:bg-white focus:outline-none focus:border-[#0E4DA4] transition-colors"
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
                          className="block text-sm font-medium text-[#0B1D3A] mb-1.5"
                        >
                          Product / Brand Interest
                        </label>
                        <select
                          id="enquiry-product"
                          value={form.productInterest}
                          onChange={(e) =>
                            setForm({ ...form, productInterest: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 text-sm bg-[#F6F9FC] text-[#0B1D3A] border border-[#D4DFEE] rounded-lg focus:bg-white focus:outline-none focus:border-[#0E4DA4] transition-colors"
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
                          className="block text-sm font-medium text-[#0B1D3A] mb-1.5"
                        >
                          Project Details &amp; Quantities <span className="text-[#0E4DA4]">*</span>
                        </label>
                        <textarea
                          id="enquiry-message"
                          rows={5}
                          required
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us the approximate sheet count, thickness (e.g. 19 mm BWP plywood), paint quantity, or hardware list..."
                          className="w-full px-3.5 py-2.5 text-sm bg-[#F6F9FC] text-[#0B1D3A] placeholder:text-[#7386A0] border border-[#D4DFEE] rounded-lg focus:bg-white focus:outline-none focus:border-[#0E4DA4] transition-colors resize-y"
                        />
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <p className="text-xs text-[#5E718B]">
                          Direct assistance by {STORE_INFO.contactPerson} &amp; SGPH Showroom Desk.
                        </p>
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[#F6F9FC] bg-[#0E4DA4] rounded-lg hover:bg-[#093678] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
                        >
                          <Send className="w-4 h-4" />
                          <span>Submit Enquiry</span>
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>

              {/* Namakkal Showrooms Location Schematic Card */}
              <div className="bg-white rounded-xl border border-[#D4DFEE] overflow-hidden">
                <div className="relative h-52 bg-[#E4EEF9] wood-grain-surface p-6 flex items-center justify-center overflow-hidden">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 600 210"
                    className="absolute inset-0 w-full h-full opacity-55 pointer-events-none"
                    fill="none"
                  >
                    <path d="M0 60 H600 M0 135 H600" stroke="#B9CDE5" strokeWidth="2" />
                    <path d="M120 0 V210 M300 0 V210 M480 0 V210" stroke="#B9CDE5" strokeWidth="2" />
                    <path d="M40 165 L230 105 L410 105 L560 55" stroke="#7FA3CF" strokeWidth="5" />
                  </svg>

                  <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
                    <div className="bg-white/95 backdrop-blur-xs border border-[#D4DFEE] rounded-xl p-4 shadow-xs flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#0E4DA4] text-[#F6F9FC] flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-serif text-sm font-semibold text-[#0B1D3A]">
                          SGPH Head Office
                        </p>
                        <p className="text-xs text-[#485A72] mt-0.5">
                          Mohanur Main Road, Near Iyappan Kovil, Namakkal
                        </p>
                      </div>
                    </div>

                    <div className="bg-white/95 backdrop-blur-xs border border-[#D4DFEE] rounded-xl p-4 shadow-xs flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#0B1D3A] text-[#F6F9FC] flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-serif text-sm font-semibold text-[#0B1D3A]">
                          SGPH Branch Office
                        </p>
                        <p className="text-xs text-[#485A72] mt-0.5">
                          Vangili Complex, Trichy Road, Namakkal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
