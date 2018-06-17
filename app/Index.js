// == Remove this to enable warnings again ==

console.disableYellowBox = true;

// ==========================================

import React from 'react';

import { createRootNavigator } from './Router';

import NavigationService from './NavigationService';

export default class App extends React.Component {
  constructor(props)
    {
        super(props);
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

