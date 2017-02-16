import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const logo = require('./images/logo.png');
const botaoJogar = require('./images/botao_jogar.png');
const btnSobreJogo = require('./images/sobre_jogo.png');
const btnOUtrosJogos = require('./images/outros_jogos.png');

class App extends Component {
  render() {
    return (
      <View style={styles.main}>

        <View style={styles.sectionGame}>
          <Image source={logo} />
          <Image source={botaoJogar} />
        </View>

        <View style={styles.footer}>
          <Image source={btnSobreJogo} />
          <Image source={btnOUtrosJogos} />
        </View>

      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor: '#61BD8C',
    padding: 4
  },

  sectionGame: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },

  footer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }


})




