import Button from '../common/Button';
import './HeroSection.css';

const HeroSection = () => (
  <section className="home-hero">
    <div className="home-hero-inner">
      <div className="home-hero-copy">
        <h1>Pé na areia.<br />Sol na alma.<br />Bora jogar.</h1>
        <p>
          Beach tennis, futevôlei e vôlei de praia. Um lugar para se movimentar,
          reunir a turma e viver o melhor de Tabuleiro do Norte.
        </p>
        <Button variant="primary" arrow to="/cadastro">
          Faça parte da TabuSports
        </Button>
      </div>
      <div className="home-hero-image-wrap">
        <img
          className="home-hero-image"
          src="/generics/Jogo de beach tennis ao entardecer.png"
          alt="Atleta praticando esporte em uma quadra de areia"
        />
        <span className="home-hero-caption">O jogo é só o começo.</span>
      </div>
    </div>
  </section>
);

export default HeroSection;
