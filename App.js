/**
 * Star Wars App
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './src/screens/home';

export default class App extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

const Root = createStackNavigator(
    {
        Home: Home,
    },
    {
        initialRouteName: 'Home'
    }
);

const AppContainer = createAppContainer(Root);