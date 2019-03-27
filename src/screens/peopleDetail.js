/**
 * Star Wars App
 */

import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Button, Text, Container, List, ListItem, Content, Card, CardItem, Body } from 'native-base'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

test = {
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male",
  "homeworld": "https://www.swapi.co/api/planets/1/",
  "films": [
    "https://www.swapi.co/api/films/2/",
    "https://www.swapi.co/api/films/6/",
    "https://www.swapi.co/api/films/3/",
    "https://www.swapi.co/api/films/1/",
    "https://www.swapi.co/api/films/7/"
  ],
  "species": [
    "https://www.swapi.co/api/species/1/"
  ],
  "vehicles": [
    "https://www.swapi.co/api/vehicles/14/",
    "https://www.swapi.co/api/vehicles/30/"
  ],
  "starships": [
    "https://www.swapi.co/api/starships/12/",
    "https://www.swapi.co/api/starships/22/"
  ],
  "created": "2014-12-09T13:50:51.644000Z",
  "edited": "2014-12-20T21:17:56.891000Z",
  "url": "https://www.swapi.co/api/people/1/"
}

export default class PeopleDetail extends Component {
  static navigationOptions = {
    title: 'People Detail page'
  };

  constructor(props) {
    super(props);

    this.state = {
      person: test,
    }
  };

  componentDidMount() {
    console.log(this.state.person);
    var temp = new Date('2014-12-09T13:50:51.644000Z');
    console.log(temp.toLocaleDateString())
  }

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>
                {this.state.person.name}
              </Text>
            </CardItem>
            <Body>
              <Text>
                Height: {this.state.person.height} cm
              </Text>
              <Text>
                Weight: {this.state.person.mass} kg
              </Text>
              <Text>
                Hair Color: {this.state.person.hair_color}
              </Text>
              <Text>
                Skin Color: {this.state.person.skin_color}
              </Text>
              <Text>
                Eye Color: {this.state.person.eye_color}
              </Text>
              <Text>
                Birth Year: {this.state.person.birth_year}
              </Text>
              <Text>
                Gender: {this.state.person.gender}
              </Text>
            </Body>
            <CardItem footer>
              <Text>
                Date Created: {new Date(this.state.person.created).toLocaleDateString()}
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
