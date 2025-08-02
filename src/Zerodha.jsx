import Footer from './Footer';
import Header from './Header';
import HeroSection from './HeroSection';
import InfoSection from './InfoSection';
import MarketSection from './MarketSection';
import PricingSection from './PricingSection';

function Zerodha() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <InfoSection />
      <PricingSection />
      <MarketSection />
      <Footer />
    </div>
  );
}

export default Zerodha;
