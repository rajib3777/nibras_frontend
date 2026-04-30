import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturesCards from '../components/sections/FeaturesCards';
import AboutMission from '../components/sections/AboutMission';
import ProgramsGrid from '../components/sections/ProgramsGrid';
import TeamSection from '../components/sections/TeamSection';
import NewsEvents from '../components/sections/NewsEvents';
import DonationWidget from '../components/sections/DonationWidget';
import FAQSection from '../components/sections/FAQSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';

const Home = () => {
  return (
    <div className="bg-[#FDFBF7] min-h-screen font-sans">
      <HeroSection />
      <FeaturesCards />
      <AboutMission />
      <ProgramsGrid />
      <TestimonialsSection />
      <TeamSection />
      <FAQSection />
      <NewsEvents />
      <DonationWidget />
    </div>
  );
};

export default Home;
