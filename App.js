import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

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
        <View style={{ flexDirection: 'row', flex: 1 }}>
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
        <View style={{ flex: 1 }}>
            <Input />
        </View>
        <View style={{ flex: 1 }}>
            <Text>List goes here!</Text>
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
