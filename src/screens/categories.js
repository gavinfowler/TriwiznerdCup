import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";

import api from "../api/swapi.service"
import CategoryItem from "../components/CategoryItem";

export default class Movie extends Component {
    static navigationOptions = ({navigation}) => {
        let title = navigation.getParam('category');

        return { title };
    };

    constructor(props) {
        super(props);

        this.state = {
            results: [],
            next_page: ""
        }
    }

    componentWillMount() {
        this.setState(() => {
            return({ category: this.props.navigation.getParam('category') });
        }, () => {
            if(this.state.category == "people"){
                api.getPeople()
                .then((result) => {
                    this.setState((prevState) => {
                        return({
                            results: result.items,
                            next_page: result.next
                        });    
                    });
                })
                .catch(() => console.log("Something went wrong..."));
            }
            else if(this.state.category == "ships"){

            }
        });
    }

    _renderItem(item){
        return <CategoryItem navigation={this.props.navigation} data={item.getData()} category={this.state.category}/>
    }

    _nextPage(){
        //Call API to get next page and append results to results
        api.getPeople(this.state.next_page)
            .then((result) => {
                this.setState((prevState) => {
                    return({
                        results: prevState.movieResults.concat(result.items),
                        next_page: result.next
                    });    
                });
            })
            .catch(() => console.log("Something went wrong..."));
    }

    render(){
        return(
            <View>
                <FlatList
                  data={this.state.results}
                  extraData={this.state}
                  keyExtractor={(item) => item.getData().url}
                  renderItem={(item) => this._renderItem(item.item)}
                  ListEmptyComponent={() => { return(<Text> No search results... </Text>)}}
                  onEndReachedThreshold={3}
                  onEndReached={() => this._nextPage()}
                />
            </View>
        );
    }
}