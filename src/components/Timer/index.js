import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { TimerContext, TimerProvider } from "../../../provider/TimeProvider";
import { LinearGradient } from "expo-linear-gradient";

const Timer = () => {
  const time = useContext(TimerContext);
  const gradientHeight = 500;
  const gradientBackground = "purple";

  if (time.startTimer && time.timer != 0) {
    setTimeout(() => {
      time.setTimer(time.timer - 1);
    }, 1000);
  } else if (time.timer == 0) {
    time.setTimer(time.initialTimer);
    time.setStartTimer(false);
  }

  function time_convert(num) {
    let hours =
      Math.floor(num / 60) > 9
        ? Math.floor(num / 60)
        : "0" + Math.floor(num / 60);
    let minutes = num % 60 > 9 ? num % 60 : "0" + (num % 60);
    return hours + ":" + minutes;
  }

  return (
    <TimerProvider>
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
        <Text style={styles.timer}>Time left {time_convert(time.timer)}</Text>
        <TouchableHighlight
          style={styles.button}
          underlayColor="#f9f"
          onPress={() => time.setStartTimer(true)}
        >
          <Text style={styles.text}>Play </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          underlayColor="#f9f"
          onPress={() => time.setStartTimer(false)}
        >
          <Text style={styles.text}>Paus</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          underlayColor="#f9f"
          onPress={() => time.setTimer(time.initialTimer)}
        >
          <Text style={styles.text}>Restart</Text>
        </TouchableHighlight>
      </View>
    </TimerProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  timer: {
    paddingBottom: 100,
    color: "#fff",
    fontSize: 40,
  },
  button: {
    borderRadius: 25,
    marginBottom: 20,
    backgroundColor: "#f0f",
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPress: {
    borderRadius: 25,
    marginBottom: 20,
    backgroundColor: "#00f",
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Timer;
