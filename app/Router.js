import { createStackNavigator } from 'react-navigation';

import Login from './Screens/Login';

export const SignedOut = createStackNavigator({
   Login: {
       screen: Login,
       navigationOptions: {
           title: 'Login'
       }
   }     
}); 
