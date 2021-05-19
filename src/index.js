import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route,   } from 'react-router-dom';

import App from './App';
import Header from '../src/component/header';
import Footer from '../src/component/footer';

function Index(){
  
  return(
 
      <div className="index">
        <Header />
      
        <Route exact path="/" component={App}/>
        {/* <Route exact path="/BonDE" component={BonDE}/>
        <Route exact path="/Profile" component = {Profile} /> */}

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

