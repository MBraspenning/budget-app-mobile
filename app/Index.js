import React from 'react';

import { createRootNavigator } from './Router';

import { isLoggedIn } from './Authentication';

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
        return <Layout />;
    }
}

