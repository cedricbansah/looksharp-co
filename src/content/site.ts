import type {
  AssuranceItem,
  DealCategory,
  FaqItem,
  OfferTile,
  ProofStat,
  TestimonialItem
} from '@/lib/types';

export const navItems = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Offers', href: '#offers' },
  { label: 'Trust', href: '#trust' },
  { label: 'FAQ', href: '#faq' }
];

export const heroContent = {
  badge: 'Discover. Save. Earn.',
  title: 'Shop Smarter, Earn Rewards Every Day',
  description:
    'Unlock exclusive discounts from top brands across Ghana, complete quick surveys to earn points, and convert them into real cash through your preferred payout channel.',
  trustMicroCopy: 'Exclusive Discounts • Earn Real Cash • Safe & Trusted',
  valueHighlights: [
    { value: '50K+', label: 'Users' },
    { value: 'GH₵ 2M+', label: 'Earned' },
    { value: '500+', label: 'Brands' }
  ],
  heroValuePoints: ['Exclusive Discounts', 'Earn Real Cash', 'Safe & Trusted']
};

export const dealCategories: DealCategory[] = [
  {
    id: 'shopping',
    title: 'Shopping',
    description: 'Everyday product deals and checkout discounts.',
    tag: 'CAT-01',
    icon: '/icons/categories/shopping.svg'
  },
  {
    id: 'food-drink',
    title: 'Food & Drink',
    description: 'Meal vouchers and buy-one-get-one offers.',
    tag: 'CAT-02',
    icon: '/icons/categories/food-drink.svg'
  },
  {
    id: 'travel',
    title: 'Travel',
    description: 'Transport credits and destination specials.',
    tag: 'CAT-03',
    icon: '/icons/categories/travel.svg'
  },
  {
    id: 'tech',
    title: 'Tech',
    description: 'Gadgets, bundles, and electronics deals.',
    tag: 'CAT-04',
    icon: '/icons/categories/tech.svg'
  },
  {
    id: 'health',
    title: 'Health',
    description: 'Wellness offers and pharmacy savings.',
    tag: 'CAT-05',
    icon: '/icons/categories/health.svg'
  },
  {
    id: 'fashion',
    title: 'Fashion',
    description: 'Style drops and limited-time fashion codes.',
    tag: 'CAT-06',
    icon: '/icons/categories/fashion.svg'
  },
  {
    id: 'auto',
    title: 'Auto',
    description: 'Fuel, rides, and service promotions.',
    tag: 'CAT-07',
    icon: '/icons/categories/auto.svg'
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Books, courses, and learning discounts.',
    tag: 'CAT-08',
    icon: '/icons/categories/education.svg'
  }
];

export const steps = [
  {
    title: 'Discover Deals',
    description:
      'Browse exclusive discounts from everyday brands all over Ghana and the world'
  },
  {
    title: 'Complete & Earn',
    description:
      'Take quick surveys relevant to your market and earn reward points for sharing your opinions.'
  },
  {
    title: 'Cash Out',
    description:
      'Convert your earned points into real cash and withdraw straight to your mobile money account'
  }
];

export const featuredOffers: OfferTile[] = [
  {
    id: 'offer-wollo',
    badge: 'Shopping',
    brand: 'Wollo',
    title: 'Sip & Save: 25% Off 10 Mugs!',
    description: 'Buy 10 mugs and enjoy 25% off your order.',
    category: 'Shopping',
    endDate: '2026-06-30T00:00:00Z',
    posterImage: '/images/offers/wollo-mugs.png',
    logoImage: '/images/brands/wollo-logo.png',
    isPlaceholder: false
  },
  {
    id: 'offer-swimsbydidi',
    badge: 'New',
    badgeVariant: 'default',
    brand: 'Swims by Didi',
    title: 'Get 10% off your first order!',
    description: 'Use this code at checkout to save 10% on your first purchase from Swims by Didi.',
    category: 'Fashion',
    endDate: '2026-07-31T00:00:00Z',
    posterImage: '/images/offers/swims-by-didi-offer.JPG',
    logoImage: '/images/brands/swimsbydidi-logo.png',
    isPlaceholder: true
  },
  {
    id: 'offer-enyo',
    badge: 'Fashion',
    badgeVariant: 'secondary',
    brand: 'Enyo',
    title: '10% Akuvi Promo',
    description: 'Use this code to save 10% on the Akuvi collection.',
    category: 'Fashion',
    endDate: '2026-12-31T00:00:00Z',
    posterImage: '/images/offers/enyo-offer.JPG',
    logoImage: '/images/brands/enyo-square-logo.jpg',
    isPlaceholder: true
  }
];

export const proofStats: ProofStat[] = [
  {
    id: 'active-offers',
    label: 'Active Offers',
    value: '90+',
    isPlaceholder: true
  },
  {
    id: 'rewards-paid',
    label: 'Free Giveaways',
    value: 'UNLIMITED',
    isPlaceholder: true
  },
  {
    id: 'brand-partners',
    label: 'Brand Partners',
    value: '100+',
    isPlaceholder: true
  },
  {
    id: 'uptime',
    label: 'Uptime',
    value: '99.9%',
    isPlaceholder: true
  }
];

export const assuranceItems: AssuranceItem[] = [
  {
    id: 'encryption',
    title: 'Secure data encryption',
    description: 'Security controls protect account and rewards activity.'
  },
  {
    id: 'privacy-certified',
    title: 'Data privacy certified',
    description: 'Platform operations follow privacy-oriented safeguards.'
  },
  {
    id: 'instant-withdrawals',
    title: 'Instant withdrawals',
    description: 'Redeemed rewards can move quickly to supported payouts.'
  },
  {
    id: 'support',
    title: '24/7 support',
    description: 'Support access is available for account and payout issues.'
  }
];

export const testimonials: TestimonialItem[] = [
  {
    id: 'amina',
    quote:
      'LookSharp helped me save over GH₵ 1,500 on textbooks and meals this semester. The surveys are quick and the cashout process is smooth.',
    author: 'Amina K.',
    role: 'Student, Accra',
    isPlaceholder: true
  },
  {
    id: 'david',
    quote:
      'I love how easy it is to discover new deals. I have earned enough points to cover my monthly data bundle. Highly recommend!',
    author: 'David M.',
    role: 'Freelancer, Kumasi',
    isPlaceholder: true
  },
  {
    id: 'grace',
    quote:
      'The app is clean, fast, and the rewards are real. One of the best savings apps I have used in Ghana. Five stars from me!',
    author: 'Grace W.',
    role: 'Professional, Takoradi',
    isPlaceholder: true
  }
];

export const faqs: FaqItem[] = [
  {
    id: 'what-is-looksharp',
    question: 'What is LookSharp?',
    answer:
      'LookSharp is Ghana\'s first discounts and rewards platform. You can discover exclusive offers from top brands, earn points by completing short surveys, and convert those points into real cash.'
  },
  {
    id: 'how-earn-rewards',
    question: 'How do I earn rewards?',
    answer:
      'Simply browse available offers and use discounts when you shop. You can also earn bonus points by completing quick surveys and sharing your opinions with brands.'
  },
  {
    id: 'free-to-use',
    question: 'Is LookSharp free to use?',
    answer:
      'Yes! LookSharp is free to download and use. There are no hidden fees. You can start saving and earning rewards by using the platform.'
  },
  {
    id: 'cashout',
    question: 'How do I cash out my points?',
    answer:
      'Once you have accumulated enough points, you can convert them to cash directly within the app. Withdrawals are processed to your preferred mobile money account after completing a KYC verification process.'
  },
  {
    id: 'brands',
    question: 'Which brands are on LookSharp?',
    answer:
      'We partner with hundreds of local and international brands across categories like shopping, food, tech, fashion, travel, and more. New offers are added daily.'
  },
  {
    id: 'data-safety',
    question: 'Is my data safe?',
    answer:
      'Absolutely. Our data storage systems are highly encrypted and we are data privacy certified. Your personal information is never sold to third parties. Read our Privacy Policy for full details.'
  }
];

export const legalPlaceholderNotes = {
  privacy:
    'LookSharp (Insightis Africa) is committed to protecting your privacy while you use our mobile and web experiences.',
  terms:
    'By using LookSharp, you agree to the platform terms that govern rewards, offers, and responsible account use.'
};
