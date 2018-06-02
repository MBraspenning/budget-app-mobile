import React from 'react';

import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import Login from './Screens/Login';
import Main from './Screens/Main';
import AddItem from './Screens/AddItem';

import { FontAwesome, MaterialIcons } from 'react-native-vector-icons';

export const SignedOut = createStackNavigator({
   Login: {
       screen: Login,
       navigationOptions: {
           title: 'Login'
       }
   }     
}); 

export const SignedIn = createBottomTabNavigator(
    {
        Main: {
            screen: Main,
            navigationOptions: {
                tabBarLabel: 'Overview',
                tabBarIcon: ({ tintColor }) => (<FontAwesome name="home" size={25} color={tintColor} />)
            }
        },
        Add: {
            screen: AddItem,
            navigationOptions: {
                tabBarLabel: 'Add Item',
                tabBarIcon: ({ tintColor }) => (<MaterialIcons name="add-circle" size={25} color={tintColor} />)
            }
        },
        Logout: {
            screen: SignedOut,
            navigationOptions: {
                tabBarLabel: 'Logout',
                tabBarIcon: ({ tintColor }) => (<MaterialIcons name="exit-to-app" size={25} color={tintColor} />)
            }
        }
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
