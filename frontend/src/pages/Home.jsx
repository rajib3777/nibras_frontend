import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturesCards from '../components/sections/FeaturesCards';
import AboutMission from '../components/sections/AboutMission';
import ChairmanMessage from '../components/sections/ChairmanMessage';
import ProgramsGrid from '../components/sections/ProgramsGrid';
import CampusGallery from '../components/sections/CampusGallery';
import AchievementsSection from '../components/sections/AchievementsSection';
import CornersGrid from '../components/sections/CornersGrid';
import TeamSection from '../components/sections/TeamSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
import NewsEvents from '../components/sections/NewsEvents';
import CallToAction from '../components/sections/CallToAction';
import DonationWidget from '../components/sections/DonationWidget';

const Home = () => {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <HeroSection />
      <FeaturesCards />
      <AboutMission />
      <ChairmanMessage />
      <ProgramsGrid />
      <CampusGallery />
      <AchievementsSection />
      <CornersGrid />
      <TestimonialsSection />
      <TeamSection />
      <FAQSection />
      <NewsEvents />
      <CallToAction />
      <DonationWidget />
    </div>
  );
};

export default Home;
