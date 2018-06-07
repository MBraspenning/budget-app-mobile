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
    constructor(props)
    {
        super(props);
        this.state = {
            active: 'overview',
        }        
    }
    
    _logoutAsync = async () => {
        await AsyncStorage.clear();
        
        this.props.navigation.navigate('SignedOut');
    }

    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <View style={styles.tabBarContainer}>
                <View style={[styles.tabBarItemContainer, {alignItems: 'flex-start'}]}>
                    <TouchableOpacity onPress={() => {
                            this.setState({active: 'overview'});
                            navigate('Main');
                    }} >
                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                            <FontAwesome name="home" size={25} style={this.state.active == 'overview' ? styles.active : styles.inactive} />
                            <Text style={this.state.active == 'overview' ? styles.active : styles.inactive}>Overview</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.tabBarItemContainer, {alignItems: 'center'}]}>
                    <TouchableOpacity onPress={() => {
                            this.setState({active: 'overview'});
                            navigate('Add');
                    }} >
                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                            <MaterialIcons name="add-circle" size={25} style={this.state.active == 'overview' ? styles.active : styles.inactive} />
                            <Text style={this.state.active == 'overview' ? styles.active : styles.inactive}>Add Item</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.tabBarItemContainer,, {alignItems: 'flex-end'}]}>
                    <TouchableOpacity onPress={this._logoutAsync} >
                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                            <MaterialIcons name="exit-to-app" size={25} style={styles.active} />
                            <Text style={styles.active} >Logout</Text>
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
    },
    active: {
        color: '#327AD1'
    },
    inactive: {
        color: '#93A6B7'
    }
});