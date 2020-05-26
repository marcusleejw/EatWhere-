import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../components/Home';
import Header from '../shared/header';


const Stack = createStackNavigator();

export default function loginRegisterStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
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
        name="Login" 
        component={Login} 
        options={
          {headerTitle : () => <Header title = 'Login'/>}
        }
      />
      <Stack.Screen 
        name="Register" 
        component={Register} 
        options={{headerTitle : () => <Header title = 'Register'/>}
        }
      />       
      <Stack.Screen 
       name="Home" 
       component={Home} 
       options={
         { headerTitle : () => <Header title = 'Home'/> }
       }
      />
    </Stack.Navigator>
  );
}