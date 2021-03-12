import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Button } from 'react-native';

import colors from './src/utils/colors';
import ResultBox from './src/components/ResultBox'

export default function App() {
  const [result, setResult] = useState('');

  const [op1Count, setOp1Count] = useState(1);
  const [op1String, setOp1String] = useState('');

  const [op2Previous, setOp2Previous] = useState(0);
  const [op2Next, setOp2Next] = useState(1);
  const [op2String, setOp2String] = useState('');

  const [op3, setOp3] = useState(1);
  const [op3Next, setOp3Next] = useState(1);
  const [op3String, setOp3String] = useState('');

  const op1Function = () => { 
    let op1 = 2 * op1Count;
    setOp1Count(op1Count + 1)
    setOp1String(op1String + op1 + " ")

    console.log(op1String)
    setResult(op1String)
  }

  const op2Function = () => {
    let op2Temp;
    setOp2String(op2String + `${op2Previous} `)
    console.log(op2String)
    setResult(op2String)
    op2Temp = op2Previous + op2Next
    setOp2Previous(op2Next);
    setOp2Next(op2Temp);    
  }

  const op3Function = () => {
    setOp3(op3 * op3Next);
    setOp3Next(op3Next + 1);
    setOp3String(op3String + `${op3} `);
    
    setResult(op3String)
    console.log(op3String);
  }

  return (
    <>
      <StatusBar barStyle="dark-content"></StatusBar>
      <SafeAreaView >
        <View style={styles.centeredCointainer}><Text style={styles.text}>Examen Skylerlily</Text></View>
        <View style={styles.centeredCointainer}><ResultBox result={result}></ResultBox></View>
        <View style={styles.buttonsContainer}>
          <View style={{marginBottom: 10}}><Button title="Op 1" onPress={op1Function} name="1" color={colors.PRIMARY_COLOR}></Button></View>
          <View style={{marginBottom: 10}}><Button title="Op 2" onPress={op2Function} name="2" color={colors.PRIMARY_COLOR}></Button></View>
          <View style={{marginBottom: 10}}><Button title="Op 3" onPress={op3Function} name="3" color={colors.PRIMARY_COLOR}></Button></View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  centeredCointainer : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    paddingBottom: 40
  },
  buttonsContainer : {
    marginTop:200, 
    padding:30
  },
  text: {
    color: 'black',
    fontSize: 40,
  }

})