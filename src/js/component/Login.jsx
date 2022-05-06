import React, { useState, useContext } from 'react';
import { Context } from "../store/appContext.js";
import { Link } from 'react-router-dom';

const Login = () => {
    const { actions } = useContext(Context)

    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    return (
        <div className='form'>

            <p className='text-form'>Email</p>
            <input type="text"
                name="email"
                placeholder='Email'
                onChange={(event) => setLogin({ ...login, [event.target.name]: event.target.value })} />

            <p className='text-form'>Password</p>
            <input type="password"
                name='password'
                placeholder='Password'
                onChange={(event) => setLogin({ ...login, [event.target.name]: event.target.value })} />
            <br />
            <button type='button'
                className="btn btn-primary submit"
                onClick={() => actions.handleLogin(login)}>
                Login
            </button>

        </div>
    );
};

export default Login;