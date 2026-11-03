import './PrivacyNotice.css';

const PrivacyNotice = () => {
  return (
    <div className="privacy-notice">
      <img
        src="/images/icons/shield-check.svg"
        alt=""
        aria-hidden="true"
      />

      <p>
        Seus dados são pessoais. Não compartilhe sua senha e consulte como
        suas informações são tratadas na Política de privacidade.
      </p>
    </div>
  );
};

export default PrivacyNotice;
