import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";

import CategoryItem from "../components/CategoryItem";

export default class Movie extends Component {
    static navigationOptions = ({navigation}) => {
        let title = navigation.getParam('category');
        return { title };
    };

    constructor(props) {
        super(props);

        this.state = {
            results: []
        }
    }

    componentWillMount() {
        // Put API call here to store results in state.results
        // .then(result => this.setState(){...})
    }

    _renderItem(item){
        return <CategoryItem navigation={this.props.navigation}/>
    }

    _nextPage(){
        // Call API to get next page and append results to results
        // .then(result => this.setState(){ ... })
    }

    render(){
        return(
            <View>
                <FlatList
                  data={this.state.results}
                  extraData={this.state}
                  keyExtractor={(item) => item.getData().id.toString()}
                  renderItem={(item) => this._renderItem(item.item)}
                  ListEmptyComponent={() => { return(<Text> No search results... </Text>)}}
                  onEndReachedThreshold={3}
                  onEndReached={() => this._nextPage()}
                />
            </View>
        );
    }
}