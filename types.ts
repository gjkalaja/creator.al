
export interface VoiceProfile {
  name: string;
  description: string;
  imageUrl: string;
  audioUrl: string;
}

export interface AddonFeature {
  icon: string;
  title: string;
  description: string;
  price: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
  ctaHref: string;
}