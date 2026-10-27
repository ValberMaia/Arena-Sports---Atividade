import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <main>
        <h1>Cadastro</h1>
        <p>Preencha os dados para se cadastrar.</p>

        <Link to="/">
            Voltar para a página inicial
        </Link>
    </main>
  )
}

export default Register
