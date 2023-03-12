import React from 'react';
import './CSS styling/signin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Image from './Pictures/Illustrations/form-bg.png';
import {Link} from 'react-router-dom';
function Signin() {
    return (
        <div className='form-container'>
            <div className='image-section'>
                <img src={Image} />
            </div>
            <div className='form-section'>
                <form>
                    <h1>Log In to Account</h1>
                    <div className='mb3 input'>
                        <label for="semail" class="form-label">Email</label>
                        <input type="email" class="form-control" id="semail" aria-describedby="emailHelp"></input>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className='mb3 input'>
                        <label for="spassword" class="form-label">Password</label>
                        <input type="password" class="form-control" id="spassword" aria-describedby="pwdHelp"></input>
                        <div id="pwdHelp" class="form-text">Strong Pasword is a combination of letter,numbers and special characters like _.& ,*</div>
                    </div>
                    <div className='mb5 mt-3 input'>
                        <button type="submit" class="btn btn-outline-primary" style={{ marginLeft: "0" }}>Sign In</button>
                    </div>
                </form>
                <div className='signup_section mt-4'>
                    <h6>Don't have an account?
                        <Link to="/signup" className='link-primary'>
                            Sign Up
                        </Link>
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default Signin;