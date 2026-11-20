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
    src: '/assets/brands/fineply.jpg',
    alt: 'Fineply NX',
  },
  greenply: {
    src: '/assets/brands/greenply.png',
    alt: 'Greenply Industries Limited',
  },
  centuryply: {
    src: '/assets/brands/centuryply.jpg',
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
    src: '/assets/brands/ebco.jpg',
    alt: 'Ebco',
    className: 'rounded-sm',
  },
  hafele: {
    src: '/assets/brands/hafele.jpg',
    alt: 'Häfele',
  },
  sleek: {
    src: '/assets/brands/sleek.jpg',
    alt: 'Sleek Kitchen Specialist',
  },
  godrej: {
    src: '/assets/brands/godrej.jpg',
    alt: 'Godrej',
  },
  greenlam: {
    src: '/assets/brands/greenlam.jpg',
    alt: 'Greenlam Laminates',
  },
  'century-laminates': {
    src: '/assets/brands/century-laminates.jpg',
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
    ? 'h-11 sm:h-12 max-h-12 sm:max-h-13 max-w-[165px] sm:max-w-[185px]'
    : 'h-13 sm:h-15 max-h-15 sm:max-h-16 max-w-[180px] sm:max-w-[210px]';

  if (!logo) {
    return (
      <span className="font-serif font-bold text-[#0B1D3A] tracking-tight">
        {brandId}
      </span>
    );
  }

  return (
    <div
      className={`inline-flex items-center justify-center w-full ${
        compact ? 'h-12 sm:h-14 px-1.5' : 'h-14 sm:h-16 px-2'
      }`}
      aria-label={logo.alt}
    >
      <img
        src={logo.src}
        alt={logo.alt}
        loading="lazy"
        className={`w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-105 ${heightClass} ${
          logo.className || ''
        }`}
      />
    </div>
  );
}
