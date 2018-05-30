import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

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
            <View style={styles.headerContainer}>
                <Text style={[styles.textCenter, styles.headerText]}>Budget For {this.state.month} :</Text>            
                <Text style={[styles.textCenter, styles.headerText]}>€ {this.props.totalBudget}</Text>
                <View style={styles.incExpWrapper}>
                    <View style={styles.successBackground}>
                        <Text style={styles.successText}>Total Income: € {this.props.totalIncome}</Text>
                    </View>
                    <View style={styles.dangerBackground}>
                        <Text style={styles.dangerText}>Total Income: € {this.props.totalExpense}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'column', 
        alignItems: 'center',
        marginTop: 25,
    },
    textCenter: {
        textAlign: 'center',
    },
    headerText: {
        fontSize: 30,    
    },
    incExpWrapper: {
        marginTop: 20,
    },
    successBackground: {
        backgroundColor: '#c3e6cb',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: .5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderColor: 'rgba(0,0,0,.125)',
        width: 250,
    },
    dangerBackground: {
        backgroundColor: '#f5c6cb',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: .5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderColor: 'rgba(0,0,0,.125)',
        width: 250,
    },
    successText: {
        color: '#155724',
        fontSize: 18,
    },
    dangerText: {
        color: '#721c24',
        fontSize: 18,
    }
});