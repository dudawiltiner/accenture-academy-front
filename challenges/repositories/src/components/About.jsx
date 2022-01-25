import React from 'react';
import * as S from '../css/AboutCSS';
import useAbout from '../hooks/useAbout';

export default function About() {
  const { about } = useAbout();

  return (
    <div>
      <S.Figure widthImage="140px" src={about.image} alt="duda wiltiner"/>
      <S.Name>{`${about.name} - ${about.fullName}`}</S.Name>
      <S.Phrase><i>{about.phrase}</i></S.Phrase>
      <S.Box align="center">
        <S.Quanty>
          <S.Subtitle>Repositories</S.Subtitle>
          <S.Number>{about.publicRepos}</S.Number>
        </S.Quanty>
        <S.Quanty>
          <S.Subtitle>Followers</S.Subtitle>
          <S.Number>{about.followers}</S.Number>
        </S.Quanty>
        <S.Link target="_blank" color="#252323" href={about.porfolio}><S.IconLens1 /></S.Link>
        <S.Link target="_blank" color="orange" href={about.gitHub}><S.IconLens2 /></S.Link>
      </S.Box>
    </div>
  );
}
