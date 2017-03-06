import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo = require('../images/logo.png');
const botaoJogar = require('../images/botao_jogar.png');
const btnSobreJogo = require('../images/sobre_jogo.png');
const btnOUtrosJogos = require('../images/outros_jogos.png');

class Home extends Component {
  render() {
    return (
      <View style={styles.main}>

        <View style={styles.sectionGame}>
          <Image source={logo} />
          <TouchableOpacity  onPress={ Actions.result }>
            <Image source={botaoJogar} />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>

          <TouchableOpacity  onPress={ Actions.aboutgame}>
            <Image source={btnSobreJogo} />
          </TouchableOpacity >

          <TouchableOpacity  onPress={ Actions.outhergames}>
            <Image source={btnOUtrosJogos} />
          </TouchableOpacity >

        </View>

      </View>
    );
  }
}

export default Home;

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
