/**
 * Star Wars App
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './src/screens/home';
import Categories from './src/screens/categories';
import PeopleDetail from './src/screens/peopleDetail';
import PlanetDetail from './src/screens/planetDetail';
import FilmDetail from './src/screens/filmDetail';

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
        PeopleDetails: PeopleDetail,
        PlanetDetails: PlanetDetail,
        FilmDetails:FilmDetail,
    },
    {
        initialRouteName: 'Home'
    }
);

const AppContainer = createAppContainer(Root);