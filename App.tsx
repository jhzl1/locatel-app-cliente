import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

import StackNavigation from "./src/navigator/StackNavigation";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#67BB37" />

      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
