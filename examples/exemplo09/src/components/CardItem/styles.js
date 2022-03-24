import styled from "styled-components";

export const Container = styled.div`
  background-color: #f4f4f4;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px 0px;
`;

export const Checkbox = styled.input``;

export const Label = styled.p`
  margin: 0px;
  display: inline;
  margin-left: 10px;
  color: #0f0f0f;
`;

export const Button = styled.button`
  border: none;
  color: red;

  &:active {
    color: green;
  }
`;
