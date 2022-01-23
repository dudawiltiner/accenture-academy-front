import styled from "styled-components"

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 110px;
`;

export const Figure = styled.img`
  width: 400px;
  margin: 10px;
  border-radius: 50% 70%;
  border: solid 12px ${(props) => props.theme.secondary };;
  transition: all 0.7s ease;

  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const Title = styled.p`
  font-size: 170px;
  word-break: break-all;
  max-width: 700px;
  margin: 10px;
  background-color: ${(props) => props.theme.secondary };
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: rgba(255,255,255,0.5) 0px 3px 3px;
`;

export const Box = styled.div`
  background: ${(props) => props.color};
  width: 200px;
  margin: 45px;
  border-radius: 15px;
  height: 50px;
  animation: go-back ${(props) => props.time}s infinite alternate;

  @keyframes go-back {
    from {
      transform: translateX(-100px);
    }
    to {
      transform: translateX(0);
    }
`;
