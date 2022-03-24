import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/Container/Container";
import * as S from "./Login.styles";
import { useUser } from "../../context/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const { loadUser } = useUser();

  const loginDefault = { email: "test@test.com", password: "123" };
  const [dados, setDados] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      loginDefault.email === dados.email &&
      loginDefault.password === dados.password
    ) {
      loadUser();
      navigate("home");
    } else {
      alert("E-mail ou senha inválios.");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
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
