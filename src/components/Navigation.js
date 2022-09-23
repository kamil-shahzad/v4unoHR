import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css'
function Navigation({}) {
    const [login , setLogin]= useState(false)
    
    return (
        <>
                <div className='navigationchange'>
                <ul className='mr-2'>
                    <li>
                        <a href="#">
                            Home </a>
                    </li>
                    <li>
                        <Link to="/service">Features</Link>
                    </li>
                    <li>
                        <a href="#">
                            Pricings
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            FAQ
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Blog
                        </a>
                    </li>
                    <li>
                        <Link to="/contactss">Contact</Link>
                    </li>
                    <li>
                    <a className="login-btn" href="#"onClick={()=> setLogin((value)=>!value)} >
                                Login   
                                </a> 
                                {login &&
                                <ul className="sub-menu">
                            <li>
                                <a href="https://promising-saga-232017.firebaseapp.com/employeer/login">Employer</a>
                            </li>
                            <li>
                                <a href= "https://promising-saga-232017.firebaseapp.com/employee/login">Employee</a>
                            </li>
                        </ul>}
                    </li>
                    
                </ul>
                </div>
        </>
    );
}

export default Navigation;
