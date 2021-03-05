import React from 'react';
import { StyleSheet, TextInput, View, } from 'react-native';

import colors from '../utils/colors';

export default function Form(props) {
  const { setNum1, setNum2 } = props;

  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInput}>
        <TextInput style={styles.input} placeholder="Numero1" keyboardType="numeric" onChange={(e) => setNum1(e.nativeEvent.text)} />
        <TextInput style={[styles.input, styles.input2]} placeholder="Numero2" keyboardType="numeric" onChange={(e) => setNum2(e.nativeEvent.text)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    top: 50,
    width: '80%',
    paddingHorizontal: -50,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  viewInput: {
    flexDirection: 'row'
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: "-50%",
    color: '#000',
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  input2: {
    width: '40%',
    marginLeft: 5,
  }
})