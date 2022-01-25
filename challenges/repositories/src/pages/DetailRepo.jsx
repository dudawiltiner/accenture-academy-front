import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Box, Figure, Number, Quanty, Subtitle } from '../css/AboutCSS';
import * as S from '../css/DateilCSS';
import { useNavigate } from 'react-router';
import { GlobalStyle } from '../css/GlobalCSS';
import { BoxRepos, MainRepos } from '../css/MainCSS';
import { gitHubAPIRepository } from '../service/gitHubAPI';

export default function DetailRepo() {
  const { name } = useParams();
  const [repo, setRepo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    init();
  }, []);


  async function init() {
    const res = await gitHubAPIRepository(name);
    const newRepo = {
      name: res.full_name,
      acess: res.html_url,
      visib: res.visibility,
      language: res.language,
      size: res.size,
      clone: res.clone_url,
      image: res.owner.avatar_url
    }

    setRepo(newRepo)
  }
  return (
    <MainRepos>
        <GlobalStyle />
        <BoxRepos>
          <S.BoxMain>
            <S.Name>{repo.name}</S.Name>
            <Figure widthImage="100px" src={repo.image} alt="duda wiltiner"/>
          </S.BoxMain>
          <Box align="space-between">
            <p><i>{repo.visib}</i></p>
            <Quanty>
              <Subtitle>Size</Subtitle>
              <Number>{repo.size}</Number>
            </Quanty>
            <S.Language>{repo.language}</S.Language>
          </Box>
          <S.CloneRepo>{`git clone ${repo.clone}`}</S.CloneRepo>
          <S.BoxMain>
            <S.LinkRepo  target="_blank"  href={repo.acess}>Acess Repo</S.LinkRepo>
            <S.ButtonBack onClick={() => navigate("/")}>Back</S.ButtonBack>
          </S.BoxMain>
        </BoxRepos>
    </MainRepos>
  );
}
