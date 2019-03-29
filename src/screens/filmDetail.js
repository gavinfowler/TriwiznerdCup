/**
 * Star Wars App
 */

import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Button, Text, Container, List, ListItem, Content, Card, CardItem, Body } from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



export default class FilmDetail extends Component {

  test = {
    "title": "A New Hope",
    "episode_id": 4,
    "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    "director": "George Lucas",
    "producer": "Gary Kurtz, Rick McCallum",
    "release_date": "1977-05-25",
    "characters": [
      "https://www.swapi.co/api/people/1/",
      "https://www.swapi.co/api/people/2/",
      "https://www.swapi.co/api/people/3/",
      "https://www.swapi.co/api/people/4/",
      "https://www.swapi.co/api/people/5/",
      "https://www.swapi.co/api/people/6/",
      "https://www.swapi.co/api/people/7/",
      "https://www.swapi.co/api/people/8/",
      "https://www.swapi.co/api/people/9/",
      "https://www.swapi.co/api/people/10/",
      "https://www.swapi.co/api/people/12/",
      "https://www.swapi.co/api/people/13/",
      "https://www.swapi.co/api/people/14/",
      "https://www.swapi.co/api/people/15/",
      "https://www.swapi.co/api/people/16/",
      "https://www.swapi.co/api/people/18/",
      "https://www.swapi.co/api/people/19/",
      "https://www.swapi.co/api/people/81/"
    ],
    "planets": [
      "https://www.swapi.co/api/planets/2/",
      "https://www.swapi.co/api/planets/3/",
      "https://www.swapi.co/api/planets/1/"
    ],
    "starships": [
      "https://www.swapi.co/api/starships/2/",
      "https://www.swapi.co/api/starships/3/",
      "https://www.swapi.co/api/starships/5/",
      "https://www.swapi.co/api/starships/9/",
      "https://www.swapi.co/api/starships/10/",
      "https://www.swapi.co/api/starships/11/",
      "https://www.swapi.co/api/starships/12/",
      "https://www.swapi.co/api/starships/13/"
    ],
    "vehicles": [
      "https://www.swapi.co/api/vehicles/4/",
      "https://www.swapi.co/api/vehicles/6/",
      "https://www.swapi.co/api/vehicles/7/",
      "https://www.swapi.co/api/vehicles/8/"
    ],
    "species": [
      "https://www.swapi.co/api/species/5/",
      "https://www.swapi.co/api/species/3/",
      "https://www.swapi.co/api/species/2/",
      "https://www.swapi.co/api/species/1/",
      "https://www.swapi.co/api/species/4/"
    ],
    "created": "2014-12-10T14:23:31.880000Z",
    "edited": "2015-04-11T09:46:52.774897Z",
    "url": "https://www.swapi.co/api/films/1/"
  }

  static navigationOptions = {
    title: 'Film Detail page'
  };

  constructor(props) {
    super(props);

    this.state = {
      film: this.props.navigation.getParam('data'),
    }
  };

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>
                {this.state.film.title}
              </Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Episode: {this.state.film.episode_id}
                </Text>
                <Text>
                  Director: {this.state.film.director}
                </Text>
                <Text>
                  Producer {this.state.film.producer}
                </Text>
                <Text>
                  Release Date: {this.state.film.release_date}
                </Text>
                <Text>
                  Opening Crawl: {'\n\n'}{this.state.film.opening_crawl}
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>
                Date Created: {new Date(this.state.film.created).toLocaleDateString()}
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
