import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TestContext } from "../../provider/TestProvider";
import { Actions } from "react-native-router-flux";

const StartScreen = () => {
  const lol = useContext(TestContext);

  return (
    <View style={styles.container}>
      <Text onPress={() => Actions.login()}>new screen2</Text>
      <Text onPress={() => lol.setCount(lol.count + 2)}>
        Press me {lol.count}
      </Text>
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
