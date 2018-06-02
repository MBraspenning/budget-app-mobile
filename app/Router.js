import React from 'react';

import { createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';

import Login from './Screens/Login';
import Main from './Screens/Main';
import AddItem from './Screens/AddItem';

import { Ionicons } from 'react-native-vector-icons';

export const SignedOut = createStackNavigator({
   Login: {
       screen: Login,
       navigationOptions: {
           title: 'Login'
       }
   }     
}); 

export const SignedIn = createDrawerNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
            drawerLabel: 'Main',
        }
    }, 
    AddItem: {
        screen: AddItem,
        navigationOptions: {
            drawerLabel: 'Add Item'
        }
    }
});

export const createRootNavigator = (loggedIn = false) => {
    return createSwitchNavigator(
        {
            SignedIn: {
                screen: SignedIn
            },
            SignedOut: {
                screen: SignedOut
            }
        },
        {
            initialRouteName: loggedIn ? "SignedIn" : "SignedOut"
        }
    )
}
