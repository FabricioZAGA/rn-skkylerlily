import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import colors from '../utils/colors';


export default function Result(props) {
  const { num1, num2 } = props;

  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInput}>
        <Text style={styles.text}>Suma: {Number(num1) + Number(num2)}</Text>
        <Text style={styles.text}>Resta: {Number(num1) - Number(num2)}</Text>
        <Text style={styles.text}>Multiplicacion: {num1 * num2}</Text>
        <Text style={styles.text}>Division: {(num1 / num2) ? (num1 / num2) : 0}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {

    top: 100,
    width: '80%',
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  viewInput: {
    flexDirection: 'column'
  },
  text: {
    color: 'black',
    fontSize: 20,
    marginLeft: 10
  }
})