import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Header extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { month: '' }
    }
    
    componentDidMount() 
    {
        this.getCurrentMonth();
    }
    
    getCurrentMonth() 
    {        
        const months = [
            'January', 
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        
        let monthIndex = new Date().getMonth();
        let currentMonth = months[monthIndex];
        
        this.setState({ month: currentMonth });        
    }
    
    render()
    {
        return (
            <Text>Budget For {this.state.month} :</Text>
        );
    }
}