import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  background: #fafbfc;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  max-width: 400px;
  margin: 0 auto;
  @media (max-width: 600px) {
    padding: 12px 2vw;
    max-width: 98vw;
  }
`;
const Label = styled.label`
  font-weight: 500;
  margin-bottom: 4px;
`;
const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  width: 100%;
`;
const Button = styled.button`
  padding: 12px 0;
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1.1em;
  cursor: pointer;
  margin-top: 8px;
  &:hover {
    background: #0d47a1;
  }
`;
const Title = styled.h2`
  text-align: center;
  color: #1976d2;
  margin-bottom: 24px;
  font-size: 2em;
  font-weight: 700;
  letter-spacing: 1px;
`;
const Error = styled.p`
  color: #d32f2f;
  margin: 0;
  text-align: center;
  font-weight: 500;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate("/admin");
    } else {
      setError("Usuário ou senha inválidos");
    }
  };

  return (
    <div>
      <Title>Login do Professor</Title>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label>Usuário:</Label>
          <Input value={username} onChange={e => setUsername(e.target.value)} required />
        </div>
        <div>
          <Label>Senha:</Label>
          <Input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        {error && <Error>{error}</Error>}
        <Button type="submit">Entrar</Button>
      </Form>
      <p style={{textAlign:'center',marginTop:16}}>Utilize <strong>professor</strong> como usuário e <strong>1234</strong> como senha para testar</p>
    </div>
  );
};

export default Login;
