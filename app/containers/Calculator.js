'use strict';

import React, {Component, StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux/native';
import OutputScreen from '../components/outputScreen';
import History from '../components/history';

@connect(state => ({
  calculations: state.calculations
}))
class Calculator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <OutputScreen
          style={styles.outputScreen}
          value={42} />
        <History style={styles.history} />
        <Text>Hello world</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  outputScreen: {
    backgroundColor: '#6fccf5',
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40
  },
  history: {
    backgroundColor: '#4c4c4c',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  }
});

export default Calculator;
