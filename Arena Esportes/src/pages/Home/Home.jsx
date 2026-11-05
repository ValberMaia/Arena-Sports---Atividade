import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import HeroSection from '../../components/home/HeroSection';
import StatsBar from '../../components/home/StatsBar';
import SportsSection from '../../components/home/SportsSection';
import ArenaSection from '../../components/home/ArenaSection';
import CourtSection from '../../components/home/CourtSection';
import EventsSection from '../../components/home/EventsSection';
import CommunitySection from '../../components/home/CommunitySection';
import LocationSection from '../../components/home/LocationSection';
import FinalCTA from '../../components/home/FinalCTA';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Header currentPage="PÁGINA INICIAL" />
      <main>
        <HeroSection />
        <StatsBar />
        <SportsSection />
        <ArenaSection />
        <CourtSection />
        <EventsSection />
        <CommunitySection />
        <LocationSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
