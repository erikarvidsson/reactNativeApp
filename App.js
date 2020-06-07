import React from "react";
import { StyleSheet } from "react-native";
import { TimerProvider } from "./provider/TimeProvider";
import AppView from './src/AppView'



const App = () =>  {
  return (
    <TimerProvider>
        <AppView />
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