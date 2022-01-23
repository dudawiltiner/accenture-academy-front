import React from 'react';
import * as S from '../css/FooterCSS';

export default function Footer() {
  return (
    <S.FooterIcon>
      <S.ButtonIcon href="https://linkedin.com/in/eduarda%20wiltiner%20reis%20santana" target="_blank" color="#72ddf7"><S.IconLens /></S.ButtonIcon>
      <S.ButtonIcon href="https://github.com/dudawiltiner" target="_blank" color="#8093f1"><S.IconLens1 /></S.ButtonIcon>
      <S.ButtonIcon href="https://dudaportfolio.vercel.app/" target="_blank" color="#b388eb"><S.IconLens2 /></S.ButtonIcon>
      <S.ButtonIcon href="https://instagram.com/dudatech_oficial?r=nametag" target="_blank" color="#f7aef8"><S.IconLens3 /></S.ButtonIcon>
    </S.FooterIcon>
  );
}
