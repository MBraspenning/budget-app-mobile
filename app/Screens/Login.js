import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import { login } from '../Authentication';

export default ({ navigation }) => (
    <View>
        <TouchableOpacity
           onPress={() => login().then(() => navigation.navigate('Main'))}
           >
            <Text>Login</Text>                    
        </TouchableOpacity>
    </View>
)