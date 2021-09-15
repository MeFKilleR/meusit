import React from "react";
import "../fostyls/Button.css";

function Button(props:{Name:string}){ 
    return(
        <>
        <button>{props.Name}</button>
        </>
    );
}

export default Button;