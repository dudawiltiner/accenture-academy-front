import React from 'react';
import * as S from '../css/NavBarCSS';
import useNavBar from '../hooks/useNavBar';

export default function NavBar({ changeTheme }) {
  const { mode, changeMode } = useNavBar(changeTheme);

  return (
    <S.NavBar>
      <div>
        <S.Link href="#home">Home</S.Link>
        <S.Link href="#hardskills">HardSkills</S.Link>
        <S.Link href="#contact">Contact</S.Link>
      </div>
      {/* https://www.w3schools.com/howto/howto_css_switch.asp */}
      <S.Switch>
        <S.ButtonClick onClick={changeMode}/>
        <S.Slider 
          shadow={mode.shadow} 
          translate={mode.translate} 
          color={mode.color}
        />
      </S.Switch>
    </S.NavBar>
  );
}
