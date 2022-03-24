import React from "react";

import CountProvider from "../../context/CountContext";

import Container from "../../components/Container/Container";
import Count from "../../components/Count/Count";
import Espelho from "../../components/Espelho/Espelho";

export default function CountExemple() {
  return (
    <CountProvider>
      <Container title="Contador">
        <Count />
        <Espelho />
      </Container>
    </CountProvider>
  );
}
