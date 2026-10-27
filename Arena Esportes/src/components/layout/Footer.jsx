
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-logo">
          <a href="/" className="footer-brand">
            <img
              src="/images/altLogo.png"
              alt="Logo TabuSports"
            />
          </a>

          <p>
            Seu ponto de encontro com a areia.
            <br />
            Tabuleiro do Norte, Ceará.
          </p>
        </div>

        <div className="footer-arena-inf">
          <h3>DENTRO DA ARENA</h3>

          <a href="/#modalidades">Modalidades e quadras</a>
          <a href="/#horarios">Consultar horários</a>
          <a href="/#eventos">Notícias e eventos</a>
          <a href="/cadastro">Crie sua conta</a>
        </div>

        <div className="footer-horarios">
          <h3>BORA JOGAR?</h3>

          <p>Seg–sex: 06h às 23h</p>
          <p>Sáb–dom: 07h às 22h</p>

          <a href="mailto:oi@tabusports.example">
            tabusportsarena@gmail.com
          </a>
        </div>

        <div className="footer-contato">
          <h3>ACOMPANHE</h3>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="footer-instagram"
          >
            <img
              src="/instagram-logo.png"
              alt="Logo Instagram"
              width="18"
              height="18"
            />
            @tabusports.arena
          </a>
        </div>

      </div>

      <div className="footer-copyright">
        <p>
          © 2026 TabuSports. Projeto conceitual: arena,
          contatos e programação fictícios.
        </p>

        <div className="links">
          <a href="/#termos">Termos de uso</a>
          <a href="/#privacidade">Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
