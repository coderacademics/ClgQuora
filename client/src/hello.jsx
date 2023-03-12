import React from "react";
import './CSS styling/homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import VerNav from "./ver_nav";

function Hello()
{
    return(
        <div className="slide1" id="hello">
                <div className="Hello">
                    Hello
                </div>
                <p className="message">
                    Welcome to the utlimate guidebook to hack SCC.The guidebook helps you multiple strategies<br />
                    that other student use, their experiences and stories, tools you can use to help you along the way and much more!!
                </p>
                <button type="button" className="btn btn-outline-primary" >Explore {">"}</button>
            </div>
    );
}
export default Hello;