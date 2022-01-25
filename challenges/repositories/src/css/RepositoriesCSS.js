import styled from "styled-components";
import { DiGithubAlt } from 'react-icons/di'

export const ListRepos = styled.div`
  border-radius: 12px;
  border: double 2px rgb(176, 143, 209);
  box-shadow: rgb(176, 143, 209) 0px 3px 8px;
`;

export const List = styled.div`
  height: 300px;
  overflow-y: scroll;
  padding: 6px;

  &::-webkit-scrollbar {
  width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: white;
    border-radius: 22px;       
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(176, 143, 209);   
    border-radius: 20px;
    border: 3px solid white;
  }
`;

export const Repo = styled.div`
  display: flex;
  margin: 14px;
  font-size: 18px;
`;

export const Name = styled.a`
  color: #252323;
`;

export const Title = styled.p`
  border-radius: 9px 9px 0px 0px;
  background-color: rgb(176, 143, 209);
  padding: 10px;
  font-size: 19px;
  display: flex;
  justify-center: center;
  align-items: center;
  color: white;
  font-weight: bold;
`;

export const Button = styled.button`
  background-color: rgb(247, 180, 92);
  border-radius: 12px;
  border: solid 2px rgb(247, 180, 92);
  color: #252323;
  margin-left: 10px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #252323;
    color: rgb(247, 180, 92);
  }
`;

export const IconGit = styled(DiGithubAlt)`
  width: 25px;
  height: 25px;
`;
