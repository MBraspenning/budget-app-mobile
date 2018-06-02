import React from 'react';

import { TouchableOpacity, Text } from 'react-native';

import { login } from '../../Authentication';

const LoginComponent = ({ navigation }) => (
    
    <TouchableOpacity
        onPress={() => login('test').then(() => navigation.navigate('SignedIn'))}
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
    
);

export default LoginComponent;
