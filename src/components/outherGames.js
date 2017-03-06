import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

class outherGames extends Component {
  render() {
    return(
      <View style={{flex: 1, backgroundColor: '#61BD8C'}}>
        <Text style={{color: '#fff', fontSize: 20, marginTop: 50}}>
          Outros jogos
        </Text>
      </View>
    );
  }
}

export default  outherGames;
