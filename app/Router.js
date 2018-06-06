import React from 'react';

import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import LoginScreen from './Screens/LoginScreen';
import MainScreen from './Screens/MainScreen';
import AddItemScreen from './Screens/AddItemScreen';

import { FontAwesome, MaterialIcons } from 'react-native-vector-icons';

import { logout } from './Authentication';

export const SignedOut = createStackNavigator({
   Login: {
       screen: LoginScreen,
       navigationOptions: {
           title: 'Login'
       }
   }     
}); 

export const SignedIn = createBottomTabNavigator(
    {
        Main: {
            screen: MainScreen,
            navigationOptions: {
                tabBarLabel: 'Overview',
                tabBarIcon: ({ tintColor }) => (<FontAwesome name="home" size={25} color={tintColor} />)
            }
        },
        Add: {
            screen: AddItemScreen,
            navigationOptions: {
                tabBarLabel: 'Add Item',
                tabBarIcon: ({ tintColor }) => (<MaterialIcons name="add-circle" size={25} color={tintColor} />)
            }
        },
    },
    {
        tabBarOptions: {
            labelStyle: {
                fontSize: 14
            }, 
            style: {
                height: 50
            }
        }
    }
);

export const createRootNavigator = (isLoggedIn = false) => {
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
            initialRouteName: isLoggedIn == true ? "SignedIn" : "SignedOut"
        }
    )
}
