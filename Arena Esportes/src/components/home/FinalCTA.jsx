import Button from '../common/Button';
import './FinalCTA.css';

const FinalCTA = () => (
  <section className="final-cta">
    <div className="final-cta-inner">
      <div>
        <h2>A próxima partida pode ser a sua.</h2>
        <p>Crie sua conta. Encontre seu jogo. A areia espera por você.</p>
      </div>
      <Button variant="primary" arrow to="/cadastro">Quero fazer parte</Button>
    </div>
  </section>
);

export default FinalCTA;
