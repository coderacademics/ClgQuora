import { React, ReactDOM } from "react";
import './CSS styling/homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './Pictures/holi_phc.jpg';
import img2 from './Pictures/coding_phc.jpg';
import img3 from './Pictures/seminar_phc.jpg';
import img4 from './Pictures/graduation_phc.jpg';
import Navbar from "./Navbar";
import VerNav from "./ver_nav";
function Phases() {
    return (
        <div className="slide2" id="phases">
            <div class="container text-center" style={{marginTop:"5em"}}>
                <div class="row m-3">
                    <div class="col">
                        <img  src={img1} height={"100px"} width={"200px"} className="border border-primary border-5"></img>
                    </div>
                    <div class="col">
                        <img  src={img2}  height={"10vh"} width={"15vw"} className="border border-primary border-5"></img>
                    </div>
                </div>
                <h1 style={{ textAlign: "center",fontSize:"3em", display: "block", paddingTop: "1em", paddingBottom: "1em" ,fontWeight:700}}>Phases of College Life</h1>
                <div class="row m-2">
                    <div class="col">
                        <img src={img3}  height={"5vh"} width={"15vw"} className="border border-primary border-5"></img>
                    </div>
                    <div class="col">
                        <img   src={img4}  height={"10vh"} width={"15vw"}  className="border border-primary border-5"></img>
                    </div>
                    <div class="col">
                        <img src={img4}  height={"10vh"} width={"15vw"} className="border border-primary border-5"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Phases;