import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import { login } from '../Authentication';

export default ({ navigation }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
           onPress={() => login().then(() => navigation.navigate('SignedIn'))}
           >
            <Text>Login</Text>                    
        </TouchableOpacity>
    </View>
)