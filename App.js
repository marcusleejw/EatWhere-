import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeStack from "./stacks/homeStack";

export default function App() {
  return <HomeStack />;
}
