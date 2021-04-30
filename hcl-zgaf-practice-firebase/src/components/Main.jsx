import React, { useState } from "react";
import { View, StyleSheet, Text, Image, Button } from "react-native";
import firebase from "../utils/firebase";

export default function Auth({ email }) {
  const logout = () => {
    firebase.auth().signOut();
  };

  return (
    <>
      <View style={styles.view}>
        <Text style={styles.text}>Bienvenido</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <View style={styles.signOut}>
        <Button title="cerrar sesión" onPress={logout}></Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 40,
  },
  email: {
    color: "white",
    fontSize: 20,
  },
  signOut: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
});
