import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function VerticalButtons({ buttonStyle, change, colors }) {
  return (
    <>
      <View style={styles.viewForm}>
        <TouchableOpacity style={[buttonStyle, colors[0]]} onPress={change}>
          <Text style={styles.textButton}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[buttonStyle, colors[1]]} onPress={change}>
          <Text style={styles.textButton}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[buttonStyle, colors[2]]} onPress={change}>
          <Text style={styles.textButton}>3</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    height: "100%",
    borderRadius: 5,
    width: 370,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "#d4d4d4",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
});
