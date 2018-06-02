import { createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';

import Login from './Screens/Login';
import Main from './Screens/Main';

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
