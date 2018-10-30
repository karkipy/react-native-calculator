import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './screens/Calculator';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Calculator />
      </View>
    );
  }
}