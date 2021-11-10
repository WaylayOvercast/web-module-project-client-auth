import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import axiosWithAuth from "./auth/axiosWithAuth";

const Logout = (props)=> {
    const {push} = useHistory();
    
    useEffect(()=> {
        const token = localStorage.getItem("token");

        axiosWithAuth()
            .post('/logout')
            .then(resp => {
                localStorage.removeItem('token');
                push('/login');
            });
    }, []);
    
    return(<div></div>);
}

export default Logout;