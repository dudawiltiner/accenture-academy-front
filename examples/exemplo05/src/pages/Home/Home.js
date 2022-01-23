import React from "react";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import * as S from "./Home.styles";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container title="Home">
      <S.Div>
        <S.Body>
          <S.Text>Bem vindo(a).</S.Text>
        </S.Body>

        <S.Footer>
          <Button name="Back" onClick={() => navigate("../")} />
          <Button name="Next" onClick={() => navigate("../pokemon")} />
        </S.Footer>
      </S.Div>
    </Container>
  );
}
