import React from 'react';
import { useHistory } from 'react-router';
import '../css/header.css';

function Header() {

    const history = useHistory();

    return(
        <div className="headerBar">
      
        <nav className="menu">
            <ul>
                <li onClick = {() => {history.push('/');}}>Accueil</li>
                <li onClick = {() => {history.push('/bonDE');}}>Blog</li>
                <li onClick = {() => {history.push('/profile');}}>Docs</li>
                <li onClick = {() => {history.push('/profile');}}>Connexion</li>
                <li onClick = {() => {history.push('/profile');}}>Mouvement</li>
                     
            </ul>
        </nav>

        </div>
    )
}

export default Header;