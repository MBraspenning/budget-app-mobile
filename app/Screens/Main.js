import React, { Component } from 'react';

import { 
    StyleSheet, 
    Text, 
    View, 
    ScrollView, 
    ImageBackground,
    Modal,
    TouchableOpacity,
    TextInput,
    Alert,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

import Header from './Components/Header';
import List from './Components/List';
import LogoutComponent from './Components/LogoutComponent';

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
    
    submit = () => {        
        this.setState({ modalVisible: !this.state.modalVisible })
        
        console.log(this.state.type + ' ' + this.state.description + ' ' + this.state.amount);
    }
    
    render(){
        return (
            <View style={styles.container}>
            <View style={{ flexDirection: 'row', flex: 2 }}>
                <ImageBackground
                    source={require('../../assets/background.jpg')}
                    style={{ flex: 1, padding: 20 }}
                >
                    <Header 
                        totalBudget={this.state.totalBudget}
                        totalIncome={this.state.totalIncome}
                        totalExpense={this.state.totalExpense}
                    />
                </ImageBackground>
            </View>
                        
            <View style={{ flexDirection: 'row', flex: 3 }}>
                <ScrollView style={{ flex: 1 }}>
                    <List />
                </ScrollView>
            </View>
            
            <View style={{ flexDirection: 'row', flex: 0.5 }}>
                <View style={{ flex: 1, alignItems: 'center' }}>                    
                    <LogoutComponent navigation={this.props.navigation} />                
                </View>
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
    modal: {
        backgroundColor: '#fff', 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputWrapper: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputWrapper: {
        marginHorizontal: 40,
    },
    input: {
        fontSize: 25,    
    },
    elementWrapper: {
        marginVertical: 20,    
    },
    submit: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#155724',
        backgroundColor: '#c3e6cb',
        padding: 10,
    },
    submitText: {
        color: '#155724',
    },
    switchButtonInc: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,.125)',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        width: 150,
    },
    switchButtonExp: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,.125)',
        padding: 10,
        paddingHorizontal: 20,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        width: 150,
    }
});