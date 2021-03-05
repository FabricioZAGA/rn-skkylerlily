import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 0,
      b: 0,
      c: 0
    }
  }

  Sum = () => {
    let raiz1, raiz2;
    let a = Number(this.state.a);
    let b = Number(this.state.b);
    let c = Number(this.state.b);

    let pDiscriminante = b * b - 4 * a * c;

    if (pDiscriminante > 0) {
      raiz1 = (-b + Math.sqrt(pDiscriminante)) / (2 * a);
      raiz2 = (-b - Math.sqrt(pDiscriminante)) / (2 * a);

      alert(`Las raíces de la ecuación cuadrática son ${raiz1} y ${raiz2}`);
    }
    else if (pDiscriminante == 0) {
      raiz1 = raiz2 = -b / (2 * a);

      alert(`Las raíces de la ecuación cuadrática son ${raiz1} y ${raiz2}`);
    }
    else {
      let pReal = (-b / (2 * a)).toFixed(2);
      let pImag = (Math.sqrt(-pDiscriminante) / (2 * a)).toFixed(2);

      alert(
        `Las raíces de la ecuación cuadrática son ${pReal} + ${pImag}i y ${pReal} - ${pImag}i`
      );
    }
  }

  render() {
    return (
      <View style={{ marginTop: 150 }}>
        <TextInput style={{ borderWidth: 1, marginTop: 10, padding: 20 }} placeholder="Numero 1" onChangeText={a => this.setState({ a })} />
        <TextInput style={{ borderWidth: 1, marginTop: 10, padding: 20 }} placeholder="Numero 2" onChangeText={b => this.setState({ b })} />
        <TextInput style={{ borderWidth: 1, marginTop: 10, padding: 20 }} placeholder="Numero 3" onChangeText={c => this.setState({ c })} />
        <Button style={{ padding: 20 }} title="Sumar textos" onPress={this.Sum} />
      </View>
    );
  }
}

