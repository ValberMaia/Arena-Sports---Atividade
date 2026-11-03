import Location from '../common/Location';
import './RegisterIntro.css';

const RegisterIntro = () => {
  return (
    <div className="register-intro">
      <div className="register-intro-text">
        <h2>Tem lugar pra você nesse jogo.</h2>
        <p>Crie sua conta e dê o primeiro passo para viver a TabuSports. Da primeira partida à sua nova rotina na areia.</p>
      </div>

      <div className="register-intro-image">
        <img src="/generics/Dupla de beach tennis.png" alt="Introdução ao registro" />
      </div>

      <div className="register-intro-check-list">
        <ul>
          <li>
            Escolha sua modalidade favorita
          </li>
          <li>
            Aproxime-se da nossa comunidade
          </li>
          <li>
            Organize o próximo encontro com a equipe
          </li>
          <li>
            Jogue e divirta-se
          </li>
        </ul>
      </div>

      <div className="register-intro-local">
        <Location />
      </div>

    </div>
  )
}

export default RegisterIntro
