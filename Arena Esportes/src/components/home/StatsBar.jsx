import './StatsBar.css';

const stats = [
  { value: '03', label: 'Quadras ao ar livre' },
  { value: '03', label: 'Jeitos de entrar no jogo' },
  { value: '06H–23H', label: 'Segunda a sexta' },
  { value: '07H–22H', label: 'Sábado e domingo' },
];

const StatsBar = () => (
  <section className="stats-bar" aria-label="Informações da arena">
    <div className="stats-bar-inner">
      {stats.map((stat) => (
        <div className="stats-item" key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;
