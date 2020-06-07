import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Actions } from 'react-native-router-flux';

const LoginScreen = () => {

  return (
    <View style={styles.container}>
      <Text onPress={() => Actions.start()}>new screen</Text>
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

export default LoginScreen;
