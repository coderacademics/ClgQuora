import React from "react";
import { ReactDOM } from "react";
import './CSS styling/homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import pic from './Pictures/LinkedIn Profile Pics/saikat_mohanta.jfif';

function HomepageFooter(props)
{
    return(
        <div className="footer">
            <li className="footer_items" style={{paddingRight: "1.5em"}}>
                <img src={pic} className="profile_pic"></img>
            </li>
            <li className="footer_items">
               <b>{props.name}</b> <br />{props.post}</li>
            <li className="footer_items icon"><LinkedInIcon /></li>
        </div>
    );
}
export default HomepageFooter;