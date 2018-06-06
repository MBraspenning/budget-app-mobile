import React from 'react';

import {
    View,
    StyleSheet,
    Button,
    Alert,
    TouchableOpacity,
    Text,
    AsyncStorage
} from 'react-native';

import { FontAwesome, MaterialIcons } from 'react-native-vector-icons';

export default class TabBarComponent extends React.Component
{
    _logoutAsync = async () => {
        await AsyncStorage.clear();
        
        this.props.navigation.navigate('SignedOut');
    }
    
    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <View style={styles.tabBarContainer}>
                <View style={[styles.tabBarItemContainer, {alignItems: 'flex-start'}]}>
                    <TouchableOpacity onPress={() => navigate('Main')} >
                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                            <FontAwesome name="home" size={25} />
                            <Text>Overview</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.tabBarItemContainer, {alignItems: 'center'}]}>
                    <TouchableOpacity onPress={() => navigate('Add')} >
                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                            <MaterialIcons name="add-circle" size={25} />
                            <Text>Add Item</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.tabBarItemContainer,, {alignItems: 'flex-end'}]}>
                    <TouchableOpacity onPress={this._logoutAsync} >
                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                            <MaterialIcons name="exit-to-app" size={25} />
                            <Text>Logout</Text>
                        </View>
                    </TouchableOpacity> 
                </View>              
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    tabBarItemContainer: {
        flex: 1,
    }
});