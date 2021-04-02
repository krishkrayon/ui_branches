import React from 'react';
import ReactDOM from 'react-dom';

/* ######################   Styling   ########################### */
import './index.css';

/* ######################  Components ########################### */
import App from './App';
import Home from './Pages/home';
import Login from './Pages/login';
import Signup from './Pages/signup';

/* ######################  WebVitals  ########################### */
import reportWebVitals from './reportWebVitals';


/* ######################    Links    ########################### */
import { Router,Route, Switch } from "react-router";
import {HashRouter,BrowserRouter} from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
   
    
    <BrowserRouter>
    <Route exact path="/" component={Home} />    
   
    <Route path="/login" component={Login} />
    
    <Route path="/signup" component={Signup} />
    </BrowserRouter>
        
  </React.StrictMode>,
  document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
