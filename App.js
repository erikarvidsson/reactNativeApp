import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppView from './src/AppView'

import { TestProvider } from "./provider/TestProvider";
import { TimerProvider } from "./provider/TimeProvider";



const App = () =>  {
  return (
    <TimerProvider>
    <TestProvider>
        <AppView />
    </TestProvider>
    </TimerProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;