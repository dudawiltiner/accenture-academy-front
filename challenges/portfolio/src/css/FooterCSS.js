import styled, {css} from "styled-components"
import {AiFillLinkedin, AiFillGithub, AiFillBook, AiFillInstagram} from 'react-icons/ai'

export const FooterIcon = styled.div`
  display: flex;
  justify-content: center; 
`;

export const ButtonIcon = styled.a`
  /* https://edrodrigues.com.br/blog/20-incriveis-botoes-animados-de-css-puro/ */
 
  background-color: transparent;
  border: 2px solid ${(props) => props.color};
  border-radius: 50%;
  color: ${(props) => props.color};
  cursor: pointer;
  margin: 20px;
  padding: 1.2em 1.2em;
  -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

  &:hover, &:focus {
    color: #fff;
    outline: 0;
    box-shadow: 0 0 40px 40px ${(props) => props.color} inset;
  }
`;

export const DefaultWidth = css`
  width: 80px;
  height: 80px;
`;

export const IconLens = styled(AiFillLinkedin)`
  ${DefaultWidth}
`;

export const IconLens1 = styled(AiFillGithub)`
  ${DefaultWidth}
`;

export const IconLens2 = styled(AiFillBook)`
  ${DefaultWidth}
`;

export const IconLens3 = styled(AiFillInstagram)`
  ${DefaultWidth}
`;


