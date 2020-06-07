import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Modal,
} from "react-native";
import { TimerContext, TimerProvider } from "../../../provider/TimeProvider";

const Timer = () => {
  const [open, setOpen] = useState(false);
  const time = useContext(TimerContext);

  if (time.timer != 0) {
    setTimeout(() => {
      if (time.startTimer) {
        time.setTimer(time.timer - 1);
      }
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
        <Modal transparent={open} visible={open}>
          <View style={styles.openModal}>
            <View style={styles.openModalContent}>
              <Text style={styles.timer}>
                Time left {time_convert(time.timer)}
              </Text>
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
              <TouchableHighlight
                style={styles.button}
                underlayColor="#f9f"
                onPress={() => setOpen(!open)}
              >
                <Text style={styles.text}>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          style={styles.button}
          underlayColor="#f9f"
          onPress={() => setOpen(!open)}
        >
          <Text style={styles.text}>Open</Text>
        </TouchableHighlight>
      </View>
    </TimerProvider>
  );
};

const styles = StyleSheet.create({
  openModal: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  openModalContent: {
    marginTop: 150,
    padding: 50,
    backgroundColor: "#d04",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    // fontFamily: "Dosis",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  timer: {
    paddingBottom: 100,
    color: "#fff",
    fontSize: 40,
  },
  button: {
    borderRadius: 25,
    marginBottom: 20,
    backgroundColor: "rgba(240,0,990,0.8)",
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#e09",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
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
