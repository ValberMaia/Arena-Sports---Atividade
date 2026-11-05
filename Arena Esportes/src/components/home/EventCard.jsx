import './EventCard.css';

const EventCard = ({ day, month, date, title, description, sport }) => (
  <article className="event-card">
    <div className="event-date"><strong>{day}</strong><span>{month}</span></div>
    <div className="event-card-content">
      <small>{date}</small>
      <h3>{title}</h3>
      <p>{description}</p>
      <strong className="event-sport">{sport} ↗</strong>
    </div>
  </article>
);

export default EventCard;
