import React from 'react';
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

import { SignedOut } from './Router';

export default class App extends React.Component {
  constructor(props)
    {
        super(props);
        this.state = { totalBudget: 50.00, totalIncome: 100.00, totalExpense: 50.00, modalVisible: false, description: '', amount: 0, type: 'income'}
    }
    
    submit = () => {        
        this.setState({ modalVisible: !this.state.modalVisible })
        
        console.log(this.state.type + ' ' + this.state.description + ' ' + this.state.amount);
    }
        
    render() {
        return (
            <SignedOut />
//            <View style={styles.container}>
//            <View style={{ flexDirection: 'row', flex: 2 }}>
//                <ImageBackground
//                    source={require('./assets/background.jpg')}
//                    style={{ flex: 1, padding: 20 }}
//                >
//                    <Header 
//                        totalBudget={this.state.totalBudget}
//                        totalIncome={this.state.totalIncome}
//                        totalExpense={this.state.totalExpense}
//                    />
//                </ImageBackground>
//            </View>
//            
//            <Modal visible={this.state.modalVisible}>
//                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//                    <View style={styles.modal}>
//                        <View style={[styles.inputWrapper, {flex: 1}]}>
//
//                            <View style={[styles.elementWrapper, { flexDirection: 'row' }]}>
//                                <TouchableOpacity onPress={ () => 
//                                        this.setState({type: 'income'})
//                                    }
//                                    style={[styles.switchButtonInc, 
//                                        this.state.type == 'income' 
//                                        ? { backgroundColor: '#c3e6cb' }
//                                        : null
//                                    ]}
//                                >
//                                    <Text style={[styles.input, { color: '#155724', textAlign: 'center' }]}>Income</Text>
//                                </TouchableOpacity>
//                                <TouchableOpacity onPress={ () => 
//                                        this.setState({type: 'expense'})
//                                    } 
//                                    style={[styles.switchButtonExp, 
//                                        this.state.type == 'expense' 
//                                        ? { backgroundColor: '#f5c6cb' }
//                                        : null
//                                    ]}
//                                >
//                                    <Text style={[styles.input, { color: '#721c24', textAlign: 'center' }]}>Expense</Text>
//                                </TouchableOpacity>
//                            </View>
//
//                            <View style={[styles.elementWrapper, 
//                                          { 
//                                            borderWidth: 1, 
//                                            borderColor: 'rgba(0,0,0,.125)', 
//                                            borderRadius: 5,
//                                            paddingVertical: 10,
//                                            paddingHorizontal: 20,
//                                            width: 300,
//                                          }
//                                         ]}>
//                                <TextInput 
//                                    placeholder='Description'
//                                    onChangeText={ (desc) => this.setState({description: desc}) } 
//                                    style={[styles.input, styles.textInput]}   
//                                />
//                            </View>
//
//                            <View style={[styles.elementWrapper, 
//                                          { 
//                                            borderWidth: 1, 
//                                            borderColor: 'rgba(0,0,0,.125)', 
//                                            borderRadius: 5,
//                                            paddingVertical: 10,
//                                            paddingHorizontal: 20,
//                                            width: 300,
//                                          }
//                                         ]}>
//                                <TextInput 
//                                    placeholder='Amount'
//                                    keyboardType='numeric'
//                                    onChangeText={ (amount) => this.setState({amount: amount}) }
//                                    style={[styles.input, styles.textInput]}
//                                />
//                            </View>
//
//                            <View style={styles.elementWrapper}>
//                                <TouchableOpacity 
//                                   onPress={this.submit}
//                                   style={
//                                    { 
//                                        borderWidth: 1, 
//                                        borderColor: '#b8daff', 
//                                        borderRadius: 5, 
//                                        paddingVertical: 10, 
//                                        paddingHorizontal: 20,
//                                        backgroundColor: '#cce5ff'
//                                    }}
//                                >
//                                    <Text style={[styles.input, { color: '#004085' }]}>Add Item</Text>
//                                </TouchableOpacity>
//                            </View>
//
//                            <View style={[styles.elementWrapper, {  }]}>
//                                <TouchableOpacity onPress={ () => this.setState({ modalVisible: !this.state.modalVisible }) }>
//                                    <Text style={{ fontSize: 20, textAlign: 'right' }}>Back</Text>
//                                </TouchableOpacity> 
//                            </View>                                               
//                        </View>
//
//                    </View>
//                </TouchableWithoutFeedback>
//            </Modal>
//            
//            <View style={{ flexDirection: 'row', flex: 3 }}>
//                <ScrollView style={{ flex: 1 }}>
//                    <List />
//                </ScrollView>
//            </View>
//            
//            <View style={{ flexDirection: 'row', flex: 0.5 }}>
//                <View style={{ flex: 1, alignItems: 'center' }}>
//                <TouchableOpacity
//                   onPress={ () => this.setState({ modalVisible: !this.state.modalVisible }) }
//                   style={{ padding: 10, borderWidth: 1, borderColor: 'blue', borderRadius: 5 }}
//                   >
//                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Add Item</Text>
//                </TouchableOpacity>
//                </View>
//            </View>
//        </View>
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
    textInput: {
        
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
