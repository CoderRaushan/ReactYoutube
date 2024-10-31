import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../Stores/UserProfile';

function UserProfile() {
    // const [userData, setUserData] = useState({
    //     _id: '',
    //     name: '',
    //     email: '',
    // });
    // useEffect(() => {
        // axios.get("http://localhost:8080/user/getdata", { withCredentials: true })
        //     .then((response) => 
        //     {
        //         console.log(response.data);
        //         const {_id, name, email } = response.data;
        //         setUserData({ _id,name, email });
        //     })
        //     .catch((error) => 
        //     {
        //         console.error("There was an error!", error);
        //     });
    // }, []);

    const { userData } = useContext(UserContext);
   
    return (
        <div>
            <h3>UserId: {userData._id || 'N/A'}</h3>
            <h3>Name: {userData.name || 'N/A'}</h3>
            <h3>Email: {userData.email || 'N/A'}</h3>
        </div>
    );
}

export default UserProfile;
