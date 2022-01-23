import React from 'react';
import * as S from '../css/MainCSS';

export default function Main() {
  const colors = ["#72ddf7", "#8093f1", "#b388eb", "#f7aef8", "#fdc5f5"]
  
  return (
    <S.MainDiv>
      <div>
        {colors.map((item, idx) =>
          <S.Box time={idx+1} color={item} /> 
        )}
      </div>
      <S.Title>Hello World!</S.Title>
      <S.Figure alt="foto da duda" src="./duda.jpeg" />
      <div>
        {colors.map((item, idx) =>
          <S.Box time={idx+1} color={item} /> 
        )}
      </div>
    </S.MainDiv>
  );
}
