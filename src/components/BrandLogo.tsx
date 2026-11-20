interface BrandLogoProps {
  brandId: string;
  compact?: boolean;
}

const BRAND_LOGOS: Record<
  string,
  {
    src: string;
    alt: string;
    className?: string;
  }
> = {
  fineply: {
    src: '/assets/brands/fineply.png',
    alt: 'Fineply NX',
  },
  greenply: {
    src: '/assets/brands/greenply.png',
    alt: 'Greenply Industries Limited',
  },
  centuryply: {
    src: '/assets/brands/centuryply.png',
    alt: 'CenturyPly',
  },
  asianpaints: {
    src: '/assets/brands/asianpaints.png',
    alt: 'Asian Paints',
  },
  'birla-opus': {
    src: '/assets/brands/birla-opus.png',
    alt: 'Birla Opus',
  },
  'nippon-paint': {
    src: '/assets/brands/nippon-paint.png',
    alt: 'Nippon Paint',
  },
  ebco: {
    src: '/assets/brands/ebco.png',
    alt: 'Ebco',
    className: 'rounded-sm',
  },
  hafele: {
    src: '/assets/brands/hafele.png',
    alt: 'Häfele',
  },
  sleek: {
    src: '/assets/brands/sleek.png',
    alt: 'Sleek Kitchen Specialist',
  },
  godrej: {
    src: '/assets/brands/godrej.png',
    alt: 'Godrej',
  },
  greenlam: {
    src: '/assets/brands/greenlam.png',
    alt: 'Greenlam Laminates',
  },
  'century-laminates': {
    src: '/assets/brands/century-laminates.png',
    alt: 'CenturyLaminates',
  },
  'myk-laticrete': {
    src: '/assets/brands/myk-laticrete.png',
    alt: 'MYK Laticrete',
  },
};

export function BrandLogo({ brandId, compact = false }: BrandLogoProps) {
  const logo = BRAND_LOGOS[brandId];
  const heightClass = compact
    ? 'h-8 sm:h-9 max-h-9 sm:max-h-10 max-w-[140px] sm:max-w-[160px]'
    : 'h-11 sm:h-12 max-h-12 sm:max-h-14 max-w-[170px] sm:max-w-[190px]';

  if (!logo) {
    return (
      <span className="font-serif font-bold text-[#0B1D3A] tracking-tight">
        {brandId}
      </span>
    );
  }

  return (
    <div
      className="inline-flex items-center justify-center w-full h-full px-1"
      aria-label={logo.alt}
    >
      <img
        src={logo.src}
        alt={logo.alt}
        loading="lazy"
        className={`w-auto object-contain transition-transform duration-200 group-hover:scale-105 ${heightClass} ${
          logo.className || ''
        }`}
      />
    </div>
  );
}
