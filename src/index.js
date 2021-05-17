import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

import {App}  from './App';
import {Profile}  from './Profile';
import Header from '../src/component/header';
import Footer from '../src/component/footer';
import BonDE from './bonDE';
import Accueil from './Accueil';


function Index(){
  
  return(
 
      <div className="index">
        <Header />
      
        <Route exact path="/" component={Accueil}/>
        <Route exact path="/BonDE" component={BonDE}/>
        <Route exact path="/Profile" component = {Profile} />

        <Footer />
      </div>        
  );
}

ReactDOM.render(
<BrowserRouter>
    <Index />
</BrowserRouter>,
 
document.getElementById('root')
);

