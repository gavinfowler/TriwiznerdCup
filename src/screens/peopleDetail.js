/**
 * Star Wars App
 */

import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Button, Text, Container, List, ListItem, Content, Card, CardItem, Body } from 'native-base'

export default class PeopleDetail extends Component {

  static navigationOptions = {
    title: 'People Detail page'
  };

  constructor(props) {
    super(props);

    this.state = {
      person: this.props.navigation.getParam('data'),
    }
  };

  render() {
    return (
      <Container style={styles.back}>
        <Content>
          <Card>
            <CardItem header style={styles.back}>
              <Text style={styles.text}>
                {this.state.person.name}
              </Text>
            </CardItem>
            <CardItem style={styles.back}>
              <Body>
                <Text style={styles.text}>
                  Height: {this.state.person.height} cm {'\n'}
                  Weight: {this.state.person.mass} kg {'\n'}
                  Hair Color: {this.state.person.hair_color} {'\n'}
                  Skin Color: {this.state.person.skin_color} {'\n'}
                  Eye Color: {this.state.person.eye_color} {'\n'}
                  Birth Year: {this.state.person.birth_year} {'\n'}
                  Gender: {this.state.person.gender}
                </Text>
              </Body>
            </CardItem>
            <CardItem footer style={styles.back}>
              <Text style={styles.text}>
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
