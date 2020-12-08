import React, { Component } from 'react';
import axios from 'axios';
import DataTable from '../Tables/recipe-cards.component';
import { Input } from 'semantic-ui-react'

export default class DisplaySearch extends Component {

    constructor(props) {
        super(props);
        this.state = { postsCollection: [] ,
                        searchKeyword: ""
        };
    }

    componentDidMount() {
        axios.get('/posts')
            .then(res => {
                if(res.data != null) {
                    this.setState({ postsCollection: res.data });
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    updateSearchedRecipes() {
        console.log(this.state.searchKeyword)
        axios.get('/posts/search/' + this.state.searchKeyword)
            .then(res => {
                if(res.data != null) {
                    this.setState({ postsCollection: res.data });
                }
            })
            .catch(function (error) {
                console.log(error);
            })
            console.log(this.state.postsCollection)
    }

    updateKeyword(event){
        //You will need the onChange value for the input tag to capture the search bar value
        this.setState({ searchKeyword: event.target.value});
    }

    recipeCards() {
        return this.state.postsCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <Input
                    onChange={event => this.updateKeyword(event)}
                ></Input>
            <button class="ui button"
                onClick={() => this.updateSearchedRecipes()}
            >Search</button>
                <div className="container">
                    {this.recipeCards()}
                </div>
            </div>
        )
    }
}
