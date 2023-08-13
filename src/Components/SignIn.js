import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import './My_Style.css'

export default function Signup(props) {

    const submit_form = (e) => {
        e.preventDefault();
        if (document.getElementById('email').value === '' || document.getElementById('password').value === '') {
            props.alert('All Fields are Required!', 'danger');
        }
        else if (!document.getElementById('email').value.match(/\S+@\S+\.\S+/)) {
            props.alert('Email is not valid!', 'danger');
        }
        else {
            props.alert('SignIn Successfully!', 'success');
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
        }
    }
    return (
        <div className="container my-4 bg-dark text-light" style={{ border: '4px solid white', padding: '50px 20px', borderRadius: '35px' }}>
            <form className="row g-3 ">
                <FontAwesomeIcon className='text-light close-icon-in' icon={faXmarkCircle}
                    onClick={props.closein} style={{ fontSize: '40px', cursor: 'pointer' }} />

                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Username</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                        <input type="email" className="form-control" id="email" Required />
                    </div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" Required />
                </div>

                <div className="col-12 mt-5">
                    <button className="btn btn-success" onClick={submit_form} type="submit">Sign In</button>
                </div>
            </form>
        </div>
    )
}
