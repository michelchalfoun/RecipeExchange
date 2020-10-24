import React from 'react';
import LogoutButton from '../../components/Auth/LogoutButton';
import { useAuth0} from "@auth0/auth0-react";

function Profile() {
    return (
        <div >
            <h1 >
                    Profile Page
            </h1>
            <LogoutButton></LogoutButton>
        </div>
    );
}

export default Profile;
