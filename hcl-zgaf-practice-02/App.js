import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Button } from 'react-native';

import colors from './src/utils/colors';
import Form from './src/components/Form';
import Result from './src/components/Result';

export default function App() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);

  const onSubmit = () => {
    console.log("Numero 1 -> ", num1);
    console.log("Numero 2 -> ", num2);
  }

  return (
    <>
      <StatusBar barStyle="dark-content"></StatusBar>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.titleApp}><Text style={styles.textstyle}>Números Chidos</Text></View>
        <Result num1={num1} num2={num2} />
        <Form setNum1={setNum1} setNum2={setNum2}></Form>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {

    height: "100%",
    alignItems: 'center'
  },
  titleApp: {
    alignItems: 'center',
    backgroundColor: colors.PRIMARY_COLOR,
    width: '100%',
    height: 200,
    fontSize: 50,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonStyle: {
    bottom: -400,
    paddingHorizontal: 30,
  },
  textstyle: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 50,
    fontSize: 30,
  }

})