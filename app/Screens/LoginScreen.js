import React, { Component } from 'react';

import {
    View, 
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    AsyncStorage
} from 'react-native';

import { login } from '../Authentication';

export default class Login extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { 
            Claims: {
                email: '',
                password: '',
            }
        }
    }
    
    _loginAsync = async () => {
        await AsyncStorage.setItem('userToken', 'test');
        
        this.props.navigation.navigate('SignedIn');
    }
    
    render(){
        const { navigate } = this.props.navigation;
        
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
                            placeholder='Email'
                            onChangeText={ (email) => {
                                const newClaims = Object.assign({}, this.state.Claims, { email: email });
                                this.setState({Claims: newClaims});   
                                }                             
                            } 
                            style={[styles.input]}   
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
                            placeholder='Password'
                            secureTextEntry={true}
                            onChangeText={ (password) => {
                                const newClaims = Object.assign({}, this.state.Claims, { password: password });
                                this.setState({Claims: newClaims}); 
                                }                            
                            }
                            style={[styles.input]}
                        />
                    </View>

                    <View style={styles.elementWrapper}>
                        <TouchableOpacity
                            onPress={this._loginAsync}
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
                            <Text style={{ color: '#004085', fontSize: 25, }}>Login</Text>                    
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    elementWrapper: {
        marginVertical: 20,    
    },
    input: {
        fontSize: 15,    
    },    
})