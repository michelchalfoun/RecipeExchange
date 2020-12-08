import React, { Component } from 'react';
import axios from 'axios';
import DataTable from '../Tables/recipe-cards.component';

export default class DisplayPosts extends Component {

    constructor(props) {
        super(props);
        this.state = { postsCollection: [] };
    }

    componentDidMount() {
        axios.get('/posts')
            .then(res => {
                if(res.data != null) {
                    console.log(res.data)
                    this.setState({ postsCollection: res.data });
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    recipeCards() {
        console.log(this.state.postsCollection)
        return this.state.postsCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    {this.recipeCards()}
                </div>
            </div>
        )
    }
}
