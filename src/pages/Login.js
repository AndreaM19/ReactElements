import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Login = ({ setToken }) => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    async function loginUser(credentials) {
        return fetch('http://localhost:8089/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <div className="row">
            <div className="col-3">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>

                    <div className=" mb-3">
                        <label htmlFor="floatingInput">Email address</label>
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e => setUserName(e.target.value)} />
                    </div>
                    <div className=" mb-3">
                        <label htmlFor="floatingPassword">Password</label>
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    </div>

                    <button className="w-100 btn btn-sm btn-info" type="submit">Sign in</button>
                </form>
            </div>
        </div>
    );
};

export default Login;

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}