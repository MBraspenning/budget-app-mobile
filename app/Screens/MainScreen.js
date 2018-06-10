import React, { Component } from 'react';

import { 
    StyleSheet, 
    View, 
    ScrollView, 
    ImageBackground,
    Button,
    AsyncStorage,
} from 'react-native';

import HeaderComponent from './Components/HeaderComponent';
import ListComponent from './Components/ListComponent';

import Api from '../Api';

export default class Main extends Component 
{    
    constructor(props)
    {
        super(props);
        this.state = { 
            totalBudget: '0.00',
            totalIncome: '0.00',
            totalExpense: '0.00',
            data: [],
        }
    }
    
    componentWillMount() {
        Api.fetchAll()
            .then((data) => {                                
                this.setState({
                    data: data, 
                    totalBudget: data[0][0].total_budget,
                    totalIncome: data[0][0].total_income,
                    totalExpense: data[0][0].total_expense,
                })                
            }); 
        
        console.log('test');
    }         

    render(){         
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', flex: 2 }}>
                    <ImageBackground
                        source={require('../../assets/background.jpg')}
                        style={{ flex: 1, padding: 20 }}
                    >
                        <HeaderComponent 
                            totalBudget={this.state.totalBudget}
                            totalIncome={this.state.totalIncome}
                            totalExpense={this.state.totalExpense}
                        />
                    </ImageBackground>
                </View>

                <View style={{ flexDirection: 'row', flex: 3 }}>
                    <ScrollView style={{ flex: 1 }}>
                        <ListComponent 
                            incomeItems={this.state.data[1]} 
                            expenseItems={this.state.data[2]}
                        />
                    </ScrollView>
                </View>
            </View>
        
        );   
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});