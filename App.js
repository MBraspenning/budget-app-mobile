import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Modal, TouchableOpacity, TextInput, Alert } from 'react-native';

import Header from './Components/Header';

export default class App extends React.Component {
  constructor(props)
    {
        super(props);
        this.state = { totalBudget: 50.00, totalIncome: 100.00, totalExpense: 50.00, modalVisible: false, description: '', amount: 0, type: '+'}
    }
    
    submit = () => {        
        this.setState({ modalVisible: !this.state.modalVisible })
        
        console.log(this.state.type + ' ' + this.state.description + ' ' + this.state.amount);
    }
        
    render() {
        return (
          <View style={styles.container}>
            <View style={{ flexDirection: 'row', flex: 2 }}>
                <ImageBackground
                    source={require('./assets/background.jpg')}
                    style={{ flex: 1, padding: 20 }}
                >
                    <Header 
                        totalBudget={this.state.totalBudget}
                        totalIncome={this.state.totalIncome}
                        totalExpense={this.state.totalExpense}
                    />
                </ImageBackground>
            </View>
            
            <Modal visible={this.state.modalVisible}>
                <View style={styles.modal}>
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
                    <TouchableOpacity onPress={ () => this.setState({ modalVisible: !this.state.modalVisible }) }>
                        <Text>Back</Text>
                    </TouchableOpacity> 
                </View>
            </Modal>
            
            <View style={{ flex: 3 }}>
                <View style={{ flex: 9 }}>
                    <Text>List goes here!</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                       onPress={ () => this.setState({ modalVisible: !this.state.modalVisible }) }
                       >
                        <Text style={{ textAlign: 'center' }}>Add Item</Text>
                    </TouchableOpacity>
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
        backgroundColor: 'rgba(135,206,250,.5)', 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
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
