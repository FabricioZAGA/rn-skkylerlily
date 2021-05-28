import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import HorizotalButtons from "./src/components/HorizotalButtons";
import VerticalButtons from "./src/components/VerticalButtons";
import colors from "./src/utils/colors";
const _colors = [
  [
    { backgroundColor: colors.PRIMARY_ONE },
    { backgroundColor: colors.PRIMARY_TWO },
    { backgroundColor: colors.PRIMARY_THREE },
  ],
  [
    { backgroundColor: colors.SECONDARY_ONE },
    { backgroundColor: colors.SECONDARY_TWO },
    { backgroundColor: colors.SECONDARY_THREE },
  ],
  [
    { backgroundColor: colors.TERTIARY_ONE },
    { backgroundColor: colors.TERTIARY_TWO },
    { backgroundColor: colors.TERTIARY_THREE },
  ],
];

export default function App() {
  const [vertical, setVertical] = useState(false);
  const [colors, setColors] = useState(_colors[0]);
  const [changeState, setChangeState] = useState(1);

  const change = async () => {
    switch (changeState) {
      case 1:
        changeColors(1);
        break;
      case 2:
        changeColors(2);
        break;
    }
    if (changeState == 3) {
      resetOnPositionChange();
    } else {
      setChangeState(changeState + 1);
    }
  };

  const changeColors = (num) => {
    setColors(_colors[num]);
  };

  const resetOnPositionChange = () => {
    setChangeState(1);
    setColors(_colors[0]);
    setVertical(vertical ? false : true);
  };

  return (
    <View style={styles.container}>
      {vertical ? (
        <VerticalButtons
          buttonStyle={styles.button}
          change={change}
          colors={colors}
        />
      ) : (
        <HorizotalButtons
          buttonStyle={styles.button}
          change={change}
          colors={colors}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 10,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});
