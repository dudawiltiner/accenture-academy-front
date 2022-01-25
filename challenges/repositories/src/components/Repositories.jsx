import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import * as S from '../css/RepositoriesCSS';
import gitHubAPIGeneral from '../service/gitHubAPI';
import { CgDetailsMore } from 'react-icons/cg'

export default function Repositories() {
  const [listRepo, setListRepo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const res = await gitHubAPIGeneral("/repos");
    const newList = res.map((item) => ({name: item.name, url: item.html_url}));
    setListRepo([...newList]);
  }

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
