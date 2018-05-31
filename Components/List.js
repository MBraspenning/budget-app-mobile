import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';

export default class List extends React.Component
{
    constructor(props) {
        super(props);
        this.state = { 
            incomeItems: [
                {id: '0', item: 'Salary', amount: '50.00'}, 
                {id: '1', item: 'Project', amount: '50.00'},
                {id: '2', item: 'Project', amount: '50.00'},
                {id: '3', item: 'Project', amount: '50.00'},
            ], 
            expenseItems: [
                {id: '0', item: 'Huur', amount: '50.00'}
            ] 
        };
    }
 
    render() {
        return (
            <View>
                <View>
                    <Text style={styles.incomeHeader}>Income</Text>
                    <FlatList 
                        data={this.state.incomeItems}
                        keyExtractor={(item, index) => item.id}
                        renderItem={
                            ({item}) => 
                                <View style={styles.itemWrapper}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[styles.listItem, { textAlign: 'left' }]}>
                                            {item.item}
                                        </Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                            <Text style={[ styles.listItem, { color: '#28a745', textAlign: 'right' }]}>
                                                + {item.amount} 
                                            </Text>
                                        </View>
                                        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <TouchableOpacity onPress={ () => Alert.alert('edit button clicked!') }
                                               style={{ marginLeft: 15 }}>
                                                <Image source={require('../assets/edit.png')} style={{ width: 20, height: 20 }}/>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={ () => Alert.alert('delete button clicked!') }>
                                                <Image source={require('../assets/garbage.png')} style={{ width: 20, height: 20 }}/>
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
                        data={this.state.expenseItems}
                        keyExtractor={(item, index) => item.id}
                        renderItem={
                            ({item}) => 
                                <View style={styles.itemWrapper}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[styles.listItem, { textAlign: 'left' }]}>
                                            {item.item}
                                        </Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                            <Text style={[ styles.listItem, { color: '#dc3545', textAlign: 'right' }]}>
                                                - {item.amount} 
                                            </Text>
                                        </View>
                                        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <TouchableOpacity onPress={ () => Alert.alert('edit button clicked!') }
                                               style={{ marginLeft: 15 }}>
                                                <Image source={require('../assets/edit.png')} style={{ width: 20, height: 20 }}/>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={ () => Alert.alert('delete button clicked!') }>
                                                <Image source={require('../assets/garbage.png')} style={{ width: 20, height: 20 }}/>
                                            </TouchableOpacity>                                            
                                        </View>
                                    </View>                                    
                                </View>
                        } 
                    />
                </View>
            </View>              
        );
    }
}

const styles = StyleSheet.create({
    incomeHeader: {
        fontSize: 35,
        color: '#28a745',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    expenseHeader: {
        fontSize: 35,
        color: '#dc3545',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    listItem: {
        fontSize: 20,
    },
    itemWrapper: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,.125)',
        padding: 20,
    },
});