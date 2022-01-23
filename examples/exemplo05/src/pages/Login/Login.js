import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/Container/Container";
import * as S from "./Login.styles";

export default function Login() {
  const navigate = useNavigate();

  const loginDefault = { email: "test@test.com", password: "123" };
  const [dados, setDados] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    if (
      loginDefault.email === dados.email &&
      loginDefault.password === dados.password
    ) {
      navigate("home");
    } else {
      alert("E-mail ou senha inválios.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  };

  return (
    <Container title="Login">
      <S.FormDiv>
        <S.Form onSubmit={handleSubmit}>
          <S.Label>E-mail</S.Label>
          <S.Input type="email" name="email" onChange={handleChange} />

          <S.Label>Senha</S.Label>
          <S.Input type="password" name="password" onChange={handleChange} />

          <S.Button>Entrar</S.Button>
        </S.Form>
      </S.FormDiv>
    </Container>
  );
}
