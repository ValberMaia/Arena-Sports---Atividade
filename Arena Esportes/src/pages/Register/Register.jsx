import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import RegisterIntro from '../../components/register/RegisterIntro';
import RegisterForm from '../../components/register/RegisterForm';
import Breadcrumb from '../../components/common/Breadcrumb';
import './Register.css';

const Register = () => {
  return (
    <div className="register-page">
      <Header currentPage="CADASTRO DE CLIENTES" />

      <div className="register-breadcrumb">
        <Breadcrumb />
      </div>

      <main className="register-container">
        <div className="register-left">
          <RegisterIntro />
        </div>

        <div className="register-right">
          <RegisterForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
