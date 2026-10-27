import { Link } from 'react-router-dom';
import './Home.css';
import Header from '../../components/layout/Header';


const Home = () => {
  return (
  <div className="home-page">
    <Header />

    <main className="home-main">
      <h1>Bem-vindo à TabuSports</h1>
      <p>Seu ponto de encontro com a areia.</p>

      <Link to="/cadastro">Cadastre-se</Link>
    </main>
    <main className="home-main">
      <h1>Bem-vindo à TabuSports</h1>
      <p>Seu ponto de encontro com a areia.</p>

      <Link to="/cadastro">Cadastre-se</Link>
    </main>
    <main className="home-main">
      <h1>Bem-vindo à TabuSports</h1>
      <p>Seu ponto de encontro com a areia.</p>

      <Link to="/cadastro">Cadastre-se</Link>
    </main>
    <main className="home-main">
      <h1>Bem-vindo à TabuSports</h1>
      <p>Seu ponto de encontro com a areia.</p>

      <Link to="/cadastro">Cadastre-se</Link>
    </main>
    <main className="home-main">
      <h1>Bem-vindo à TabuSports</h1>
      <p>Seu ponto de encontro com a areia.</p>

      <Link to="/cadastro">Cadastre-se</Link>
    </main>
  </div>
);
}

export default Home
