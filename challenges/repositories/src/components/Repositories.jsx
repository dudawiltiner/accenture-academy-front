import React from 'react';
import * as S from '../css/RepositoriesCSS';
import { CgDetailsMore } from 'react-icons/cg'
import useRepositories from '../hooks/useRepositories';

export default function Repositories() {
  const { navigate, listRepo } = useRepositories()

  return (
    <S.ListRepos>
      <S.Title><S.IconGit />Repositories</S.Title>
      <S.List>
        {
          listRepo.map((item, idx) => (
            <S.Repo key={idx}>
              <S.Name target="_blank" href={item.url}>{item.name}</S.Name>
              <S.Button onClick={() => navigate(`/detail/${item.name}`)}>
                <CgDetailsMore />{' '}details
              </S.Button>
            </S.Repo>
          ))
        }
      </S.List>
    </S.ListRepos>
  );
}
