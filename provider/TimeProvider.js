import React, { useState } from "react";

const TimerContext = React.createContext();

const TimerProvider = (props) => {
  const initialTimer = 10; // Change to database value
  const [timer, setTimer] = useState(initialTimer);
  const [startTimer, setStartTimer] = useState(false);

  return (
    <TimerContext.Provider
      value={{ timer, setTimer, startTimer, setStartTimer, initialTimer }}
    >
      {props.children}
    </TimerContext.Provider>
  );
};

export { TimerProvider, TimerContext };
