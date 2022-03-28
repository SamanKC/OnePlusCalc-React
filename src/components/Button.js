import React from "react";
import {MdOutlineBackspace} from 'react-icons/md';


const Button = (props)=> {
    return <div className={props.name} onClick={props.click}>{ props.button === '<MdOutlineBackspace />' ? <span><MdOutlineBackspace /></span> : (props.button)} </div>
}

export default Button;
