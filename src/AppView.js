import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";


import StartScreen from "./View/StartScreen";
import LoginScreen from "./View/LoginScreen";


const AppView = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginScreen} title="Login" />
        <Scene
          key="start"
          component={StartScreen}
          title="Start"
          initial={true}
        />
      </Scene>
    </Router>
  );
};

export default AppView;
