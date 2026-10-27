import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
        <h1>Bem-vindo à TabuSports</h1>
        <p>Seu ponto de encontro com a areia.</p>

        <Link to="/cadastro">
            Cadastre-se
        </Link>
    </main>
  )
}

export default Home
