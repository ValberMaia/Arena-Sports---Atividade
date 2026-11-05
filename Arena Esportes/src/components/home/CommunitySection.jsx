import './CommunitySection.css';

const CommunitySection = () => (
  <section className="community-section">
    <div className="community-section-inner">
      <div className="community-copy">
        <h2>A gente joga junto. E fica mais um pouco.</h2>
        <p>Tem o ponto disputado, a risada no intervalo e a amizade que sai da quadra. A TabuSports é sobre esporte, mas também sobre pertencer.</p>
        <ul>
          <li><img src="/images/icons/check-circle.svg" alt="" />Primeira vez? A equipe ajuda você a se ambientar.</li>
          <li><img src="/images/icons/check-circle.svg" alt="" />Já tem uma turma? Escolham a quadra e o horário.</li>
          <li><img src="/images/icons/check-circle.svg" alt="" />Veio só torcer? A resenha também é sua.</li>
        </ul>
        <strong>Seu jogo. Sua turma. Seu lugar.</strong>
      </div>
      <img className="community-image" src="/generics/Convivência na arena.png" alt="Amigos conversando juntos depois de jogar na arena" />
    </div>
  </section>
);

export default CommunitySection;
