import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UserProfile() {
    const [userData, setUserData] = useState({
        _id: '',
        name: '',
        email: '',
    });
    useEffect(() => {
        axios.get("http://localhost:8080/user/getdata", { withCredentials: true })
            .then((response) => 
            {
                console.log(response.data);
                const {_id, name, email } = response.data;
                setUserData({ _id,name, email });
            })
            .catch((error) => 
            {
                console.error("There was an error!", error);
            });
    }, []);

    return (
        <div>
            <h3>UserId: {userData._id}</h3>
            <h3>Name: {userData.name}</h3>
            <h3>Email: {userData.email}</h3>
        </div>
    );
}

export default UserProfile;
