import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//Import all the drawer stuff

const Drawer = createDrawerNavigator();

export default function MerchantDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Login"> 
        </Drawer.Navigator>
    )
}