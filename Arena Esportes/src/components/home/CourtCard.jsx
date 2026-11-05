import './CourtCard.css';

const CourtCard = ({ name, sport, capacity, feature, icon }) => (
  <article className="court-card">
    <div className="court-card-top">
      <div className="court-diagram" aria-hidden="true"><span /></div>
      <img src={`/images/icons/${icon}`} alt="" />
    </div>
    <h3>{name}</h3>
    <strong>{sport}</strong>
    <p>{capacity}</p>
    <div className="court-card-feature">
      <img src="/images/icons/map-pin.svg" alt="" />
      <span>{feature}</span>
    </div>
  </article>
);

export default CourtCard;
