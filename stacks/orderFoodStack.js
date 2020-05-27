import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import EatingPlaceOption from '../userScreens/eatingPlaceOption'
import StoreOption from '../userScreens/storeOption'
import FoodDetails from '../userScreens/foodDetail'

const Stack = createStackNavigator();

export default function OrderFoodStack() {
  return (
      <Stack.Navigator
        initialRouteName="OrderFoodStack"
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
          name="EatingPlaceOption"
          component={EatingPlaceOption}
          options={{ headerTitle: () => <Header title="Eating Place Option" /> }}
        />

         <Stack.Screen
          name="StoreOption"
          component={StoreOption}
          options={{ headerTitle: () => <Header title="Store Option" /> }}
        />

        {/* <Stack.Screen
          name="FoodDetails"
          component={FoodDetails}
          options={{ headerTitle: () => <Header title="Food Details" /> }}
        />  */}
      </Stack.Navigator>
  );
}
