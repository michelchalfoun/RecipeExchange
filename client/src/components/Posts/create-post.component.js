import React, { Component } from 'react';
import axios from 'axios';
import './create-post.component.css'

export default class CreatePost extends Component {

    constructor(props) {
        super(props)

        //Establish onChange variables to capture form input to store in state variables.
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeEstimateTime = this.onChangeEstimateTime.bind(this);
        this.onChangeIngredients = this.onChangeIngredients.bind(this);
        this.onChangeInstructions = this.onChangeInstructions.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //Establish state variables to change with the form and to send to the route when submitting.
        this.state = {
            title: '',
            description: '',
            estimateTime: '',
            ingredients: '',
            instructions: '',
        }
    }

    onChangeTitle(e) {
        this.setState({ title: e.target.value })
    }

    onChangeDescription(e) {
        this.setState({ description: e.target.value })
    }

    onChangeEstimateTime(e) {
        this.setState({ estimateTime: e.target.value })
    }

    onChangeIngredients(e) {
        this.setState({ ingredients: e.target.value })
    }

    onChangeInstructions(e) {
        this.setState({ instructions: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const recipeObject = {
            title: this.state.title,
            description: this.state.description,
            estimateTime: this.state.estimateTime,
            ingredients: this.state.ingredients,
            instructions: this.state.instructions,
        };

        axios.post('/posts/create', recipeObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        //Set states to default once the post has been saved.
        this.setState({
            title: '',
            description: '',
            estimateTime: '',
            ingredients: '',
            instructions: '',
        })
    }


    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> {/*title and cook time*/}
                        <label className="label">Title:</label>
                        <input type="text" value={this.state.title} onChange={this.onChangeTitle} className="titlebox" />
                        <label className="label">Estimated Prep/Cook Time:</label>
                        <div>
                            <select className="dropdown" id="cooktime" form="recipeinput" type="number" name="cooktime" value={this.state.estimateTime} onChange={this.onChangeEstimateTime}>
                                <option value="5-10 Minutes" label="5-10 Minutes"></option>
                                <option value="10-15 Minutes" label="10-15 Minutes"></option>
                                <option value="20-30 Minutes" label="20-30 Minutes"></option>
                                <option value="30-60 Minutes" label="30-60 Minutes"></option>
                                <option value="1+ Hour" label="1+ Hour"></option>
                            </select>
                        </div>
                    </div>

                {/*Description*/}
                    <div className="form-group2">
                        <label className= "label">Description:</label>
                        <textarea value={this.state.description} onChange={this.onChangeDescription} className="longtextbox" />
                    </div>
                    <div className="form-group">
                        
                {/*Ingredients*/}
                    </div>
                    <div className="form-group2">
                        <label className= "label">Ingredients:</label>
                        <textarea value={this.state.ingredients} onChange={this.onChangeIngredients} className="longtextbox" />
                    </div>

                {/*Instructions*/}
                    <div className="form-group2">
                        <label className= "label">Instructions:</label>
                        <textarea value={this.state.instructions} onChange={this.onChangeInstructions} className="longtextbox" />
                    </div>

                {/*Submit*/}
                    <div className="form-group">
                        <input type="submit" value="Create Recipe" className="bttn" />
                    </div>

                </form>
            </div>
            
        )
    }
}