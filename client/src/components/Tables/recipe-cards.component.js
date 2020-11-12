import React, { Component } from 'react';


class RecipeCards extends Component {
    render() {
        return (
            <div class="recipe-card">

            <aside>

                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/oatmeal.jpg" alt="Chai Oatmeal" />

                <a href={"/Dashboard/" + this.props.obj._id} class="button"><span class="icon icon-play"></span></a>

            </aside>

            <article>

                <h2>{this.props.obj.title}</h2>

                <ul>
                    <li><span class="icon icon-users"></span><span>1</span></li>
                    <li><span class="icon icon-clock"></span><span>{this.props.obj.estimateTime}</span></li>
                </ul>

                <p><b>Description: </b>{this.props.obj.description}</p>

                

            </article>

            </div>
        );
    }
}

export default RecipeCards;
