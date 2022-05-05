import React, { useState, useContext } from 'react';
import { Context } from "./../store/appContext"
import {Link} from "react-router-dom"

const Register = () => {
    const { actions } = useContext(Context);

    const [register, setRegister] = useState({
        email: "",
        password: ""
    });

    return (
        <div className='form'>

            <p className='text-form'>Email</p>
            <input type="text"
                name="email"
                placeholder='email'
                onChange={(event) => setRegister({ ...register, [event.target.name]: event.target.value })} />

            <p className='text-form'>Password</p>
            <input type="password"
                name='password'
                placeholder='password'
                onChange={(event) => setRegister({ ...register, [event.target.name]: event.target.value })} />
            <br />
            <button type='button'
                className="btn btn-primary submit"
                id="liveToastBtn"
                onClick={() => actions.handleRegister(register)}>
                <Link to='/login'>Register</Link>
            </button>

        </div>
    );
};

export default Register;