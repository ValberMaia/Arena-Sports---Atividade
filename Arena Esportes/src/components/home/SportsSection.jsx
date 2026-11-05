import SectionTitle from '../common/SectionTitle';
import SportCard from './SportCard';
import './SportsSection.css';

const sports = [
  {
    title: 'Beach tennis',
    description: 'Técnica, paixão, boas duplas e diversão dentro de quadra. Encontre seu ritmo na Quadra Sol.',
    image: '/generics/Fotografia da modalidade.png',
    href: '/#contato',
  },
  {
    title: 'Futevôlei',
    description: 'Domínio, parceria e aquele ponto de tirar o fôlego. A Quadra Vento é o lugar da sua resenha.',
    image: '/generics/Fotografia da modalidade (1).png',
    href: '/#contato',
  },
  {
    title: 'Vôlei de praia',
    description: 'Do saque ao bloqueio, cada ponto aproxima a turma. Monte sua equipe e venha para a Quadra Sertão.',
    image: '/generics/Fotografia da modalidade (2).png',
    href: '/#contato',
  },
];

const SportsSection = () => (
  <section className="sports-section" id="modalidades">
    <div className="sports-section-inner">
      <SectionTitle title={<>Três modalidades. Infinitas<br /> boas partidas.</>} size="medium" />
      <div className="sports-grid">
        {sports.map((sport) => <SportCard key={sport.title} {...sport} />)}
      </div>
    </div>
  </section>
);

export default SportsSection;
