import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import EatingPlaceOption from '../userScreens/eatingPlaceOption';
import StoreOption from '../userScreens/storeOption';
import Header from '../shared/header';
import FoodDetails from '../userScreens/foodDetail'
import Cart from '../userScreens/cart';
import PaymentModal from "../userScreens/paymentModal";

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
          headerShown: true,
        }}
      >
        <Stack.Screen
          name="EatingPlaceOption"
          component={EatingPlaceOption}
          options={{ headerTitle: () => <Header title="Eating Places" /> }}
        />

         <Stack.Screen
          name="StoreOption"
          component={StoreOption}
          options={{ headerTitle: () => <Header title="Stores" /> }}
        />

        <Stack.Screen
          name="FoodDetails"
          component={FoodDetails}
          options={{ headerTitle: () => <Header title="Menu" /> }}
        /> 

        <Stack.Screen 
          name = "Cart"
          component = {Cart}
          options={{ headerTitle: () => <Header title="Cart" /> }}
        />

        <Stack.Screen
          name = 'PaymentModal'
          component = {PaymentModal}
          options={{ headerTitle: () => <Header title="Payment" /> }}
        />
      </Stack.Navigator>
  );
}
