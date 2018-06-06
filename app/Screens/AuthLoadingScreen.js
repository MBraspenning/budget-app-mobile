import React from 'react';

import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View
} from 'react-native';

export default class AuthLoadingScreen extends React.Component
{
    constructor(props)
    {
        super(props);
        this._bootstrapAsync();
    }
    
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        
        this.props.navigation.navigate(userToken ? 'SignedIn' : 'SignedOut');
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle='default' />
            </View>    
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});