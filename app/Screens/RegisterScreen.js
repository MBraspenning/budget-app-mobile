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
                email: '',
                password: '',
                confirmPassword: '',
            },
            InputError: '',            
        }
    }
    
//    _loginAsync = async (claims) => {
//        if (claims.email === '' || claims.password === '') 
//        {
//            this.setState({InputError: 'Please fill in your email and password.'});            
//            return;
//        }
//        
//        try {
//            let response = await fetch(BaseUrl + '/api/login', {
//                method: 'POST',
//                headers: {
//                    Accept: 'application/json',
//                    'Content-Type': 'application/json',
//                },
//                body: JSON.stringify({
//                    email: claims.email,
//                    password: claims.password
//                }),
//            });
//            
//            let data = await response.json();
//            
//            if (data.error)
//            {
//                this.setState({InputError: data.error});
//                return;
//            }
//            else if (data.access_token) 
//            {
//                await AsyncStorage.setItem('access-token', data.access_token);
//
//                this.props.navigation.navigate('SignedIn');
//                
//                return;
//            }
//            else 
//            {
//                this.setState({InputError: 'Something went wrong. Please try again.'})
//            }
//            
//            return;
//        }
//        catch (error) {
//            console.log(error);
//        }                
//    }
    
    _registerAsync = async (claims) => {
        if (claims.email === '' || claims.password === '' || claims.confirmPassword === '') 
        {
            this.setState({InputError: 'Please fill in your email and password.'});            
            return;
        }
        
        if (claims.password !== claims.confirmPassword)
        {
            this.setState({InputError: 'Passwords don\'t match.'});
            return;
        }
        
        try {
            let response = await fetch(BaseUrl + '/api/register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: claims.email,
                    password: claims.password,
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
                                <Text style={styles.errorText}>{this.state.InputError}</Text>
                            </View>
                        : null
                    }
                    
                    <View style={[styles.elementWrapper, styles.registerInputField]}>
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

                    <View style={[styles.elementWrapper, styles.registerInputField]}>
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
                    
                    <View style={[styles.elementWrapper, styles.registerInputField]}>
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

                    <View style={styles.elementWrapper}>
                        <TouchableOpacity
                            onPress={() => this._loginAsync(this.state.Claims)}
                            style={styles.registerButton}
                        >
                            <Text style={{ color: '#004085', fontSize: 20, textAlign: 'center', }}>Register</Text>                    
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.elementWrapper}>
                        <TouchableOpacity
                            onPress={() => navigate('Login')} 
                            style={{ width: 300 }}  
                        >
                            <Text style={{ textAlign: 'right', color: '#004085', fontSize: 15 }}>Already have an account?</Text>
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
        fontSize: 20,    
    }, 
    registerInputField: { 
        borderWidth: 1, 
        borderColor: 'rgba(0,0,0,.125)', 
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: 300,
    },
    registerButton: { 
        borderWidth: 1, 
        borderColor: '#b8daff', 
        borderRadius: 5, 
        paddingVertical: 10, 
        paddingHorizontal: 20,
        width: 300,
        backgroundColor: '#cce5ff'
    },
    errorMessage: {
        backgroundColor: '#f8d7da',
        borderWidth: 1,
        borderColor: '#f5c6cb',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: 300,
    },
    errorText: {
        color: '#721c24',        
    }
})