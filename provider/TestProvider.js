import React, { useState } from "react";

const TestContext = React.createContext();

const TestProvider = (props) => {
  const [test, setTest] = useState("HEJ HEJ");
  const [count, setCount] = useState(0);

  return (
    <TestContext.Provider value={{test, setTest, count, setCount}}>
      {props.children}  
    </TestContext.Provider>
  );
};


export { TestProvider, TestContext };