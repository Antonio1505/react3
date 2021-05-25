import React from 'react';
import { useHistory } from 'react-router';
import '../css/header.css';
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import {FiMenu } from "react-icons/fi";
import navira from "../img/logo/navira.jpg";


function Header() {

    const history = useHistory();

    return(
        <div className="headerBar">
      
        <nav className="menu">
          
            <ul> <img class="logo" src={navira} />
            
                <li><FiMenu /></li>
                <li onClick = {() => {history.push('/');}}>Accueil</li>
                <li onClick = {() => {history.push('/bonDE');}}>A propos</li>
                <li onClick = {() => {history.push('/profile');}}>SERVICE</li>
                <li onClick = {() => {history.push('/profile');}}>Connexion</li>
                 
            </ul>
        </nav>

        </div>
    )
}

export default Header;