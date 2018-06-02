import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import { logout } from '../../Authentication';

const LogoutComponent = ({ navigation }) => (
    
    <TouchableOpacity onPress={ () => logout().then(() => navigation.navigate('SignedOut')) }>
        <Text>Logout</Text>
    </TouchableOpacity>
    
);

export default LogoutComponent;