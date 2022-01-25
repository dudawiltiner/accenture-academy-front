import styled, { css } from "styled-components";

export const BoxMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  text-decoration: underline;
  font-weight: bold;
  font-size: 18px;
  color: #252323;
`;

export const Language = styled.p`
  font-weight: bold;
  font-size: 18px;
  background-color: rgb(247, 180, 92);
  padding: 6px;
  border-radius: 10px;
  color: #252323;
`;

export const CloneRepo = styled.p`
  font-weight: bold;
  font-size: 16px;
  background-color: #252323;
  padding: 20px;
  margin: 26px 0px;
  border: dotted 2px yellow;
  color: white;
`;

const Button = css`
  font-weight: bold;
  font-size: 16px;
  width: 140px;
  background-color: purple;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  border-radius: 10px;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: blue;
  }
`;

export const LinkRepo = styled.p`
  ${Button}
`;

export const ButtonBack = styled.p`
  ${Button}
  background-color: blue;

  &:hover {
    background-color: purple;
  }
`;