import React, { useState } from 'react';
import axios from 'axios';
import './create-post.component.css'
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from "react-router-dom";



function CreatePost() {

    const { user } = useAuth0();
    const [postInfo, setPostInfo] = useState([]);
    const [successMsg, setSuccessMsg] = useState(false);
    const [failMsg, setFailMsg] = useState(false);
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:5000/posts/create', postInfo)
            .then((res) => {
                console.log(res.data)
                setSuccessMsg(true)
                setFailMsg(false)
               // setTimeout( () => history.push(''), 3000)
            }).catch((error) => {
                console.log(error)
                setFailMsg(true)
                setSuccessMsg(false)
            });
        };

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

export default CreatePost
