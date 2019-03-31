import React, { Component } from "react";
import { Text, View, FlatList, Button } from "react-native";

import api from "../api/swapi.service"
import CategoryItem from "../components/CategoryItem";
import { Container } from "native-base";

export default class Movie extends Component {
    static navigationOptions = ({navigation}) => {
        let title = navigation.getParam('category');

        return { title };
    };

    constructor(props) {
        super(props);

        this.state = {
            results: [],
            next_page: "",
            category: null
        }
    }

    getApiCall(){
        if(this.state.category == "people"){
            return api.getPeople;
        }
        else if(this.state.category == "planets"){
            return api.getPlanets;
        }
        else if(this.state.category == "films"){
            return api.getFilms;
        }
        return api.getPeople;
    }

    componentWillMount() {
        this.setState(() => {
            return({ category: this.props.navigation.getParam('category') });
        }, () => {
            let apicall = this.getApiCall();
            apicall()
                .then((result) => {
                    console.log('result', result);
                    this.setState(() => {
                        return({
                            results: result.items,
                            next_page: result.next
                        });    
                    });
                })
                .catch(() => console.log("Something went wrong..."));
            }
        );
    }

    _renderItem(item){
        return <CategoryItem navigation={this.props.navigation} data={item.getData()} category={this.state.category}/>
    }

    _nextPage(){
        //Call API to get next page and append results to results
        if(this.state.next_page == null){
            return;
        }
        
        let apicall = this.getApiCall();
        console.log("next page", this.state.next_page, apicall)
        apicall(this.state.next_page)
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
        // let button = null;
        // if(this.state.next_page){
        //     button = <Button onPress={() => _nextPage()}>
        //         <Text> Load More </Text>
        //     </Button>;
        // }
        return(
            <Container style={{backgroundColor:'black'}}>
                <FlatList
                  data={this.state.results}
                  extraData={this.state}
                  keyExtractor={(item) => item.getData().url}
                  renderItem={(item) => this._renderItem(item.item)}
                  ListEmptyComponent={() => { return(<Text style={{color:'yellow'}}> Searching for {this.state.category}... </Text>)}}
                  //onEndReachedThreshold={3}
                  //onEndReached={() => this._nextPage()}
                />
                {/* {button} */}
            </Container>
        );
    }
}