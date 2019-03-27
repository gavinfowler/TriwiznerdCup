/**
 * Star Wars App
 */

import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Button, Text, Container, List, ListItem } from 'native-base'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }


  render() {
    return (
      <Container>
        <Button onPress={() => { this.props.navigation.navigate('PeopleDetails') }}>
          <Text>
            To People Detail
          </Text>
        </Button>
        <List>
          <ListItem onPress={() => { this.props.navigation.navigate('Categories', { category: 'test' }) }}>
            <Text>
              Test
          </Text>
          </ListItem>
          <ListItem onPress={() => { alert('people Pressed') }}>
            <Text>
              People
            </Text>
          </ListItem>
          <ListItem onPress={() => { alert('planets Pressed') }}>
            <Text>
              Planets
            </Text>
          </ListItem>
          <ListItem onPress={() => { alert('films Pressed') }}>
            <Text>
              Films
            </Text>
          </ListItem>
        </List>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
