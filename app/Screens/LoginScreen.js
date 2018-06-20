import React, { Component } from 'react';

import { BaseUrl } from '../Config';

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

export default class Login extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { 
            Claims: {
                email: '',
                password: '',
            },
            InputError: '',            
        }
    }
    
    _loginAsync = async (claims) => {
        if (claims.email === '' || claims.password === '') 
        {
            this.setState({InputError: 'Please fill in your email and password.'});            
            return;
        }
        
        try {
            let response = await fetch(BaseUrl + '/api/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: claims.email,
                    password: claims.password
                }),
            });
            
            let data = await response.json();
            
            if (data.error)
            {
                this.setState({InputError: data.error});
                return;
            }
            else if (data.access_token) 
            {
                await AsyncStorage.setItem('access-token', data.access_token);

                this.props.navigation.navigate('SignedIn');
                
                return;
            }
            else 
            {
                this.setState({InputError: 'Something went wrong. Please try again.'})
            }
            
            return;
        }
        catch (error) {
            console.log(error);
        }                
    }
    
    render(){
        const { navigate } = this.props.navigation;
        
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                    
                    {
                        this.state.InputError !== ''
                        ? 
                            <View style={[styles.elementWrapper, styles.errorMessage]}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.errorText}>{this.state.InputError}</Text>
                                </View>
                            </View>
                        : null
                    }
                    
                    <View style={[styles.elementWrapper, styles.loginInputField]}>
                        <View style={{ flex: 1 }}>
                            <TextInput 
                                placeholder='Email'
                                autoCapitalize='none'
                                onChangeText={ (email) => {
                                    const newClaims = Object.assign({}, this.state.Claims, { email: email });
                                    this.setState({Claims: newClaims});   
                                    }                             
                                } 
                                style={[styles.input]}   
                            />
                        </View>
                    </View>

                    <View style={[styles.elementWrapper, styles.loginInputField]}>
                        <View style={{ flex: 1 }}>
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
                    </View>

                    <View style={styles.elementWrapper}>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity
                                onPress={() => this._loginAsync(this.state.Claims)}
                                style={styles.loginButton}
                            >
                                <Text style={{ color: '#004085', fontSize: 20, textAlign: 'center', }}>Login</Text>                    
                            </TouchableOpacity>                        
                        </View>
                    </View>
                    
                    <View style={styles.elementWrapper}>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity
                                onPress={() => navigate('Register')}                                                            
                            >
                                <Text style={{ textAlign: 'right', color: '#004085', fontSize: 15 }}>Don't have an account yet?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>                
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    elementWrapper: {
        marginVertical: 10,
        flexDirection: 'row',
        marginHorizontal: 30,
    },
    input: {
        fontSize: 20,    
    }, 
    loginInputField: { 
        borderWidth: 1, 
        borderColor: 'rgba(0,0,0,.125)', 
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    loginButton: { 
        borderWidth: 1, 
        borderColor: '#b8daff', 
        borderRadius: 5, 
        paddingVertical: 10, 
        paddingHorizontal: 20,
        backgroundColor: '#cce5ff'
    },
    errorMessage: {
        backgroundColor: '#f8d7da',
        borderWidth: 1,
        borderColor: '#f5c6cb',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    errorText: {
        color: '#721c24',        
    }
})