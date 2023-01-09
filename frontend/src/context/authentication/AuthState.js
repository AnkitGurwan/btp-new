import { useState } from "react";
import AuthContext from "./AuthContext";


const AuthState = (props) => {

    const url = "http://localhost:5000"


    const registerUser = async (name, email) => {
        const response = await fetch(`${url}/user/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email })
        });
        
        const json = await response.json();
        console.log(response.status);
        return response.status
        // setUser(user.concat(json));
    }

    const loginUser = async (email,password) => {
        const response = await fetch(`${url}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });
        
        const json = await response.json();
        localStorage.setItem('token', json.token);
        return response.status;
        // setUser(user.concat(json));
    }

    const confirmEmail = async (password,token) => {
        const response = await fetch(`${url}/user/confirm-email/${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password })
        });
        
        const json = await response.json();
        console.log(json);
        
        // setUser(user.concat(json));
    }

    const resetPassword = async (email) => {
        const response = await fetch(`${url}/user/resetpassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        });
        
        const json = await response.json();
        console.log(json)
       
        // setUser(user.concat(json));
    }
    const resetpasswordconfirmEmail = async (email,password,token) => {
        const response = await fetch(`${url}/user/resettingpassword/${email}/${token}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password })
        });
        
        const json = await response.json();
        console.log(json);
        // setUser(user.concat(json));
    }

    const loginStudent = async (email, password)=>{
        const response = await fetch(`http://localhost:5000/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        return (response.status);
    }
    

    


    return (<AuthContext.Provider value={{registerUser,loginUser,confirmEmail,resetPassword,resetpasswordconfirmEmail,loginStudent}}>
        {props.children}
    </AuthContext.Provider>
    )
}

export default AuthState;