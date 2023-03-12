import React, { useState } from 'react';
import './CSS styling/signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Image from './Pictures/Illustrations/form-bg.png';
import { Link } from 'react-router-dom';
function Signup() {
    const [userData, setUserData] = useState({
        sname: "",
        semail: "",
        spassword: "",
        scpassword: ""
    });
    let field, fieldValue;
    const handleChange = (e) => {
        field = e.target.name;
        console.log(field);
        fieldValue = e.target.value;
        setUserData({ ...userData, [field]: fieldValue });
    }
    const handleSubmit = (e) => {
        alert("Form has been submitted successfully!!!");
    }
    return (
        <div className='form-container'>
            <div className='image-section'>
                <img src={Image} />
            </div>
            <div className='form-section'>
                <form onSubmit={handleSubmit}>
                    <h1>Create Your Account</h1>
                    <div className='mb3 input'>
                        <label for="sname" class="form-label">Username</label>
                        <input name='sname' type="text" class="form-control" id="snmae" onChange={handleChange} value={userData.name} required></input>
                    </div>
                    <div className='mb3 input'>
                        <label for="semail" class="form-label">Email</label>
                        <input name='semail' type="email" class="form-control" id="semail" aria-describedby="emailHelp" onChange={handleChange} value={userData.email} required></input>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className='mb3 input'>
                        <label for="spassword" class="form-label">Password</label>
                        <input name='spassword' type="password" class="form-control" id="spassword" aria-describedby="pwdHelp" onChange={handleChange} value={userData.password} required></input>
                        <div id="pwdHelp" class="form-text">Strong Pasword is a combination of letter,numbers and special characters like _.& ,*</div>
                    </div>
                    <div className='mb3 input'>
                        <label for="scpassword" class="form-label">Confirm Password</label>
                        <input name='scpassword' type="text" class="form-control" id="scpassword" aria-describedby="pwdHelp" onChange={handleChange} value={userData.cpassword} required></input>
                    </div>
                    <div className='mb5 mt-3 input'>
                        <button type="submit" class="btn btn-outline-primary" style={{ marginLeft: "0" }}>Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;