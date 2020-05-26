import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Logout from '../components/Logout';


const Stack = createStackNavigator();

export default function logoutStack() {
  return (
    <Stack.Navigator
      initialRouteName="Logout"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#f01d71',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Logout" 
        component={Logout} 
        options={
          {headerTitle : () => <Header title = 'Logout'/>}
        }
      />
    </Stack.Navigator>
  );
}