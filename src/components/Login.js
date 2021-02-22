import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Login = () => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')




    const setdata = () => {
        if(name=="" || password==""){
           alert("username and password is mandaroty") 
        }
        else
        {
            localStorage.setItem('name', JSON.stringify(name))
            localStorage.setItem('password', JSON.stringify(password))
            history.push('/')
        }
        
    }


    return (
        
        <center>
        <Header />
            <br /><br />
            <form>
                <input type="text" placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)} />
                <br /><br />
                <input type="password" placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br /><br />
                <button onClick={setdata} className="btn btn-success">Login</button>
            </form>
        </center>

    )

}
export default Login