import React, { Component } from 'react';
import { Card, Text, CardItem, Body } from 'native-base';


export default class CategoryItem extends Component {
    toDetailPage() {
        if (this.props.category == 'people') {
            this.props.navigation.navigate('PeopleDetails', { data: this.props.data });
        }
        else if (this.props.category == 'planets') {
            this.props.navigation.navigate('PlanetDetails', { data: this.props.data });
        }
        else if (this.props.category == 'films') {
            this.props.navigation.navigate('FilmDetails', { data: this.props.data });
        }
    }

    render() {
        return (
            <Card>
                <CardItem button onPress={() => this.toDetailPage()} style={{backgroundColor:'black'}}>
                    <Body>
                        <Text style={{color:'yellow'}}>
                            {this.props.data.name}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}