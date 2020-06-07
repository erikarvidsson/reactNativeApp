import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import { LinearGradient } from "expo-linear-gradient";
import Timer from "../components/Timer";

const StartScreen = () => {

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(45,45,200,0.8)", "rgba(244,45,200,0.8)"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 1000,
        }}
      />
      <Timer />
      <Text onPress={() => Actions.login()}>new screen2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default StartScreen;
