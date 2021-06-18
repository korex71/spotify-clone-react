import { useState } from 'react';
import { Container } from './styles';

function ForgotPassword() {

  const [email, setEmail] = useState("");

  const handle = () => {
    
    console.log(email)
  }

  return (
    <Container className="bg-dark vh-100">
      <div className="form">
        <h2 className="text-light">Recuperação de senha</h2>
        <input type="text" 
          placeholder="Digite seu email" 
          className="rounded border border-dark"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn border border-dark mt-1 bg-light" onClick={handle}>
          Enviar email de recuperação
        </button>

        <a href="/" className="pt-2 text-success">Voltar</a>
      </div>
    </Container>
  );
};

export default ForgotPassword;
