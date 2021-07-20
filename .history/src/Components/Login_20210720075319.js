import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import { useHistory } from "react-router-dom";

const Login = () => {
    const {loginWithRedirect, user} = useAuth0();
    const history = useHistory();
    if(user !== false){
    let path = '/Profile/'; 
    history.push(path);
    }

    return (
        <button onClick={() =>loginWithRedirect()}>
            Login
        </button>
    )
}

export default Login
