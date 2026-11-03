import { useState } from 'react';

import './RegisterForm.css';
import FormField from './FormField';
import PasswordField from './PasswordField';
import SportSelect from './SportSelect';
import FormFeedback from './FormFeedback';
import PrivacyNotice from './PrivacyNotice';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    birthDate: '',
    sport: '',
    password: '',
    confirmPassword: '',
  });

  const [feedback, setFeedback] = useState({
    type: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setFeedback({
      type: '',
      message: '',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      (formData.password || formData.confirmPassword) &&
      formData.password !== formData.confirmPassword
    ) {
      setFeedback({
        type: 'error',
        message: 'As senhas não coincidem.',
      });

      return;
    }

    if (formData.password && formData.password.length < 8) {
      setFeedback({
        type: 'error',
        message: 'A senha deve possuir pelo menos 8 caracteres.',
      });

      return;
    }

    console.log('Dados do cadastro:', {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      sport: formData.sport,
    });

    setFeedback({
      type: 'success',
      message: 'Cadastro realizado com sucesso!',
    });

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      birthDate: '',
      sport: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="register-form-card">

      <div className="register-form-header">
        <h2>Crie sua conta</h2>

        <span>Cadastro gratuito</span>

        <p>
          Preencha seus dados abaixo. Os campos com * são obrigatórios.
        </p>

        <small>
          Já faz parte da turma? <a href="/login">Entrar na minha conta</a>
        </small>
      </div>

      <form onSubmit={handleSubmit}>

        <section className="form-section">
          <h3>
            <img src="/images/icons/user.svg" alt="" />
            Sobre você
          </h3>

          <FormField
            label="Nome completo"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Digite seu nome e sobrenome"
            helpText="Use seu nome completo, sem abreviações."
            required
          />

          <div className="form-row">
            <FormField
              label="E-mail"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="voce@exemplo.com"
              helpText="Use um e-mail ao qual você tenha acesso."
              required
            />

            <FormField
              label="Telefone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(88) 9 0000-0000"
              helpText="Inclua o DDD e o número do celular."
              required
            />
          </div>

          <div className="form-row">
            <FormField
              label="Data de nascimento"
              name="birthDate"
              type="date"
              value={formData.birthDate}
              onChange={handleChange}
              placeholder="DD/MM/AAAA"
              helpText="Informe dia, mês e ano."
              required
            />

            <SportSelect
              value={formData.sport}
              onChange={handleChange}
              placeholder="Selecione uma modalidade"
              required
            />
          </div>
        </section>

        <section className="form-section">
          <h3>
            <img src="/images/icons/lock.svg" alt="" />
            Proteja seu acesso
          </h3>

          <div className="form-row">
            <PasswordField
              label="Senha"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Crie uma senha"
              helpText="Mínimo de 8 caracteres."
              required
            />

            <PasswordField
              label="Confirmação de senha"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Digite a senha novamente"
              helpText="As senhas precisam ser iguais."
              required
            />
          </div>
        </section>

        <div className="form-terms">
          <label>
            <input type="checkbox" required />

            <span>
              Li e aceito os <a href="/#termos">Termos de uso</a> e a
              <a href="/#privacidade"> Política de privacidade</a> da TabuSports.
            </span>
          </label>
        </div>

        <FormFeedback
          type={feedback.type}
          message={feedback.message}
        />

        <button type="submit" className="register-submit">
          Criar minha conta <span aria-hidden="true">↗</span>
        </button>

        <PrivacyNotice />

      </form>
    </div>
  );
};

export default RegisterForm;
