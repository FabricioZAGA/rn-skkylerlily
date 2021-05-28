import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ActionBar from "./ActionBar";

import AddItem from "./AddItem";
import Card from "./Card";
import firebase from "../utils/firebase";

export default function ListItems() {
  const [showList, setShowList] = useState(false);

  const [itemsList, setItemsList] = useState([]); //Initialise restaurant list with setter
  const [errorMessage, setErrorMessage] = useState("");

  const getItems = async () => {
    const list = [];
    var snapshot = firebase.firestore().collection("items");
    const data = (await snapshot.get()).docChanges();
    data.map((item, key) => {
      let aux = item.doc.data();
      console.log(aux);
      list.push(
        <Card
          key={key}
          name={aux.name}
          description={aux.description}
          score={aux.score}
        />
      );
    });

    setItemsList(list);
    return list;
  };

  //Call when component is rendered
  useEffect(() => {
    getItems();
  }, []);

  return (
    <View style={styles.container}>
      {showList ? itemsList : <AddItem style={styles.addItem} />}
      <ActionBar showList={showList} setShowList={setShowList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
  },
});
