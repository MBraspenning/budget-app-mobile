import React from 'react';

import { SignedOut } from './Router';
import Main from './Screens/Main';

import { isLoggedIn } from './Authentication';

export default class App extends React.Component {
  constructor(props)
    {
        super(props);
        this.state = { 
            isLoggedIn: false,
        }
    }
    
    componentDidMount() 
    {
        isLoggedIn()
            .then(res => this.setState({ isLoggedIn: res}))
            .catch(err => alert('An error occured.'));
    }
        
    render() {
        if (this.state.isLoggedIn) 
        {
            return (
                <Main />
            );
        } 
        else 
        {
            return (
                <SignedOut />
            );
        }
    }
}


