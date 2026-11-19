import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STORE_INFO } from '../data/catalog';
import { useLanguage } from '../context/LanguageContext';

export function FloatingWhatsApp() {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const defaultMessage =
    language === 'ta'
      ? `வணக்கம் ${STORE_INFO.name}, எனக்கு தயாரிப்பு மற்றும் விலை விவரங்கள் தேவை.`
      : `Hello ${STORE_INFO.name}, I would like to enquire about your products and pricing.`;

  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <aside
      aria-label="WhatsApp Contact"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center group select-none"
    >
      {/* Speech Bubble Tooltip (Desktop Hover) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="hidden sm:flex flex-col mr-3 bg-[#0B1D3A] text-white py-2 px-3.5 rounded-2xl shadow-2xl border border-white/10 whitespace-nowrap pointer-events-none"
          >
            <span className="text-xs font-semibold">
              {language === 'ta' ? 'வாட்ஸ்அப்பில் தொடர்புகொள்க' : 'Chat with us on WhatsApp'}
            </span>
            <span className="text-[11px] text-[#25D366] font-medium tabular-nums">
              {STORE_INFO.phoneDisplay}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Official WhatsApp Floating Icon Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.25,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="relative block rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.65)] transition-all duration-300 cursor-pointer"
      >
        {/* Subtle breathing radar ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        {/* WhatsApp Official Vector Graphic */}
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-13 h-13 sm:w-15 sm:h-15 relative z-10 block"
          aria-hidden="true"
        >
          {/* WhatsApp Brand Green Circle */}
          <circle cx="32" cy="32" r="30" fill="#25D366" />
          {/* Subtle 3D gradient overlay */}
          <circle cx="32" cy="32" r="30" fill="url(#wa_grad)" fillOpacity="0.15" />
          {/* Pure White WhatsApp Handset & Speech Bubble */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32 13C21.507 13 13 21.507 13 32C13 35.653 14.031 39.066 15.818 41.963L14 48.5L20.732 46.732C24.073 48.572 27.915 49.625 32 49.625C42.493 49.625 51 41.118 51 30.625C51 20.132 42.493 13 32 13ZM42.762 39.113C42.284 40.457 40.394 41.613 39.115 41.887C38.241 42.072 37.113 42.221 33.262 40.625C28.339 38.583 25.151 33.581 24.906 33.255C24.668 32.929 22.915 30.595 22.915 28.179C22.915 25.763 24.144 24.584 24.645 24.068C25.06 23.642 25.743 23.445 26.407 23.445C26.623 23.445 26.816 23.456 26.987 23.466C27.488 23.488 27.741 23.518 28.07 24.307C28.486 25.306 29.499 27.78 29.625 28.04C29.751 28.3 29.878 28.653 29.707 28.988C29.543 29.331 29.409 29.471 29.165 29.757C28.92 30.043 28.69 30.258 28.437 30.564C28.207 30.832 27.947 31.121 28.229 31.607C28.511 32.086 29.483 33.677 30.924 34.958C32.779 36.61 34.301 37.167 34.835 37.389C35.236 37.556 35.711 37.519 36.008 37.204C36.386 36.796 36.853 36.105 37.328 35.437C37.67 34.955 38.108 34.895 38.561 35.063C39.022 35.225 41.479 36.44 41.984 36.693C42.489 36.945 42.823 37.072 42.949 37.289C43.068 37.504 43.068 38.265 42.762 39.113Z"
            fill="white"
          />
          <defs>
            <linearGradient id="wa_grad" x1="10" y1="10" x2="54" y2="54" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="black" />
            </linearGradient>
          </defs>
        </svg>
      </motion.a>
    </aside>
  );
}
