import React, { useEffect, useState } from 'react';
import * as S from '../css/AboutCSS';
import gitHubAPIGeneral from '../service/gitHubAPI';

export default function About() {
  const [about, setAbout] = useState({});

  useEffect(() => {
    init();
  }, []);
  

  async function init() {
    const res = await gitHubAPIGeneral("")
    const newAbout = {
      name: res.name,
      fullName: res.login,
      image: res.avatar_url,
      portfolio: res.blog,
      phrase: res.bio,
      gitHub: res.html_url,
      publicRepos: res.public_repos,
      followers: res.followers
    }
    console.log(res);

    setAbout(newAbout);
  }

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
