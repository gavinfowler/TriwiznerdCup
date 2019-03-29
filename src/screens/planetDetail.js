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
    title: 'Planet Detail page'
  };

  constructor(props) {
    super(props);

    this.state = {
      planet: this.props.navigation.getParam('data'),
    }
  };

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>
                {this.state.planet.name}
              </Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Population: {this.state.planet.population}
                </Text>
                <Text>
                  Climate: {this.state.planet.climate}
                </Text>
                <Text>
                  Gravity: {this.state.planet.gravity}
                </Text>
                <Text>
                  Terrain: {this.state.planet.terrain}
                </Text>
                <Text>
                  Diameter: {this.state.planet.diameter}
                </Text>
                <Text>
                  Rotation Period: {this.state.planet.rotation_period}
                </Text>
                <Text>
                  Orbital Period: {this.state.planet.orbital_period}
                </Text>
                <Text>
                  Surface Water: {this.state.planet.surface_water}
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>
                Date Created: {new Date(this.state.planet.created).toLocaleDateString()}
              </Text>
            </CardItem>
          </Card>
        </Content>
      </Container >
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
