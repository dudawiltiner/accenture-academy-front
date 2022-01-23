import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  background-color: ${(props) => props.theme.primary};
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  margin: 0px;
  padding: 14px 10px;
  box-shadow: 0px 16px 7px -16px gray;
`;

export const Link = styled.a`
  /* https://edrodrigues.com.br/blog/20-incriveis-botoes-animados-de-css-puro/ */
  margin: 30px;
  position: relative;
  color: ${(props) => props.theme.secondary };
  font-size: 12px;
  text-decoration: none;
  margin: 30px 0;
  padding: 14px 60px;
  text-transform: uppercase;
  overflow: hidden;
  font-weight: bolder;
  transition: 1s all ease;

  &:before {
    background-color: ${(props) => props.theme.highlight };
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 0%;
    height: 100%;
  }

  &:hover::before{
    width: 100%;
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

export const Slider = styled.span`
  position: absolute;
  border-radius: 34px;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.color};
  -webkit-transition: .4s;
  transition: .4s;
  box-shadow:${(props) => `0 0 ${props.shadow} #2196F3`};

  &:before {
    border-radius: 50%;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    -webkit-transform: ${(props) => `translateX(${props.translate})`};
    -ms-transform: ${(props) => `translateX(${props.translate})`};
    transform: ${(props) => `translateX(${props.translate})`};
    transition: .4s;
  }
`;

export const ButtonClick = styled.button`
  opacity: 0;
  width: 0;
  height: 0;
`;