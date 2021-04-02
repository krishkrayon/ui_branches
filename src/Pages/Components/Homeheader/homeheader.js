/* ######################    Links    ########################### */
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/js/src/collapse.js";
import "bootstrap/js/src/dropdown.js";

import { Link } from 'react-router-dom';


/* ######################   Styling   ########################### */ 
import './homeheader.css';




function Homeheader() {
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
              <Link to ="/" className="ml nav-link" >Home</Link>
              <Link to ="#" className="ml-sm-5 nav-link" >Features</Link>
              <a className="ml-sm-5 nav-link" href="#">Pricing</a>
          </ul>
      
          <ul className="navbar-nav ml-auto">        
              <Link to ="/signup" className="pr-lg-3 nav-link" >Sign up</Link>  
              <Link to ="/login" className="pr-lg-3 nav-link" >Login</Link>    
          </ul>
      
      </div>
      
      {/* ############################## */} 
      
      </nav>
      
      </div>
      
  );
}

export default Homeheader;


