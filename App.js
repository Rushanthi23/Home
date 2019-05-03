import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Explore from './screens/Explore'
import Saved from './screens/Saved'
import Inbox from './screens/Inbox'
import Trips from './screens/Trips'

const TabNavigator = createBottomTabNavigator({
    Home: { screen: Explore },
    Scoring: {screen: Inbox}

});

export default createAppContainer(TabNavigator);
/*
export default class App extends Component{
    render(){
        return(
            <AppStackNavigator />
        );
    }
}

const AppStackNavigator = createStackNavigator ({
    Home : Explore,
    Details : Saved
})
*/