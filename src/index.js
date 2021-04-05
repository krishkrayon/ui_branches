import React from 'react';
import ReactDOM from 'react-dom';

/* ######################   Styling   ########################### */
import './index.css';

/* ######################  Components ########################### */
import App from './App';
import Home from './Pages/home';
import Login from './Pages/login';
import Signup from './Pages/signup';
import Userhome from './Pages/userhome';
import App5 from './Pages/trial';
import App1 from './Pages/trial2';
import App2 from './Pages/trial3';
import App3 from './Pages/trial4';

import App4 from './Pages/trial5';
import App6 from './Pages/trial6';
/* ######################  WebVitals  ########################### */
import reportWebVitals from './reportWebVitals';


/* ######################    Links    ########################### */
import { Router,Route, Switch } from "react-router";
import {HashRouter,BrowserRouter} from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
   
    
    <BrowserRouter>
    <Route exact path="/" component={Home} />    
    <Route path="/home" component={Home} />  
    <Route path="/login" component={Login} />
    <Route path="/userhome" component={Userhome} />
    
    <Route path="/signup" component={Signup} />
    
    <Route path="/trial" component={App5} />
    <Route path="/trial2" component={App1} />
      <Route path="/trial3" component={App2} />
      <Route path="/trial4" component={App3} />
      <Route path="/trial5" component={App4} />
      <Route path="/trial6" component={App6} />
    </BrowserRouter>
        
  </React.StrictMode>,
  document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
