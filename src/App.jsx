import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MeaningSection from './components/MeaningSection/MeaningSection';
import WhyVoltExists from './components/WhyVoltExists/WhyVoltExists';
import MarketMoment from './components/MarketMoment/MarketMoment';
import WhatWeTrack from './components/WhatWeTrack/WhatWeTrack';
import IntelligenceDesk from './components/IntelligenceDesk/IntelligenceDesk';
import FeaturedSignals from './components/FeaturedSignals/FeaturedSignals';
import WhoItIsBuiltFor from './components/WhoItIsBuiltFor/WhoItIsBuiltFor';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="appContainer">
      <Header />
      <main>
        <Hero />
        <MeaningSection />
        <WhyVoltExists />
        <MarketMoment />
        <WhatWeTrack />
        <IntelligenceDesk />
        <FeaturedSignals />
        <WhoItIsBuiltFor />
        <HowItWorks />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
