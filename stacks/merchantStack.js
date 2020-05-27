import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Header from '../shared/header';
import Login from "../sharedScreens/logIn";
import Register from "../sharedScreens/register";
import UserStack from "./userStack";
import MerchantDrawer from "./merchantStack";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#f01d71",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerTitle: () => <Header title="Login" /> }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerTitle: () => <Header title="Register" /> }}
        />

        <Stack.Screen
          name="UserDrawer"
          component={UserDrawer}
          options={{ headerTitle: () => <Header title="Eating Places" /> }}
        />

        <Stack.Screen
          name="MerchantDrawer"
          component={MerchantDrawer}
          options={{
            headerTitle: () => <Header title="Welcome to EatWhere!" />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
