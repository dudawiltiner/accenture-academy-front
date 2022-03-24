import React from "react";
import { Outlet } from "react-router-dom";
import * as S from "./styles";

import Header from "../../components/Header";

const Layout = () => {
  return (
    <div>
      <Header title={"TODO Feira"}/>
      <S.Container>
        <Outlet />
      </S.Container>
    </div>
  );
};

export default Layout;


// TODO: 
// Contextualizar o TODO, ex: carrinho de compras, etcc.
// Validar valor do input vazio
// Ao Remover Exibir uma mensagem de alert
// Criar componente de Card + Card Item
