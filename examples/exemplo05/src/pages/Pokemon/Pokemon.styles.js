import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";

export const Div = styled.div`
  display: flex;
  flex: 1;
  margin: 20px;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.label`
  padding-left: 10px;
`;

export const ButtonIcon = styled.button`
  background-color: transparent;
  border: none;
`;

export const Icon = styled(AiFillDelete)`
  font-size: 25px;
  color: #989898;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
`;
