import React from "react";
import Container from "../../components/Container/Container";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

export default function Details() {
  const navigate = useNavigate();

  return (
    <Container title="Details">
      <Button name="Back" onClick={() => navigate("../pokemon")} />
    </Container>
  );
}
