import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Components/Header';
import Input from './Components/Input';

export default class App extends React.Component {
  constructor(props)
    {
        super(props);
        this.state = { totalBudget: 50, totalIncome: 100, totalExpense: 50 }
    }
    
    render() {
    return (
      <View style={styles.container}>
        <Header 
            totalBudget={this.state.totalBudget}
            totalIncome={this.state.totalIncome}
            totalExpense={this.state.totalExpense}
        />
        <Input />
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
