import React, { Component } from 'react';
import { Card, Text } from 'native-base'


export default class CategoryItem extends Component {
    toDetailPage(){
        if(this.props.category == 'people'){
            this.props.navigation.navigate('', { data: this.props.data});
        }
        else if(this.props.category == ''){

        }
    }

    render() {
        return(
            <Card onPress={this.toDetailPage()}>
                <Text> {this.props.data.name} </Text>
            </Card>
        );
    }
}