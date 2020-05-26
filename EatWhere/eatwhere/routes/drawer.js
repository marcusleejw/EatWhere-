import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import LogoutStack from './logoutStack';
import LoginRegisterStack from './loginRegisterStack';

const Drawer = createDrawerNavigator();

export default function drawerNavigatior() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Login"> 
                <Drawer.screen name = 'Login' component = {loginRegisterStack} />
                <Drawer.screen name = 'Logout' component = {logoutStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}