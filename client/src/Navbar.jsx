import React from "react";
import ExploreIcon from '@mui/icons-material/Explore';
import FileUpload from '@mui/icons-material/FileUpload';
import LocalMall from '@mui/icons-material/LocalMall';
import LoginIcon from '@mui/icons-material/Login';
import {Link} from 'react-router-dom';

function Navbar()
{
    return(
        <div className="nav" style={{ position: "fixed", top: 0 }} >
        <div className="navlinks" style={{ listStyle: "none", display: "flex" }}>
            <li style={{ display: "flex" }}>
                <Link to="/" className="link">
                    <ExploreIcon />Explore
                </Link>
            </li>
            <li style={{ display: "flex" }}>
                <Link to="/contribute" className="link">
                    <FileUpload />Contribute
                </Link>
            </li>
            <li style={{ display: "flex" }}>
                <Link to="/supplies" className="link">
                    <LocalMall />Supplies
                </Link>
            </li>
            <li style={{ display: "flex"}}>
                <Link to="/signin" className="link">
                    <LoginIcon /> Sign&nbsp;in
                </Link>
            </li>
        </div>
    </div>
    );
}
export default Navbar;