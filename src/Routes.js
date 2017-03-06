import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

// Import componetns
import Home from './components/Home';
import aboutGame from './components/aboutGame';
import outherGames from './components/outherGames';
import Result from './components/Result';

const Routes = () => (
  <Router sceneStyle={{ paddingTop: 50 }}>
    <Scene key="root">
      <Scene key='home' component={ Home } title="Home" initial={true} />
      <Scene key='aboutgame' component={ aboutGame } title="Sobre o jogo" />
      <Scene key='outhergames' component={ outherGames } title="Outros jogos" />
      <Scene key='result' component={ Result } title="Resultado" />
    </Scene>
  </Router>
);


export default Routes;

