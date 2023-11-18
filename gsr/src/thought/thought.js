import React from "react";
import './thought.css'
import IMAGE from './photo/10.jpg';
import Life from "../life/life";
export default function Thought(){
    return(
        <div className="thought">
            <p className="quote">Quotes that help you find motivation to stand 
                up and fight again after your last loss.</p>
                <img className="Timg" src={IMAGE} ALT=""/>
                <Life/>
                
        </div>
    )
}