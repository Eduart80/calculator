import React from "react";
import "./rowscreen.css"

const Roescreen = (props) => {
    return (
        <div>
           <input type="text" 
            readOnly 
            className="screenUp" 
            style={props.textSize}
            value={props.answer}>
            </input>
            <input type="text" 
            readOnly 
            className="screenDown" 
            style={props.textSize}
            value={props.user}>
            </input>
        </div>
    )
}
export default Roescreen
