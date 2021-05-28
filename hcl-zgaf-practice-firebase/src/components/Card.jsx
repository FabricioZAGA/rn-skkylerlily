import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

const Card = ({ name, description, score }) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <View style={styles.cardRow}>
          <View style={styles.content}>
            <Text style={styles.title} ellipsizeMode="tail" numberOfLines={2}>
              {name}
            </Text>
            <Text
              style={styles.description}
              numberOfLines={2}
              ellipsizeMode={"tail"}
            >
              {description}
            </Text>
            <TouchableOpacity>
              <View style={styles.likesViewInner}>
                <MaterialIcons name="favorite-border" size={30} color="red" />
                <Text style={styles.likesText}>{score}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { marginBottom: 10 },
  cardRow: {
    flexDirection: "row",
    margin: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  content: {
    marginLeft: 10,
    flexDirection: "column",
  },
  title: {
    fontSize: 20,
    color: "white",
  },
  description: {
    color: "white",
    width: Dimensions.get("screen").width - 120,
  },
  likesView: {},
  likesViewInner: {
    flexDirection: "row",
  },
  likesText: {
    fontSize: 12,
    padding: 5,
    color: "red",
    fontWeight: "bold",
  },
});

export default Card;
