import React from 'react';
import { Box, Figure, Number, Quanty, Subtitle } from '../css/AboutCSS';
import * as S from '../css/DateilCSS';
import { GlobalStyle } from '../css/GlobalCSS';
import { BoxRepos, MainRepos } from '../css/MainCSS';
import useDetail from '../hooks/useDetail';

export default function DetailRepo() {
  const { repo, navigate } = useDetail();

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
