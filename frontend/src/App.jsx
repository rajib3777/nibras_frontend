import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import TopBanner from './components/layout/TopBanner';
import FloatingCallButton from './components/ui/FloatingCallButton';
import ChatbotWidget from './components/ui/ChatbotWidget';
import Programs from './pages/Programs';
import Teachers from './pages/Teachers';
import NoticeBoard from './pages/NoticeBoard';
import Contact from './pages/Contact';
import Members from './pages/Members';
import Committees from './pages/Committees';
import Messages from './pages/Messages';
import Publications from './pages/Publications';

// Scroll to top component
const ScrollToTop = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

const App = () => {
  return (
    <Router>
      <div className="bg-[#FDFBF7] min-h-screen font-sans flex flex-col relative">
        <TopBanner />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<><ScrollToTop /><Home /></>} />
            <Route path="/about" element={<><ScrollToTop /><About /></>} />
            <Route path="/programs" element={<><ScrollToTop /><Programs /></>} />
            <Route path="/teachers" element={<><ScrollToTop /><Teachers /></>} />
            <Route path="/news" element={<><ScrollToTop /><NoticeBoard /></>} />
            <Route path="/contact" element={<><ScrollToTop /><Contact /></>} />
            <Route path="/members" element={<><ScrollToTop /><Members /></>} />
            <Route path="/committees" element={<><ScrollToTop /><Committees /></>} />
            <Route path="/messages" element={<><ScrollToTop /><Messages /></>} />
            <Route path="/publications" element={<><ScrollToTop /><Publications /></>} />
          </Routes>
        </main>
        <FloatingCallButton />
        <ChatbotWidget />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
