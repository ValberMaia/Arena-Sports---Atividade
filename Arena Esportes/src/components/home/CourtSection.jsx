import SectionTitle from '../common/SectionTitle';
import CourtCard from './CourtCard';
import './CourtSection.css';

const courts = [
  { name: 'Quadra Sol', sport: 'Beach tennis', capacity: 'Duplas ou até 4 jogadores', feature: 'Iluminação para partidas noturnas', icon: 'sun.svg' },
  { name: 'Quadra Vento', sport: 'Futevôlei', capacity: 'Duplas ou até 4 jogadores', feature: 'Iluminação para partidas noturnas', icon: 'wind.svg' },
  { name: 'Quadra Sertão', sport: 'Vôlei de praia', capacity: 'Duplas ou equipes com até 8 jogadores', feature: 'Iluminação para partidas noturnas', icon: 'mountain.svg' },
];

const CourtSection = () => (
  <section className="court-section" id="quadras">
    <div className="court-section-inner">
      <div className="court-section-heading">
        <SectionTitle title="Cada quadra, uma energia." />
        <span>03 quadras identificadas • todas ao ar livre</span>
      </div>
      <div className="court-grid">
        {courts.map((court) => <CourtCard key={court.name} {...court} />)}
      </div>
    </div>
  </section>
);

export default CourtSection;
