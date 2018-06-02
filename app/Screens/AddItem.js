import React, { Component } from 'react';

import {
    TouchableWithoutFeedback,
    Keyboard,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

export default class AddItem extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            description: '', 
            amount: 0,
            type: 'income'
        }
    }
    
    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modal}>
                    <View style={[styles.inputWrapper, {flex: 1}]}>

                        <View style={[styles.elementWrapper, { flexDirection: 'row' }]}>
                            <TouchableOpacity onPress={ () => 
                        this.setState({type: 'income'})
                                                      }
                                style={[styles.switchButtonInc, 
                                        this.state.type == 'income' 
                                        ? { backgroundColor: '#c3e6cb' }
                                        : null
                                       ]}
                                >
                                <Text style={[styles.input, { color: '#155724', textAlign: 'center' }]}>Income</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ () => 
                        this.setState({type: 'expense'})
                                                      } 
                                style={[styles.switchButtonExp, 
                                        this.state.type == 'expense' 
                                        ? { backgroundColor: '#f5c6cb' }
                                        : null
                                       ]}
                                >
                                <Text style={[styles.input, { color: '#721c24', textAlign: 'center' }]}>Expense</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.elementWrapper, 
                                      { 
                                          borderWidth: 1, 
                                          borderColor: 'rgba(0,0,0,.125)', 
                                          borderRadius: 5,
                                          paddingVertical: 10,
                                          paddingHorizontal: 20,
                                          width: 300,
                                      }
                                     ]}>
                            <TextInput 
                                placeholder='Description'
                                onChangeText={ (desc) => this.setState({description: desc}) } 
                                style={[styles.input, styles.textInput]}   
                                />
                        </View>

                        <View style={[styles.elementWrapper, 
                                      { 
                                          borderWidth: 1, 
                                          borderColor: 'rgba(0,0,0,.125)', 
                                          borderRadius: 5,
                                          paddingVertical: 10,
                                          paddingHorizontal: 20,
                                          width: 300,
                                      }
                                     ]}>
                            <TextInput 
                                placeholder='Amount'
                                keyboardType='numeric'
                                onChangeText={ (amount) => this.setState({amount: amount}) }
                                style={[styles.input, styles.textInput]}
                                />
                        </View>

                        <View style={styles.elementWrapper}>
                            <TouchableOpacity 
                                onPress={this.submit}
                                style={
                                    { 
                                        borderWidth: 1, 
                                            borderColor: '#b8daff', 
                                                borderRadius: 5, 
                                                    paddingVertical: 10, 
                                                        paddingHorizontal: 20,
                                                            backgroundColor: '#cce5ff'
                                    }}
                                >
                                <Text style={[styles.input, { color: '#004085' }]}>Add Item</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.elementWrapper, {  }]}>
                            <TouchableOpacity onPress={ () => this.setState({ modalVisible: !this.state.modalVisible }) }>
                                <Text style={{ fontSize: 20, textAlign: 'right' }}>Back</Text>
                            </TouchableOpacity> 
                        </View>                                               
                    </View>

                </View>
            </TouchableWithoutFeedback>

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