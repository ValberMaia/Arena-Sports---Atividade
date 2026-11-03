import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  arrow = false,
  to,
  href,
  type = 'button',
  onClick,
  className = '',
  disabled = false,
}) => {
  const classes = `button button-${variant} ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>
      {arrow && <span className="button-arrow" aria-hidden="true">↗</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
