/**
 * Star Wars App
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, ImageBackground } from 'react-native';
import { Button, Container, List, ListItem, Image } from 'native-base'

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }


  render() {
    return (
      <Container style={styles.back}>
          {/* <Button onPress={() => { this.props.navigation.navigate('PeopleDetails') }}>
          <Text>
            To People Detail
          </Text>
        </Button>
        <Button onPress={() => { this.props.navigation.navigate('PlanetDetails') }}>
          <Text>
            To Planet Detail
          </Text>
        </Button>
        <Button onPress={() => { this.props.navigation.navigate('FilmDetails') }}>
          <Text>
            To Film Detail
          </Text>
        </Button> */}
          <List>
            <ListItem onPress={() => { this.props.navigation.navigate('Categories', { category: 'people' }) }}>
              <Text style={styles.text}>
                People
            </Text>
            </ListItem>
            <ListItem onPress={() => { this.props.navigation.navigate('Categories', { category: 'planets' }) }}>
              <Text style={styles.text}>
                Planets
            </Text>
            </ListItem>
            <ListItem onPress={() => { this.props.navigation.navigate('Categories', { category: 'films' }) }}>
              <Text style={styles.text}>
                Films
            </Text>
            </ListItem>
          </List>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'yellow',
    fontSize: 20
  },
  back: {
    backgroundColor: 'black'
  },
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
