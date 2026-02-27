import type {
  AssuranceItem,
  DealCategory,
  FaqItem,
  OfferTile,
  ProofStat,
  TestimonialItem
} from '@/lib/types';

export const navItems = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Offers', href: '#offers' },
  { label: 'Trust', href: '#trust' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Get Started', href: '#get-started' }
];

export const heroContent = {
  badge: 'Insightis Africa Company',
  title: 'One app for smarter shopping, paid opinions, and faster rewards.',
  description:
    'LookSharp helps you discover verified discounts and complete short surveys in one place, then convert points into cash with a clear mobile-money payout flow.',
  trustMicroCopy:
    'Balanced access across web, iOS, and Android with secure payout controls.',
  valueHighlights: [
    { value: '24h', label: 'Typical payout turnaround' },
    { value: '125k+', label: 'Monthly survey completions' },
    { value: '40k+', label: 'Active members' }
  ],
  heroValuePoints: [
    'Find app-only deals organized by shopping category.',
    'Complete short surveys and track points in real time.',
    'Redeem confidently with transparent payout status updates.'
  ]
};

export const dealCategories: DealCategory[] = [
  {
    id: 'fashion',
    title: 'Fashion',
    description: 'Discount codes and seasonal drops from style partners.',
    tag: 'CAT-01'
  },
  {
    id: 'grocery',
    title: 'Grocery',
    description: 'Everyday basket savings and local delivery offers.',
    tag: 'CAT-02'
  },
  {
    id: 'tech',
    title: 'Tech',
    description: 'Phone accessories, data bundles, and device deals.',
    tag: 'CAT-03'
  },
  {
    id: 'mobility',
    title: 'Mobility',
    description: 'Transport and travel offers for daily commutes.',
    tag: 'CAT-04'
  },
  {
    id: 'food',
    title: 'Food',
    description: 'Restaurant and quick-service vouchers from local brands.',
    tag: 'CAT-05'
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle',
    description: 'Entertainment, personal care, and wellness promotions.',
    tag: 'CAT-06'
  }
];

export const steps = [
  {
    title: 'Create your profile and preferences',
    description:
      'Sign up in minutes and set the categories you care about to tailor your offers and survey opportunities.'
  },
  {
    title: 'Claim offers and complete quick surveys',
    description:
      'Use verified discount codes while shopping, then complete short surveys to keep your points balance growing.'
  },
  {
    title: 'Convert points and cash out',
    description:
      'Redeem points through the app and withdraw to your mobile money wallet with status tracking at each step.'
  }
];

export const featuredOffers: OfferTile[] = [
  {
    id: 'offer-1',
    badge: 'Featured',
    brand: 'MarketSquare',
    title: 'Weekend Basket Saver',
    savings: 'Up to 18% off selected grocery lines',
    category: 'Grocery',
    disclaimer: 'Representative offer placeholder for staging review.',
    isPlaceholder: true
  },
  {
    id: 'offer-2',
    badge: 'Top Pick',
    brand: 'StylePort',
    title: 'Flash Apparel Drop',
    savings: 'Save 15% with app-only code windows',
    category: 'Fashion',
    disclaimer: 'Representative offer placeholder for staging review.',
    isPlaceholder: true
  },
  {
    id: 'offer-3',
    badge: 'New',
    brand: 'DataDirect',
    title: 'Monthly Bundle Boost',
    savings: 'Earn points on selected data add-ons',
    category: 'Tech',
    disclaimer: 'Representative offer placeholder for staging review.',
    isPlaceholder: true
  },
  {
    id: 'offer-4',
    badge: 'Popular',
    brand: 'RideNow',
    title: 'Daily Commute Credit',
    savings: 'Discounted ride credits + bonus survey points',
    category: 'Mobility',
    disclaimer: 'Representative offer placeholder for staging review.',
    isPlaceholder: true
  },
  {
    id: 'offer-5',
    badge: 'Limited',
    brand: 'BiteHub',
    title: 'Lunch Hour Rewards',
    savings: 'Code-based meal savings with reward multipliers',
    category: 'Food',
    disclaimer: 'Representative offer placeholder for staging review.',
    isPlaceholder: true
  },
  {
    id: 'offer-6',
    badge: 'Trending',
    brand: 'WellLife',
    title: 'Care and Wellness Pack',
    savings: 'Member pricing on selected wellness products',
    category: 'Lifestyle',
    disclaimer: 'Representative offer placeholder for staging review.',
    isPlaceholder: true
  }
];

export const proofStats: ProofStat[] = [
  {
    id: 'payout-speed',
    label: 'Typical payout turnaround',
    value: 'Under 24 hours',
    isPlaceholder: true
  },
  {
    id: 'survey-completions',
    label: 'Monthly survey completions',
    value: '125k+',
    isPlaceholder: true
  },
  {
    id: 'active-users',
    label: 'Active members',
    value: '40k+',
    isPlaceholder: true
  }
];

export const assuranceItems: AssuranceItem[] = [
  {
    id: 'secure-payout',
    title: 'Secure payout controls',
    description:
      'Reward conversion and cashout requests follow verification checks to keep your account protected.'
  },
  {
    id: 'transparent-tracking',
    title: 'Transparent reward tracking',
    description:
      'Track deal redemptions, survey completions, and payout status directly in your LookSharp journey.'
  },
  {
    id: 'verified-offers',
    title: 'Verified offer partners',
    description:
      'Offer placements are reviewed before publication so members can claim promotions with confidence.'
  }
];

export const testimonials: TestimonialItem[] = [
  {
    id: 'user-1',
    quote:
      'I use LookSharp before every weekend shop. The discounts are useful and payout updates are clear.',
    author: 'LookSharp Member',
    role: 'Accra',
    isPlaceholder: true
  },
  {
    id: 'user-2',
    quote:
      'The survey tasks are short and I can cash out without guessing what happens next.',
    author: 'LookSharp Member',
    role: 'Kumasi',
    isPlaceholder: true
  }
];

export const faqs: FaqItem[] = [
  {
    id: 'eligibility',
    group: 'membership',
    question: 'Who can join LookSharp?',
    answer:
      'Anyone with a supported smartphone can sign up. Specific offers and survey campaigns may include location-based eligibility terms.'
  },
  {
    id: 'payout',
    group: 'rewards',
    question: 'How long does payout take after redemption?',
    answer:
      'Most withdrawals are processed quickly, often within the same day. Timing varies by mobile money provider and account verification status.'
  },
  {
    id: 'platforms',
    group: 'platform',
    question: 'Is LookSharp available on web, iOS, and Android?',
    answer:
      'Yes. You can start on web and also install the iOS or Android app from the official stores for the same rewards journey.'
  },
  {
    id: 'offer-data',
    group: 'offers',
    question: 'Are the offers shown on this page live right now?',
    answer:
      'The featured cards shown here are representative placeholders for product marketing. In-app offers update by campaign and partner availability.'
  }
];

export const legalPlaceholderNotes = {
  privacy:
    'Placeholder policy for staging. Replace with approved legal text before production launch.',
  terms:
    'Placeholder terms for staging. Replace with approved legal text before production launch.'
};
