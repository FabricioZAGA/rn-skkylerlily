import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import firebase from "../utils/firebase";

export default function ActionBar({ showList, setShowList }) {
  return (
    <View style={styles.viewFooter}>
      <View style={styles.viewLogout}>
        <Text style={styles.text} onPress={() => firebase.auth().signOut()}>
          Cerar Sesion
        </Text>
      </View>
      <View style={styles.viewAdd}>
        <Text
          style={styles.text}
          onPress={() => {
            setShowList(!showList);
          }}
        >
          {showList ? "Nuevo Item" : "Mostrar Lista"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewFooter: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    width: "100%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  viewLogout: {
    backgroundColor: "#F02",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  viewAdd: {
    backgroundColor: "#07F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
});
