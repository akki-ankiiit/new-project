import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import ValueSection from './components/ValueSection';
import CTAStrip from './components/CTAStrip';
import FAQSection from './components/FAQSection';
import TestimonialsSection from './components/TestimonialsSection';
import FinalCTA from './components/FinalCTA';

const HomePage = () => {
  return (
    <div style={{ background: '#0B0F0E', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <HeroSection />
        <ValueSection />
        <CTAStrip />
        <FAQSection />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
