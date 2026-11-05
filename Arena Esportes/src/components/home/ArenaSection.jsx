import SectionTitle from '../common/SectionTitle';
import './ArenaSection.css';

const features = [
  { icon: 'sun.svg', title: 'Areia e céu aberto', text: 'Três quadras para aproveitar o dia.' },
  { icon: 'lightbulb.svg', title: 'Iluminação noturna', text: 'O jogo continua depois do pôr do sol.' },
  { icon: 'check-circle.svg', title: 'Vestiários com ducha', text: 'Conforto antes e depois da partida.' },
  { icon: 'coffee.svg', title: 'Convivência e lanchonete', text: 'Uma pausa boa para reunir a turma.' },
];

const ArenaSection = () => (
  <section className="arena-section" id="arena">
    <div className="arena-section-inner">
      <img className="arena-section-image" src="/generics/Arena ao pôr do sol.png" alt="Vista da estrutura da arena TabuSports" />
      <div className="arena-section-content">
        <SectionTitle title={<>Estrutura para o jogo.<br />Espaço para ficar.</>} />
        <p className="arena-section-intro">Uma arena pensada para acolher: da chegada tranquila à conversa que continua depois do último ponto.</p>
        <div className="arena-features">
          {features.map((feature) => (
            <div className="arena-feature" key={feature.title}>
              <img src={`/images/icons/${feature.icon}`} alt="" />
              <div><strong>{feature.title}</strong><span>{feature.text}</span></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ArenaSection;
