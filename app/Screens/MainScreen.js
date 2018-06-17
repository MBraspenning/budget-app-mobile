import React, { Component } from 'react';

import { 
    StyleSheet, 
    View, 
    ScrollView, 
    ImageBackground,
    Button,
    AsyncStorage,
    RefreshControl,
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
            refreshing: false,
        }
        
        this.props.navigation.setParams({dataChanged: false});        
    }
    
    componentDidMount() 
    {
        this._fetchFromServer();
    }
    
    componentDidUpdate()
    {
        if (this.props.navigation.getParam('dataChanged'))
        {
            this._fetchFromServer();
            this.props.navigation.setParams({dataChanged: false});
        }                
    }
            
    async _fetchFromServer() 
    {
        await Api.fetchAll()
            .then(async (data) => { 
                if (data)
                {
                    this.setState({
                        data: data, 
                        totalBudget: data[0].length > 0 ? data[0][0].total_budget : '0.00',
                        totalIncome: data[0].length > 0 ? data[0][0].total_income : '0.00',
                        totalExpense: data[0].length > 0 ? data[0][0].total_expense : '0.00',
                    });    
                }                
            });        
    }
    
    _onRefresh() {
        this.setState({refreshing: true});

        this._fetchFromServer()
            .then(() => {
                this.setState({refreshing: false});                                    
            });             
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
                    <ScrollView 
                       style={{ flex: 1 }}
                       refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh.bind(this)}
                            />
                        }
                    >
                        <ListComponent 
                            incomeItems={this.state.data[1]} 
                            expenseItems={this.state.data[2]}
                            navigation={this.props.navigation}
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