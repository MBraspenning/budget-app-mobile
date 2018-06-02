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
    
//    componentWillMount() 
//    {
//        isLoggedIn()
//            .then(res => this.setState({ isLoggedIn: res}))
//            .catch(err => alert('An error occured.'));
//    }
        
    render() {
        const Layout = createRootNavigator(isLoggedIn);
        return <Layout />;
    }
}


