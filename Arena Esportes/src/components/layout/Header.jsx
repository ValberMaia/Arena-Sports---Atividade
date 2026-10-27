
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    // Verifica também se a página já abriu rolada
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links = [
    { id: 1, nome: 'A arena', url: '/#arena' },
    { id: 2, nome: 'Modalidades', url: '/#modalidades' },
    { id: 3, nome: 'Na agenda', url: '/#agenda' },
    { id: 4, nome: 'Contato', url: '/#contato' },
  ];

  return (
    <div className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="mine-header">
        <p>AREIA, ESPORTE E ENCONTRO • TABULEIRO DO NORTE, CE</p>
        <span>PÁGINA INICIAL</span>
      </div>

      <div className="header">
        <div className="header-logo">
          <img src="/images/logo.png" alt="Logo TabuSports" />
        </div>

        <nav className="header-menu">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.nome}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-buttons">
          <button className="header-button">Entrar</button>

          <Link to="/cadastro" className="header-button">
            Cadastre-se <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
