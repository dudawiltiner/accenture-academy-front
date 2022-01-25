import styled, { css } from "styled-components";
import { AiFillGithub, AiFillBook } from 'react-icons/ai'

export const Figure = styled.img`
  width: ${(props) => props.widthImage};
  border-radius: 50%;
  border: double 6px blue;
  box-shadow: blue 0px 3px 8px;
`; 

export const Name = styled.p`
  margin: 4px;
`;

export const Phrase = styled.p`
  margin: 4px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: ${(props) => props.align};
  align-items: center;
`;

export const Subtitle = styled.p`
  margin-bottom: 6px;
  font-weight: bold;

`;

export const Quanty = styled.div`
  margin-right: 20px;
`;

export const Number = styled.p`
  font-size: 25px;
`;

export const Link = styled.a`
  /* https://edrodrigues.com.br/blog/20-incriveis-botoes-animados-de-css-puro/ */
 
  background-color: transparent;
  border: 2px solid ${(props) => props.color};
  border-radius: 50%;
  color: ${(props) => props.color};
  cursor: pointer;
  margin: 20px;
  padding: 0.8em 0.9em;
  -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out, all 0.4s ease;

  &:hover, &:focus {
    color: #fff;
    outline: 0;
    transform: translateY(-4px);
    box-shadow: 0 0 40px 40px ${(props) => props.color} inset;
  }
`;

export const DefaultWidth = css`
  width: 30px;
  height: 30px;
`;

export const IconLens1 = styled(AiFillGithub)`
  ${DefaultWidth}
`;

export const IconLens2 = styled(AiFillBook)`
  ${DefaultWidth}
`;