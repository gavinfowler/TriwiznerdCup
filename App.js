/**
 * Star Wars App
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './src/screens/home';
import Categories from './src/screens/categories';
import PeopleDetails from './src/screens/peopleDetail';

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
        Categories: Categories,
        PeopleDetails: PeopleDetails,
    },
    {
        initialRouteName: 'Home'
    }
);

const AppContainer = createAppContainer(Root);