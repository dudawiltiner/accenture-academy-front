import React from 'react';
import About from '../components/About';
import Repositories from '../components/Repositories';
import { GlobalStyle } from '../css/GlobalCSS';
import { BoxRepos, MainRepos } from '../css/MainCSS';

export default function Main() {
  return(
    <MainRepos>
      <GlobalStyle />
      <BoxRepos>
        <About />
        <Repositories />
      </BoxRepos>
    </MainRepos> 
  );
}
