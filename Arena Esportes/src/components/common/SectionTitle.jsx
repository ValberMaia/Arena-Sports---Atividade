import './SectionTitle.css';

const SectionTitle = ({
  eyebrow,
  title,
  description,
  align = 'left',
  size = 'medium',
  className = '',
  as: Heading = 'h2',
}) => {
  return (
    <div
      className={`section-title section-title-${align} section-title-${size} ${className}`.trim()}
    >
      {eyebrow && (
        <span className="section-title-eyebrow">
          {eyebrow}
        </span>
      )}

      <Heading className="section-title-heading">
        {title}
      </Heading>

      {description && (
        <p className="section-title-description">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
