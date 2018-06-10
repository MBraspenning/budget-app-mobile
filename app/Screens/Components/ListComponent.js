import React, { Component } from 'react';
import { 
    View,
    FlatList,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    Alert,
    Modal,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput
} from 'react-native';

import Api from '../../Api';

export default class ListComponent extends React.Component
{
    constructor(props) {
        super(props);
        
        this.state = { 
            modalVisible: false,
            itemToEditType: '',
            itemToEditId: '',
            itemToEditDescription: '',
            itemToEditAmount: '',
        };        
    }    

    showEditForm = (type, id, description, amount) => {
        
        this.setState({
            itemToEditType: type,
            itemToEditId: id,
            itemToEditDescription: description,
            itemToEditAmount: amount    
        });
        
        this.setState({ modalVisible: !this.state.modalVisible });
    }

    submit = async () => {        
        await Api.editItem(
            this.state.itemToEditId, 
            this.state.itemToEditType,
            this.state.itemToEditDescription, 
            this.state.itemToEditAmount
        )
        .then(this.setState({ modalVisible: !this.state.modalVisible }))
        .then(this.props.navigation.setParams({dataChanged: true}));                                        
    }
    
    deleteItem = async (id, type, amount) => {
        await Api.deleteItem(id, type, amount)
            .then(this.props.navigation.setParams({dataChanged: true}));
    }
    
    render() {
        return (
            <View>
            
            <View>
                <View>
                    <Text style={styles.incomeHeader}>Income</Text>
                    <FlatList 
                        data={this.props.incomeItems}
                        keyExtractor={(item, index) => item.id}
                        renderItem={
                            ({item}) => 
                                <View style={styles.itemWrapper}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[styles.listItem, { textAlign: 'left' }]}>
                                            {item.income}
                                        </Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                            <Text style={[ styles.listItem, { color: '#28a745', textAlign: 'right' }]}>
                                                + {item.amount} 
                                            </Text>
                                        </View>
                                        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <TouchableOpacity onPress={ () => this.showEditForm('income', item.id, item.income, item.amount) }
                                               style={{ marginLeft: 15 }}>
                                                <Image source={require('../../../assets/edit.png')} style={{ width: 20, height: 20 }}/>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => this.deleteItem(item.id, 'income', item.amount)}>
                                                <Image source={require('../../../assets/garbage.png')} style={{ width: 20, height: 20 }}/>
                                            </TouchableOpacity>                                            
                                        </View>
                                    </View>
                                </View>
                        }   
                    /> 
                </View>
                <View>
                    <Text style={styles.expenseHeader}>Expense</Text> 
                    <FlatList 
                        data={this.props.expenseItems}
                        keyExtractor={(item, index) => item.id}
                        renderItem={
                            ({item}) => 
                                <View style={styles.itemWrapper}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[styles.listItem, { textAlign: 'left' }]}>
                                            {item.expense}
                                        </Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                            <Text style={[ styles.listItem, { color: '#dc3545', textAlign: 'right' }]}>
                                                - {item.amount} 
                                            </Text>
                                        </View>
                                        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <TouchableOpacity onPress={ () => this.showEditForm('expense', item.id, item.expense, item.amount) }
                                               style={{ marginLeft: 15 }}>
                                                <Image source={require('../../../assets/edit.png')} style={{ width: 20, height: 20 }}/>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={ () => this.deleteItem(item.id, 'expense', item.amount) }>
                                                <Image source={require('../../../assets/garbage.png')} style={{ width: 20, height: 20 }}/>
                                            </TouchableOpacity>                                            
                                        </View>
                                    </View>                                    
                                </View>
                        } 
                    />
                </View> 
            </View>
            
            <Modal visible={this.state.modalVisible}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modal}>
                        <View style={[styles.inputWrapper, {flex: 1}]}>

                            <View style={[styles.elementWrapper, { flexDirection: 'row' }]}>
                                <TouchableOpacity
                                    style={[styles.switchButtonInc, 
                                        this.state.itemToEditType == 'income' 
                                        ? { backgroundColor: '#c3e6cb' }
                                        : null
                                    ]}
                                >
                                    <Text style={[styles.input, { color: '#155724', textAlign: 'center' }]}>Income</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.switchButtonExp, 
                                        this.state.itemToEditType == 'expense' 
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
                                    value={this.state.itemToEditDescription}
                                    onChangeText={ (desc) => this.setState({itemToEditDescription: desc}) } 
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
                                    value={this.state.itemToEditAmount}
                                    keyboardType='numeric'
                                    onChangeText={ (amount) => this.setState({itemToEditAmount: amount}) }
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
                                    <Text style={[styles.input, { color: '#004085' }]}>Edit Item</Text>
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
            </Modal>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    incomeHeader: {
        fontSize: 25,
        color: '#28a745',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    expenseHeader: {
        fontSize: 25,
        color: '#dc3545',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    listItem: {
        fontSize: 17,
    },
    itemWrapper: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,.125)',
        paddingVertical: 12,
        paddingHorizontal: 20,
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