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

export default class Register extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { 
            Claims: {
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
            },
            InputError: '', 
            ApiInputErrors: {},
        }
    }
    
    _registerAsync = async (claims) => {
//        if 
//        (
//            claims.username === '' || 
//            claims.email === '' ||
//            claims.password === '' || 
//            claims.confirmPassword === ''
//        ) 
//        {
//            this.setState({InputError: 'Please fill in your username, email and password.'});            
//            return;
//        }
//        
//        if (claims.password !== claims.confirmPassword)
//        {
//            this.setState({InputError: 'Passwords don\'t match.'});
//            return;
//        }
        
        try {
            let response = await fetch(BaseUrl + '/api/register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: claims.username,
                    email: claims.email,
                    password: claims.password,
                    confirmPassword: claims.confirmPassword,
                }),
            });
            
            let data = await response.json();
            
            if (data.error)
            {
                this.setState({ApiInputErrors: data.error});
                
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
                                    <Text style={styles.errorText}>
                                        {this.state.inputError}
                                    </Text>                                    
                                </View>
                            </View>
                        : null                                                
                    }
                    
                    {
                        Object.keys(this.state.ApiInputErrors).length > 0
                        ?
                            <View style={[styles.elementWrapper, styles.errorMessage]}>
                                <View style={{ flex: 1 }}>
                                    {
                                        this.state.ApiInputErrors.hasOwnProperty('username_error')
                                        ?
                                            <Text style={styles.errorText}>
                                                {this.state.ApiInputErrors.username_error}
                                            </Text>
                                        : null
                                    }
                                    {
                                        this.state.ApiInputErrors.hasOwnProperty('email_error')
                                        ?
                                            <Text style={styles.errorText}>
                                                {this.state.ApiInputErrors.email_error}
                                            </Text>
                                        : null
                                    }
                                    {
                                        this.state.ApiInputErrors.hasOwnProperty('password_error')
                                        ?
                                            <Text style={styles.errorText}>
                                                {this.state.ApiInputErrors.password_error}
                                            </Text>
                                        : null
                                    }
                                    {
                                        this.state.ApiInputErrors.hasOwnProperty('confirm_password_error')
                                        ?
                                            <Text style={styles.errorText}>
                                                {this.state.ApiInputErrors.confirm_password_error}
                                            </Text>
                                        : null
                                    }         
                                </View>
                            </View>
                        : null
                    }
                    
                    <View style={[styles.elementWrapper, styles.registerInputField]}>
                        <View style={{ flex: 1 }}>
                            <TextInput 
                                placeholder='Username'
                                autoCapitalize='none'
                                onChangeText={ (username) => {
                                    const newClaims = Object.assign({}, this.state.Claims, { username: username });
                                    this.setState({Claims: newClaims});   
                                    }                             
                                } 
                                style={[styles.input]}   
                            />
                        </View>
                    </View>
                    
                    <View style={[styles.elementWrapper, styles.registerInputField]}>
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

                    <View style={[styles.elementWrapper, styles.registerInputField]}>
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
                    
                    <View style={[styles.elementWrapper, styles.registerInputField]}>
                        <View style={{ flex: 1 }}>                        
                            <TextInput 
                                placeholder='Confirm Password'
                                secureTextEntry={true}
                                onChangeText={ (confirmPassword) => {
                                    const newClaims = Object.assign({}, this.state.Claims, { confirmPassword: confirmPassword });
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
                                onPress={() => this._registerAsync(this.state.Claims)}
                                style={styles.registerButton}
                            >
                                <Text style={{ color: '#004085', fontSize: 20, textAlign: 'center', }}>Register</Text>                    
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    <View style={styles.elementWrapper}>
                        <View style={{ flex: 1 }}>                       
                            <TouchableOpacity
                                onPress={() => navigate('Login')}                                  
                            >
                                <Text style={{ textAlign: 'right', color: '#004085', fontSize: 15 }}>Already have an account?</Text>
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
    registerInputField: { 
        borderWidth: 1, 
        borderColor: 'rgba(0,0,0,.125)', 
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    registerButton: { 
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