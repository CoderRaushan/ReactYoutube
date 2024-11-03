import React, { useContext } from 'react';
import { UserContext } from '../Stores/UserProfile';
function UserProfile() 
{
    const { userData, setUserData, isAuthenticated, setIsAuthenticated } = useContext(UserContext);
    if (!isAuthenticated) {
        // return <p>Please log in to view your profile.</p>;
      }
    return (
        <div>
            <h3>UserId: {userData._id || 'N/A'}</h3>
            <h3>Name: {userData.name || 'N/A'}</h3>
            <h3>Email: {userData.email || 'N/A'}</h3>
        </div>
    );
}

export default UserProfile;
