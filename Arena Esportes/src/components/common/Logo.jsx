import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = ({
  src = '/images/logo.png',
  alt = 'TabuSports',
  width = 175,
  to = '/',
  className = '',
}) => {
  const image = (
    <img
      src={src}
      alt={alt}
      style={{ width }}
      className="logo-image"
    />
  );

  return (
    <div className={`logo ${className}`.trim()}>
      {to ? (
        <Link to={to} aria-label="Ir para a página inicial">
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default Logo;
