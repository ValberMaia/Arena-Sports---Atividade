import { Link } from 'react-router-dom';
import './SportCard.css';

const SportCard = ({ title, description, image, href = '/cadastro' }) => (
  <article className="sport-card">
    <Link to={href} className="sport-card-image-link" aria-label={`Saiba mais sobre ${title}`}>
      <img src={image} alt={`Prática de ${title}`} />
    </Link>
    <div className="sport-card-heading">
      <h3>{title}</h3>
      <Link to={href} aria-label={`Ver ${title}`} className="sport-card-arrow">↗</Link>
    </div>
    <p>{description}</p>
  </article>
);

export default SportCard;
