import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import DataTable from '../Tables/recipe-cards.component';

function DisplayFavorites() {

    const { user } = useAuth0();
    const [postCollection, setPostCollection] = useState([]);
    const [doneLoading, setDoneLoading] = useState(false);

    useEffect(() => {
        axios.get('/users/' + user.email)
            .then((res) => {
                if (res.data != null) {
                    for (var index = 0; index < res.data.favorites.length; index++) {
                        axios.get('/posts/' + res.data.favorites[index])
                            .then((res2) => {
                                setPostCollection(postCollection => [...postCollection, res2.data])
                            })
                            .catch((error2) => {
                                console.log(error2)
                            })
                    }
                    setDoneLoading(true)
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }, [user.email]);


    const recipeCards = () => {
        return postCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }


    return (
        <div>

            <div className="wrapper-users">
                <div className="container">
                    {doneLoading &&
                        recipeCards()
                    }
                </div>
            </div>
        </div>
    )
}



export default DisplayFavorites;