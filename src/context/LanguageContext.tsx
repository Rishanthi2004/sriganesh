import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    // Brand Name is ALWAYS in Tamil
    brandName: 'ஸ்ரீ கணேஷ் பிளைவுட்ஸ் & ஹார்ட்வேர்ஸ்',
    brandLine1: 'ஸ்ரீ கணேஷ்',
    brandLine2: 'பிளைவுட்ஸ் & ஹார்ட்வேர்ஸ்',
    brandSubtitle: 'Plywoods, Paints & Architectural Hardwares',
    
    // Nav
    navHome: 'Home',
    navAbout: 'About Us',
    navProducts: 'Products',
    navBrands: 'Brands',
    navContact: 'Contact',
    navQuote: 'Request Quote',
    navHelpline: 'Helpline',
    authorizedStockists: 'Authorized Stockists: Greenply, Asian Paints, Godrej & Hettich',

    // Hero
    heroEst: 'Est. 1998',
    heroPlywood: 'Plywoods',
    heroPaints: 'Paints',
    heroHardware: 'Hardwares',
    heroTitle: 'Quality Plywoods & Hardwares',
    heroSubtitle: 'Certified timber, architectural paints, and durable fittings.',
    heroExplore: 'Explore Products',
    heroWhatsApp: 'WhatsApp Us',

    // Core Categories
    deptBrowse: 'Browse by Department',
    deptTitle: 'Shop Our Core Categories',
    exploreCat: 'Explore',
    ranges: 'ranges',
    range: 'range',

    // Showroom Pillars
    pillar1Title: 'Genuine Certified Stock',
    pillar1Desc: '100% authentic IS:710 marine plywoods, IS:303 boards, and warranted architectural hardwares.',
    pillar2Title: 'Complete Interior Range',
    pillar2Desc: 'Over 600 laminate shades, architectural paints, wood finishes, and fittings under one roof.',
    pillar3Title: 'Dependable Site Delivery',
    pillar3Desc: 'Carefully stacked sheet transport and prompt dispatch for residential and commercial sites.',

    // About / Founder
    founderBadge: 'About Our Founder & Leadership',
    founderHeader: 'Leadership Behind Sri Ganesh Plywoods & Hardwares',
    founderHeaderDesc: 'The foundational expertise and guiding principles behind nearly three decades of timber excellence.',
    founderProfileTag: 'Founder Profile',
    founderName: 'K. Kalimuthu',
    founderNameTa: 'கே. காளிமுத்து',
    founderDesignation: 'Founder & Managing Director',
    founderBio: 'Founded Sri Ganesh Plywoods & Hardwares in 1998, establishing nearly three decades of trusted supply in authentic IS:710 marine plywoods, calibrated boards, and architectural hardwares across Namakkal, Tamil Nadu, and all over India.',
    founderExp: 'Years Experience',
    founderStock: 'Certified Stock',
    founderActive: 'Since 1998',
    founderPill1: 'Calibrated Hardwood Plywoods',
    founderPill2: 'IS:710 Marine & IS:303 Boards',
    founderPill3: 'Precision Architectural Hardwares',
    shareFounderBtn: 'Share Founder Details',
    shareFounderHeader: 'Founder Contact & Details',
    shareFounderSub: "Share K. Kalimuthu's credentials and showroom information",
    shareVia: 'Share Founder Details Via',
    shareWhatsApp: 'WhatsApp',
    shareWhatsAppSub: 'Open in WhatsApp',
    copyDetails: 'Copy Details',
    copyDetailsSub: 'Copy text info',
    copiedText: 'Copied!',
    shareLink: 'Share Link',
    shareLinkSub: 'Web share or URL',
    linkCopiedText: 'Link Copied!',
    copiedSuccessToast: 'Founder details successfully copied to clipboard!',
    linkCopiedSuccessToast: 'Page link successfully copied to clipboard!',
    closeBtn: 'Close',

    // Why Choose Us
    whyTitle: 'Why Choose Us',
    whyHeading: 'Dependable Quality at Every Stage of Your Build',
    readyInspect: 'Ready to inspect materials in person?',
    readyInspectSub: 'Browse our complete catalog or speak with our showroom team directly.',
    browseProductsBtn: 'Browse Products',
    contactShowroomBtn: 'Contact Showroom',

    // Products Page
    allProducts: 'All Products',
    searchPlaceholder: 'Search plywoods, paints, hinges...',
    showingText: 'Showing',
    productRangesText: 'product ranges of',
    viewDetails: 'View Details',

    // Footer
    footerDesc: 'Exclusive dealers in quality plywoods, laminates, paints, and architectural hardwares serving Namakkal and surrounding regions since 1998.',
    footerContactPerson: 'Contact',
    footerShowroomPages: 'Showroom Pages',
    footerRights: 'All rights reserved.',
  },
  ta: {
    // Brand Name is ALWAYS in Tamil
    brandName: 'ஸ்ரீ கணேஷ் பிளைவுட்ஸ் & ஹார்ட்வேர்ஸ்',
    brandLine1: 'ஸ்ரீ கணேஷ்',
    brandLine2: 'பிளைவுட்ஸ் & ஹார்ட்வேர்ஸ்',
    brandSubtitle: 'ப்ளைவுட்ஸ், பெயிண்ட்ஸ் & ஆர்கிடெக்சுரல் ஹார்ட்வேர்ஸ்',

    // Nav
    navHome: 'முகப்பு',
    navAbout: 'எங்களை பற்றி',
    navProducts: 'தயாரிப்புகள்',
    navBrands: 'பிராண்டுகள்',
    navContact: 'தொடர்பு',
    navQuote: 'விலை விவரம்',
    navHelpline: 'உதவி எண்',
    authorizedStockists: 'அங்கீகரிக்கப்பட்ட டீலர்கள்: Greenply, Asian Paints, Godrej & Hettich',

    // Hero
    heroEst: 'தொடக்கம் 1998',
    heroPlywood: 'ப்ளைவுட்ஸ்',
    heroPaints: 'பெயின்ட்ஸ்',
    heroHardware: 'ஹார்ட்வேர்ஸ்',
    heroTitle: 'உயர்தர ப்ளைவுட்ஸ் & ஹார்ட்வேர்ஸ்',
    heroSubtitle: 'சான்றளிக்கப்பட்ட மர பலகைகள், ஆர்கிடெக்சுரல் பெயிண்ட்ஸ் மற்றும் தரமான ஃபிட்டிங்ஸ்.',
    heroExplore: 'தயாரிப்புகளை காண்க',
    heroWhatsApp: 'வாட்ஸ்அப்',

    // Core Categories
    deptBrowse: 'துறைகள் வாரியாக',
    deptTitle: 'எங்கள் பிரதான தயாரிப்புகள்',
    exploreCat: 'காண்க',
    ranges: 'வகைகள்',
    range: 'வகை',

    // Showroom Pillars
    pillar1Title: 'உண்மையான சான்றளிக்கப்பட்ட தரம்',
    pillar1Desc: '100% நம்பகமான IS:710 மரைன் ப்ளைவுட்ஸ், IS:303 போர்டுகள் மற்றும் உத்தரவாதமுள்ள ஹார்ட்வேர்ஸ் பொருட்கள்.',
    pillar2Title: 'முழுமையான இன்டீரியர் பொருட்கள்',
    pillar2Desc: '600-க்கும் மேற்பட்ட லேமினேட் வண்ணங்கள், ஆர்கிடெக்சுரல் பெயிண்ட்ஸ் மற்றும் ஃபிட்டிங்ஸ் ஒரே இடத்தில்.',
    pillar3Title: 'நேரடி தள டெலிவரி',
    pillar3Desc: 'பாதுகாப்பாக அடுக்கப்பட்ட பலகைகள் குடியிருப்பு மற்றும் வணிக தளங்களுக்கு குறித்த நேரத்தில் டெலிவரி.',

    // About / Founder
    founderBadge: 'நிறுவனர் & தலைமைத்துவம்',
    founderHeader: 'ஸ்ரீ கணேஷ் ப்ளைவுட்ஸ் & ஹார்ட்வேர்ஸ் தலைமைத்துவம்',
    founderHeaderDesc: 'சுமார் 28 ஆண்டுகளுக்கும் மேலான அனுபவமும், தரமான மரப் பொருட்களுக்கான அசைக்க முடியாத நம்பிக்கையும்.',
    founderProfileTag: 'நிறுவனர் சுயவிவரம்',
    founderName: 'கே. காளிமுத்து',
    founderNameTa: 'கே. காளிமுத்து',
    founderDesignation: 'நிறுவனர் & நிர்வாக இயக்குனர்',
    founderBio: '1998-ஆம் ஆண்டு முதல் நாமக்கல், தமிழ்நாடு மற்றும் இந்தியா முழுவதும் (All Over India) அசல் IS:710 மரைன் ப்ளைவுட்ஸ், கேலிபிரேட்டட் போர்டுகள் மற்றும் ஆர்கிடெக்சுரல் ஹார்ட்வேர்ஸ் வழங்கி வரும் 28+ ஆண்டுகால நம்பகமான நிறுவனம்.',
    founderExp: 'ஆண்டுகள் அனுபவம்',
    founderStock: '100% சான்றளிக்கப்பட்ட தரம்',
    founderActive: 'தொடக்கம் 1998',
    founderPill1: 'கேலிபிரேட்டட் ஹார்டுவுட் ப்ளைவுட்ஸ்',
    founderPill2: 'IS:710 மரைன் & IS:303 போர்டுகள்',
    founderPill3: 'ஆர்கிடெக்சுரல் ஹார்ட்வேர்ஸ் ஸ்பெஷலிஸ்ட்',
    shareFounderBtn: 'நிறுவனர் விவரங்களை பகிர்க',
    shareFounderHeader: 'நிறுவனர் தொடர்பு விவரங்கள்',
    shareFounderSub: 'கே. காளிமுத்து அவர்களின் விவரங்கள் மற்றும் ஷோரூம் தகவலை பகிரவும்',
    shareVia: 'பகிர்வதற்கான வழிகள்',
    shareWhatsApp: 'வாட்ஸ்அப்',
    shareWhatsAppSub: 'வாட்ஸ்அப்பில் பகிர்க',
    copyDetails: 'விவரங்களை நகலெடு',
    copyDetailsSub: 'தகவலை Copy செய்ய',
    copiedText: 'நகலெடுக்கப்பட்டது!',
    shareLink: 'இணைப்பை பகிர்க',
    shareLinkSub: 'Web share அல்லது Link',
    linkCopiedText: 'இணைப்பு Copy ஆனது!',
    copiedSuccessToast: 'நிறுவனர் விவரங்கள் Clipboard-க்கு நகலெடுக்கப்பட்டது!',
    linkCopiedSuccessToast: 'பக்கத்தின் இணைப்பு Clipboard-க்கு நகலெடுக்கப்பட்டது!',
    closeBtn: 'மூடுக',

    // Why Choose Us
    whyTitle: 'ஏன் எங்களை தேர்ந்தெடுக்க வேண்டும்?',
    whyHeading: 'கட்டுமானத்தின் ஒவ்வொரு நிலையிலும் நம்பகமான தரம்',
    readyInspect: 'நேரடியாகப் பார்வையிடத் தயாரா?',
    readyInspectSub: 'எங்கள் முழுமையான பட்டியலை பார்வையிடவும் அல்லது ஷோரூமை நேரடியாக தொடர்பு கொள்ளவும்.',
    browseProductsBtn: 'தயாரிப்புகளை காண்க',
    contactShowroomBtn: 'ஷோரூமை தொடர்பு கொள்ள',

    // Products Page
    allProducts: 'அனைத்து பொருட்கள்',
    searchPlaceholder: 'ப்ளைவுட்ஸ், பெயிண்ட், ஹார்ட்வேர்ஸ் தேடுக...',
    showingText: 'காட்டப்படுவது',
    productRangesText: 'வகைகள் மொத்தம்',
    viewDetails: 'முழு விவரம்',

    // Footer
    footerDesc: 'நாமக்கல் மற்றும் சுற்றுவட்டாரப் பகுதிகளுக்கு 1998 முதல் தரமான ப்ளைவுட்ஸ், லேமினேட்ஸ், பெயிண்ட்ஸ் மற்றும் ஆர்கிடெக்சுரல் ஹார்ட்வேர்ஸ் வழங்கும் நம்பகமான ஷோரூம்.',
    footerContactPerson: 'தொடர்புக்கு',
    footerShowroomPages: 'ஷோரூம் பக்கங்கள்',
    footerRights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'ta',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('sgph_language');
      return (saved === 'en' || saved === 'ta') ? saved : 'ta';
    } catch {
      return 'ta';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('sgph_language', lang);
    } catch {}
  };

  const toggleLanguage = () => {
    const next = language === 'en' ? 'ta' : 'en';
    setLanguage(next);
  };

  const t = (key: string): string => {
    return TRANSLATIONS[language]?.[key] || TRANSLATIONS['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
