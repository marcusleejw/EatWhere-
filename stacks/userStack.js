import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import UserSelectionPage from '../userScreens/userSelectionPage.js'
import OrderFoodStack from './orderFoodStack';
import CheckQueueNo from '../userScreens/checkQueueNo';
import LogOut from '../sharedScreens/Logout'

const Stack = createStackNavigator();

export default function UserStack() {
  return (
      <Stack.Navigator
        initialRouteName="UserStack"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#f01d71",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="UserSelectionPage"
          component={UserSelectionPage}
          options={{ headerTitle: () => <Header title="User Selection Page" /> }}
        />

        <Stack.Screen
          name="OrderFoodStack"
          component={OrderFoodStack}
          options={{ headerTitle: () => <Header title="Places to eat" /> }}
        />

         {/*<Stack.Screen
          name="CheckQueueNo"
          component={CheckQueueNo}
          options={{ headerTitle: () => <Header title="Queue Number Tracking" /> }}
        />

        <Stack.Screen
          name="LogOut"
          component={LogOut}
          options={{ headerTitle: () => <Header title="Log Out" /> }}
        /> */}

      </Stack.Navigator>
  );
}
