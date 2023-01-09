import React from 'react';
import { Link } from "react-router-dom";

function Footer2(){
    return(
    <div className='footer2maindiv'>
        <span className='footer2span1'>
        <div className='footer2div1'>Indian Institute of Technology</div>
        <div className='footer2div2'>Guwahati</div>
        </span> 
        <i className='footer2i' class="fa-solid fa-right-from-bracket"></i> 
        <span className='footer2span2'><Link className='footer2a' to="/" >LogOut</Link></span>
    </div>
)
};
export default Footer2;