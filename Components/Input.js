import React, { Component } from 'react';
import { View, Text, TextInput, Picker, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default class Input extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { description: '', amount: 0, type: '+' }
    }
    
    submit = () => {
        Alert.alert(this.state.type + ' ' + this.state.description + ' ' + this.state.amount);
    }
    
    render()
    {
        return (
            <View style={styles.inputWrapper}>
                <TouchableOpacity onPress={ () => 
                    this.state.type == '+' 
                    ? this.setState({type: '-'}) 
                    : this.setState({type: '+'})}
                    style={{ width: 20, }}
                >
                    <Text style={styles.input}>{this.state.type}</Text>
                </TouchableOpacity>
                <View style={styles.textInputWrapper}>
                    <TextInput 
                        placeholder='Description'
                        onChangeText={ (desc) => this.setState({description: desc}) } 
                        style={[styles.input, styles.textInput]}   
                    />
                    <TextInput 
                        placeholder='Amount'
                        keyboardType='numeric'
                        onChangeText={ (amount) => this.setState({amount: amount}) }
                        style={[styles.input, styles.textInput]}
                    />
                </View>
                <TouchableOpacity onPress={this.submit}>
                    <Text style={styles.input}>Add</Text>
                </TouchableOpacity>                                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputWrapper: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInputWrapper: {
        marginHorizontal: 40,
    },
    input: {
        fontSize: 25,    
    },
    textInput: {
        marginVertical: 10,    
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
    }
});