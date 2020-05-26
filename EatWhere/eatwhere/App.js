import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Header from './shared/header';


const Stack = createStackNavigator();

function MyStack() {
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
       name="Logout" 
       component={Logout} 
       options={
         { headerTitle : () => <Header title = 'Logout'/> }
       }
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
