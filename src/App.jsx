import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import BlogListing from './pages/BlogListing/BlogListing';
import BlogPost from './pages/BlogPost/BlogPost';
import './App.css';

function LandingPage() {
  return (
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
  );
}

function App() {
  return (
    <div className="appContainer">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<BlogListing />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
