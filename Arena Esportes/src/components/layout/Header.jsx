import { useEffect, useState } from 'react';
import Logo from '../common/Logo';
import Button from '../common/Button';
import './Header.css';

const Header = ({ currentPage = 'PÁGINA INICIAL' }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

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
        <span>{currentPage}</span>
      </div>

      <div className="header">
        <div className="header-logo">
          <Logo width={145} />
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
          <Button variant="text" to="/login">
            Entrar
          </Button>

          <Button variant="primary" arrow to="/cadastro">
            Cadastre-se
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
