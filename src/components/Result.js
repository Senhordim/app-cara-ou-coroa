import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const moedaCoroa = require('../images/moeda_coroa.png');
const moedaCara = require('../images/moeda_cara.png');

class Result extends Component {

  constructor(props) {
    super(props);
    this.state = {result: ''};
  }

  componentWillMount() {
    const numberRandom = Math.floor(Math.random() * 2);

    let resultCoin = '';

    if (numberRandom === 0){
      resultCoin = 'moedaCara';
    } else {
      resultCoin = 'moedaCoroa';
    }

    this.setState({result: resultCoin })

  }


  render() {

    if (this.state.result === 'moedaCara'){
      return(
        <View style={styles.main}>
          <Image source={ moedaCara} />
        </View>
      );
    }

    return(
      <View style={styles.main}>
        <Image source={ moedaCoroa} />
      </View>
    );


  }
}

export default Result;

const styles = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor: '#61BD8C',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
