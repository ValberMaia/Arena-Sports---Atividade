import SectionTitle from '../common/SectionTitle';
import EventCard from './EventCard';
import './EventsSection.css';

const events = [
  { day: '24', month: 'OUT', date: 'SÁB • 17H • QUADRA SOL', title: 'Torneio de duplas do sol', description: 'Um torneio de saque, encontros e torcida.', sport: 'Beach tennis' },
  { day: '25', month: 'OUT', date: 'DOM • 10H • QUADRA VENTO', title: 'Desafio da vento', description: 'Duplas convidadas e pontos de tirar o fôlego.', sport: 'Futevôlei' },
  { day: '31', month: 'OUT', date: 'SÁB • 18H • QUADRA SERTÃO', title: 'Noite dos grandes jogos', description: 'Equipes mistas, rivalidade boa e arquibancada animada.', sport: 'Vôlei de praia' },
];

const EventsSection = () => (
  <section className="events-section" id="agenda">
    <div className="events-section-inner">
      <div className="events-heading">
        <SectionTitle title="Tem jogo bom vindo aí." />
        <span>Próximos encontros • outubro de 2026</span>
      </div>
      <div className="events-layout">
        <article className="event-feature">
          <img src="/generics/Turma reunida na arena.png" alt="Grupo de amigos reunidos em uma partida na areia" />
          <small>19 OUT 2026 • 3 MIN DE LEITURA</small>
          <h3>O melhor do jogo é ter com quem compartilhar.</h3>
          <p>Nossa agenda é aberta para aproximar iniciantes, duplas e torcedores. Escolha seu encontro e traga a turma.</p>
        </article>
        <div className="event-list">
          {events.map((event) => <EventCard key={event.day + event.title} {...event} />)}
        </div>
      </div>
    </div>
  </section>
);

export default EventsSection;
