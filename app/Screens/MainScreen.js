import React, { Component } from 'react';

import { 
    StyleSheet, 
    View, 
    ScrollView, 
    ImageBackground,
    Button,
    AsyncStorage
} from 'react-native';

import HeaderComponent from './Components/HeaderComponent';
import ListComponent from './Components/ListComponent';

export default class Main extends Component 
{    
    constructor(props)
    {
        super(props);
        this.state = { 
            totalBudget: 50.00,
            totalIncome: 100.00,
            totalExpense: 50.00,
            modalVisible: false,
            description: '', 
            amount: 0,
            type: 'income'
        }
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
                        <ListComponent />
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