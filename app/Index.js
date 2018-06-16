import React from 'react';

import { createRootNavigator } from './Router';

import NavigationService from './NavigationService';

export default class App extends React.Component {
  constructor(props)
    {
        super(props);
        this.state = { 
            isLoggedIn: false,
        }
    }
        
    render() {
        const Layout = createRootNavigator();
        return ( 
            <Layout
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        );
    }
}

