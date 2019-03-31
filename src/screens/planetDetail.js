/**
 * Star Wars App
 */

import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Button, Text, Container, List, ListItem, Content, Card, CardItem, Body } from 'native-base';

export default class PlanetDetail extends Component {

  test = {
    "name": "Yavin IV",
    "rotation_period": "24",
    "orbital_period": "4818",
    "diameter": "10200",
    "climate": "temperate, tropical",
    "gravity": "1 standard",
    "terrain": "jungle, rainforests",
    "surface_water": "8",
    "population": "1000",
    "residents": [],
    "films": [
      "https://www.swapi.co/api/films/1/"
    ],
    "created": "2014-12-10T11:37:19.144000Z",
    "edited": "2014-12-20T20:58:18.421000Z",
    "url": "https://www.swapi.co/api/planets/3/"
  }

  static navigationOptions = {
    title: 'Planet Detail page',
    headerStyle: { backgroundColor: 'grey' }
  };

  constructor(props) {
    super(props);

    this.state = {
      planet: this.props.navigation.getParam('data'),
    }
  };

  render() {
    return (
      <Container  style={styles.back}>
        <Content>
          <Card>
            <CardItem header style={styles.back}>
              <Text style={styles.text}>
                {this.state.planet.name}
              </Text>
            </CardItem>
            <CardItem style={styles.back}>
              <Body>
                <Text style={styles.text}>
                  Population: {this.state.planet.population} {'\n'}
                  Climate: {this.state.planet.climate} {'\n'}
                  Gravity: {this.state.planet.gravity} {'\n'}
                  Terrain: {this.state.planet.terrain} {'\n'}
                  Diameter: {this.state.planet.diameter} {'\n'}
                  Rotation Period: {this.state.planet.rotation_period} {'\n'}
                  Orbital Period: {this.state.planet.orbital_period} {'\n'}
                  Surface Water: {this.state.planet.surface_water} {'\n'}
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container >
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'yellow'
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
