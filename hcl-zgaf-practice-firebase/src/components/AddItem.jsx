import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import firebase from "../utils/firebase";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";

const db = firebase.firestore();

export default function AddItem({ user }) {
  const [formData, setFormData] = useState(defaultValue);
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const setItem = () => {
    db.collection("user.id")
      .add({
        id: formData.id,
        name: formData.name,
        description: formData.description,
        score: formData.score,
        date: formData.date,
      })
      .then(() => {})
      .catch(() => {});
  };

  const showDateTimePicker = () => {
    setIsPickerVisible(true);
  };

  const hideDateTimePicker = () => {
    setIsPickerVisible(false);
  };

  const handleDatePicked = (date) => {
    setFormData({
      ...formData,
      date: moment(date).format("MMMM Do YYYY, h:mm:ss a"),
    });
    hideDateTimePicker();
  };

  return (
    <>
      <TextInput
        style={[styles.input]}
        placeholder="ID"
        placeholderTextColor="#969696"
        clearButtonMode="always"
        onChange={(e) =>
          setFormData({ ...formData, id: Number(e.nativeEvent.text) })
        }
      />
      <TextInput
        style={[styles.input]}
        placeholder="Juego"
        placeholderTextColor="#969696"
        clearButtonMode="always"
        onChange={(e) => setFormData({ ...formData, name: e.nativeEvent.text })}
      />
      <TextInput
        style={[styles.input]}
        placeholder="Descripcion"
        placeholderTextColor="#969696"
        clearButtonMode="always"
        onChange={(e) =>
          setFormData({ ...formData, description: e.nativeEvent.text })
        }
      />
      <TextInput
        style={[styles.input]}
        placeholder="Calificacion"
        placeholderTextColor="#969696"
        clearButtonMode="always"
        onChange={(e) =>
          setFormData({ ...formData, score: Number(e.nativeEvent.text) })
        }
      />
      {/* <DateTimePicker
        isVisible={isPickerVisible}
        mode="date"
        onConfirm={getPickerData}
        onCancel={() => setIsPickerVisible(false)}
      /> */}

      <DateTimePicker
        isVisible={isPickerVisible}
        onConfirm={handleDatePicked}
        onCancel={hideDateTimePicker}
      />
      <TouchableOpacity style={styles.input} onPress={showDateTimePicker}>
        <Text style={styles.btnDateText}>{formData.date}</Text>
      </TouchableOpacity>
      <View style={styles.login}>
        <TouchableOpacity onPress={setItem}>
          <Text style={styles.btnText}>Agregar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

function defaultValue() {
  return {
    id: 0,
    name: "",
    description: "",
    score: 0.0,
    date: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"),
  };
}

const styles = StyleSheet.create({
  input: {
    height: 35,
    color: "#fff",
    marginBottom: 25,
    width: "80%",
    backgroundColor: "#1e3040",
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#1e3040",
  },
  login: {},
  btnText: {
    color: "#fff",
    fontSize: 20,
  },
  btnDateText: {
    color: "#969696",
  },
});
