/* ######################    Links    ########################### */
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/js/src/collapse.js";
import "bootstrap/js/src/dropdown.js";

import { Link } from 'react-router-dom';
import React, {useLayoutEffect,useState} from 'react';
import { useHistory } from "react-router-dom";

/* ######################   Styling   ########################### */ 
import './userheader.css';




function Userheader() {
    
        
     let history = useHistory();
    
    function reset(){
        console.log("hi");
        localStorage.setItem('token',"");
        history.push('/home');
    }

    
  return (
      <div>
      
      <nav className="navbar navbar-expand-sm   navbar-light ">
      
       {/* ############################## */} 
      
      
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      
      <span className="navbar-toggler-icon"></span>
      
      </button>
      
      
      {/* ############################## */} 
      
      
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      
          <ul className="navbar-nav">
              <Link to ="/userhome" className="ml nav-link" >Home</Link>

             
          </ul>
      
          <ul className="navbar-nav ml-auto">        
            
               <button className="pr-lg-3 nav-link" onClick={reset}>Logout</button>  
          </ul>
      
      </div>
      
      {/* ############################## */} 
      
      </nav>
      
      </div>
      
  );
}

export default Userheader;


