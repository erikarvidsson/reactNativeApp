import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TimerContext } from "../../../provider/TimeProvider";

const Timer = () => {
  const time = useContext(TimerContext);

  if (time.startTimer && time.timer != 0) {
    setTimeout(() => {
      time.setTimer(time.timer - 1);
    }, 1000);
  } else {
    time.setTimer(time.initialTimer);
    time.setStartTimer(false);
  }

  function time_convert(num) {
    let hours =
      Math.floor(num / 60) > 9
        ? Math.floor(num / 60)
        : '0' + Math.floor(num / 60);
    let minutes = num % 60 > 9 ? num % 60 : "0" + (num % 60);
    return hours + ":" + minutes;
  }

  return (
    <View style={styles.container}>
      <Text>Time left {time_convert(time.timer)}</Text>
      <Text onPress={() => time.setStartTimer(true)}>Press me</Text>
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

export default Timer;
