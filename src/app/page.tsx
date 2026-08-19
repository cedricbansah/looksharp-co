import { CategoryRailSection } from '@/components/CategoryRailSection';
import { FaqSection } from '@/components/FaqSection';
import { FinalCtaSection } from '@/components/FinalCtaSection';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { LandingStructuredData } from '@/components/LandingStructuredData';
import { OfferWallSection } from '@/components/OfferWallSection';
import { StickyHeader } from '@/components/StickyHeader';
import { TrustSection } from '@/components/TrustSection';

export default function HomePage() {
  return (
    <>
      <LandingStructuredData />
      <div className="lovable-page">
        <StickyHeader />
        <main>
          <HeroSection />
          <OfferWallSection />
          <HowItWorksSection />
          <CategoryRailSection />
          <TrustSection />
          <FaqSection />
          <FinalCtaSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
