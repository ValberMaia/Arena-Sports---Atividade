import { Link } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = () => {
  return (
    <nav className="breadcrumb" aria-label="Navegação estrutural">
      <Link to="/">Início</Link>

      <span className="breadcrumb-separator" aria-hidden="true">
        ›
      </span>

      <span className="breadcrumb-current" aria-current="page">
        Cadastro de clientes
      </span>
    </nav>
  );
};

export default Breadcrumb;
