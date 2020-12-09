import React, { Component } from 'react';
import './recipe-cards.component.css'

class RecipeCards extends Component {
    render() {
        return (
            <div class= "recipe-card">
            
            <aside>
                
                <img class= "template" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/oatmeal.jpg" alt="Chai Oatmeal" />
                
            </aside>

            <div class = "card-text">
                
                <div class = "info">
                    <h2 class = "recipe_title">{this.props.obj.title}</h2>
                    <a href={'/Profile/' + this.props.obj.author}>
                        <h3 class = "form-group5">By: {this.props.obj.authorUsername}</h3>
                    </a>
                    <h6 class = "form-group5">Cook Time: {this.props.obj.estimateTime}</h6>
                </div>

                <a href={"/Dashboard/" + this.props.obj._id} class="bttn2">See this recipe!</a>

            </div>

            </div>
        );
    }
}

export default RecipeCards;
