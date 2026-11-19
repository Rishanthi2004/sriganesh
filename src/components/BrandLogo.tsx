interface BrandLogoProps {
  brandId: string;
  compact?: boolean;
}

export function BrandLogo({ brandId, compact = false }: BrandLogoProps) {
  const heightClass = compact ? 'h-9' : 'h-12';

  switch (brandId) {
    case 'fineply':
      return (
        <div className={`inline-flex items-center gap-2.5 ${heightClass}`} aria-label="FinePly NX">
          <svg viewBox="0 0 36 32" className="h-7 w-auto shrink-0" aria-hidden="true">
            <rect x="2" y="2" width="10" height="8" rx="1" fill="#5CB85C" />
            <rect x="14" y="2" width="10" height="8" rx="1" fill="#2B5B84" />
            <rect x="26" y="2" width="8" height="8" rx="1" fill="#8BC34A" />
            <rect x="2" y="12" width="10" height="8" rx="1" fill="#3B873E" />
            <rect x="14" y="12" width="10" height="8" rx="1" fill="#4CAF50" />
            <rect x="2" y="22" width="10" height="8" rx="1" fill="#2B5B84" />
          </svg>
          <div className="leading-none">
            <div className="flex items-baseline gap-0.5 tracking-tight">
              <span className="font-sans text-[17px] font-extrabold text-[#2E8B57]">FINE</span>
              <span className="font-sans text-[17px] font-extrabold text-[#1F3A5F]">PLY</span>
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[7px] font-semibold tracking-wider text-[#2E8B57]">
                FOREVER &amp; EVER
              </span>
              <span className="text-[9px] font-extrabold text-[#1F3A5F]">NX</span>
            </div>
          </div>
        </div>
      );

    case 'greenply':
      return (
        <div className={`inline-flex items-center gap-2 ${heightClass}`} aria-label="Greenply Industries Limited">
          <svg viewBox="0 0 32 32" className="h-7 w-auto shrink-0" aria-hidden="true">
            <path
              d="M16 3C9 7 5 14 7 22c5 2 14-1 18-8 2-4 1-8-9-11z"
              fill="#2E7D32"
            />
            <path d="M10 21c3-4 7-8 12-11" stroke="#FAF7F2" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          </svg>
          <div className="leading-none">
            <div className="font-serif italic text-[21px] font-bold text-[#2E7D32] tracking-tight">
              Greenply
            </div>
            <div className="text-[8px] font-semibold tracking-wide text-[#4E5A50] mt-0.5">
              Industries Limited
            </div>
          </div>
        </div>
      );

    case 'centuryply':
      return (
        <div className={`inline-flex items-center gap-2 ${heightClass}`} aria-label="CenturyPly">
          <svg viewBox="0 0 36 36" className="h-7 w-auto shrink-0" aria-hidden="true">
            <g fill="#D32F2F">
              <polygon points="18,2 23,11 18,15 13,11" />
              <polygon points="33,13 24,18 20,14 25,8" />
              <polygon points="28,31 20,24 22,19 31,21" />
              <polygon points="8,31 14,19 17,24 12,31" />
              <polygon points="3,13 11,8 16,14 12,18" />
            </g>
          </svg>
          <span className="font-sans text-[17px] font-extrabold tracking-tight text-[#C62828]">
            CENTURYPLY
          </span>
        </div>
      );

    case 'asianpaints':
      return (
        <div className={`inline-flex items-center gap-2 ${heightClass}`} aria-label="Asian Paints">
          <svg viewBox="0 0 42 30" className="h-7 w-auto shrink-0" aria-hidden="true">
            <path
              d="M16 15c0 4.5-3.3 8-7.5 8S2 19.5 2 15s3.3-8 7.5-8c2.6 0 4.8 1.2 6.5 3.6"
              fill="none"
              stroke="#E65100"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M20 7v18M20 13c1.6-3.6 4.4-6 8.2-6 4.4 0 7.8 3.4 7.8 7.8s-3.4 7.8-7.8 7.8c-3.2 0-5.8-1.6-7.2-4.2"
              fill="none"
              stroke="#6A1B9A"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-sans text-[18px] font-bold tracking-tight text-[#B71C1C]">
            asianpaints
          </span>
        </div>
      );

    case 'birla-opus':
      return (
        <div className={`inline-flex items-center gap-2 ${heightClass}`} aria-label="Birla Opus">
          <div className="leading-none">
            <div className="text-[8px] font-bold tracking-[0.2em] text-[#4E4A47]">BIRLA</div>
            <div className="font-sans text-[21px] font-extrabold tracking-tight text-[#2B2724] -mt-0.5">
              opus
            </div>
          </div>
          <svg viewBox="0 0 32 30" className="h-7 w-auto shrink-0" aria-hidden="true">
            <circle cx="9" cy="9" r="5" fill="#F59E0B" />
            <circle cx="22" cy="9" r="6" fill="#43A047" />
            <circle cx="11" cy="21" r="6" fill="#5E35B1" />
            <circle cx="22" cy="21" r="3.5" fill="#039BE5" />
          </svg>
        </div>
      );

    case 'nippon-paint':
      return (
        <div className={`inline-flex items-center gap-2 ${heightClass}`} aria-label="Nippon Paint">
          <div className="w-8 h-8 rounded bg-[#1E3A8A] flex items-center justify-center shrink-0">
            <span className="font-sans text-lg font-black text-white leading-none bg-[#D32F2F] w-6 h-6 rounded-sm flex items-center justify-center">
              n
            </span>
          </div>
          <div className="leading-[1.05]">
            <div className="font-sans text-[13px] font-extrabold tracking-tight text-[#1E3A8A]">
              NIPPON
            </div>
            <div className="font-sans text-[13px] font-extrabold tracking-tight text-[#1E3A8A]">
              PAINT
            </div>
          </div>
        </div>
      );

    case 'ebco':
      return (
        <div className={`inline-flex items-center ${heightClass}`} aria-label="Ebco">
          <div className="px-4 py-1 rounded-full bg-gradient-to-b from-[#2B547E] to-[#1A365D] border-2 border-[#A8B6C4] shadow-xs">
            <span className="font-sans text-[16px] font-extrabold tracking-wide text-white lowercase">
              ebco
            </span>
          </div>
        </div>
      );

    case 'hafele':
      return (
        <div className={`inline-flex items-center ${heightClass}`} aria-label="Häfele">
          <span className="font-sans text-[21px] font-black tracking-[0.12em] text-[#3B3835]">
            HÄFELE
          </span>
        </div>
      );

    case 'sleek':
      return (
        <div className={`inline-flex flex-col justify-center ${heightClass}`} aria-label="Sleek The Kitchen Specialist">
          <div className="px-3.5 py-1 bg-[#B71C1C] rounded-xs">
            <span className="font-sans text-[17px] font-bold tracking-[0.16em] text-white leading-none">
              Sleek
            </span>
          </div>
          <span className="text-[7px] font-semibold tracking-[0.14em] text-[#5C554E] mt-1 text-center">
            THE KITCHEN SPECIALIST
          </span>
        </div>
      );

    case 'godrej':
      return (
        <div className={`inline-flex items-center ${heightClass}`} aria-label="Godrej">
          <span className="font-serif italic text-[26px] font-bold tracking-tight bg-gradient-to-r from-[#C2185B] via-[#7B1FA2] to-[#2E7D32] bg-clip-text text-transparent">
            Godrej
          </span>
        </div>
      );

    case 'greenlam':
      return (
        <div className={`inline-flex items-center gap-2 ${heightClass}`} aria-label="Greenlam Laminates">
          <svg viewBox="0 0 32 32" className="h-7 w-auto shrink-0" aria-hidden="true">
            <rect x="2" y="2" width="28" height="28" rx="6" fill="#7CB342" />
            <path d="M16 24V10M16 24L9 14M16 24L23 14" stroke="#FAF7F2" strokeWidth="2.4" strokeLinecap="round" />
            <circle cx="16" cy="9" r="2.2" fill="#D32F2F" />
            <circle cx="9" cy="13" r="2.2" fill="#FBC02D" />
            <circle cx="23" cy="13" r="2.2" fill="#1976D2" />
          </svg>
          <div className="leading-none">
            <div className="font-sans text-[17px] font-bold tracking-tight text-[#2E3A2F]">
              Greenlam
            </div>
            <div className="text-[8px] font-semibold tracking-[0.22em] text-[#5C665D] mt-0.5">
              LAMINATES
            </div>
          </div>
        </div>
      );

    case 'century-laminates':
      return (
        <div className={`inline-flex items-center gap-2 ${heightClass}`} aria-label="Century Laminates">
          <svg viewBox="0 0 36 36" className="h-6 w-auto shrink-0" aria-hidden="true">
            <g fill="#C62828">
              <polygon points="18,2 23,11 18,15 13,11" />
              <polygon points="33,13 24,18 20,14 25,8" />
              <polygon points="28,31 20,24 22,19 31,21" />
              <polygon points="8,31 14,19 17,24 12,31" />
              <polygon points="3,13 11,8 16,14 12,18" />
            </g>
          </svg>
          <div className="leading-none">
            <div className="font-sans text-[13px] font-extrabold tracking-tight">
              <span className="text-[#C62828]">CENTURY</span>
              <span className="text-[#2B2724]">LAMINATES</span>
            </div>
            <div className="text-[8px] italic text-[#5C554E] mt-0.5">
              my design. my style.
            </div>
          </div>
        </div>
      );

    case 'myk-laticrete':
      return (
        <div className={`inline-flex items-center gap-2 ${heightClass}`} aria-label="MYK Laticrete">
          <div className="px-3 py-1.5 rounded-xs bg-[#0277BD] flex items-center gap-2">
            <svg viewBox="0 0 18 18" className="w-4 h-4 shrink-0" aria-hidden="true">
              <rect x="1" y="1" width="7" height="7" fill="#FAF7F2" opacity="0.9" />
              <rect x="10" y="1" width="7" height="7" fill="#FAF7F2" opacity="0.65" />
              <rect x="1" y="10" width="7" height="7" fill="#FAF7F2" opacity="0.65" />
              <rect x="10" y="10" width="7" height="7" fill="#FAF7F2" opacity="0.9" />
            </svg>
            <span className="font-sans text-[12px] font-extrabold tracking-wider text-white whitespace-nowrap">
              MYK LATICRETE
            </span>
          </div>
        </div>
      );

    default:
      return (
        <span className="font-serif text-lg font-semibold text-[#1E1C1A]">
          {brandId}
        </span>
      );
  }
}
