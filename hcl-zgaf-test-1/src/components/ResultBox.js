import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import colors from '../utils/colors';


export default function Result(props) {
    const { result } = props;

  return (
    <View style={styles.viewForm}>
      <Text style={styles.text}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    top: 50,
    width: '80%',
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    marginLeft: 10
  }
})