import React from 'react';
import { useHistory } from 'react-router';
import '../css/header.css';

function Header() {

    const history = useHistory();

    return(
        <div className="headerBar">
        <h onClick = {() => {history.push('/');}}>Accueil</h>
        <h onClick = {() => {history.push('/bonDE');}}>Blog</h>
        <h onClick = {() => {history.push('/profile');}}>Docs</h>
        <h onClick = {() => {history.push('/profile');}}>Connexion</h>
        <h onClick = {() => {history.push('/profile');}}>Mouvement d'un stock</h>


        </div>
    )
}

export default Header;