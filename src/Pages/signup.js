/* ######################   Styling   ########################### */
import './signup.css';


/* ######################  Components ########################### */
import Homeheader from './Components/Homeheader/homeheader';



/* ######################    Links    ########################### */
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';



function Signup() {
  return (   
      
      <div className="signup">
      
      
      <div className="row">
            <div className="col-1" id="left_column"/>
            <div className="col"> 
                <div className="row-1" id="meshtoprow">
                    <div className="col"/>
                    <div className="col" id="meshtop">
                    <h1 className="mesh2">MESH</h1>
                    </div>
                    <div className="col" />

                </div>
     
                <div className="row-1">
                    <Homeheader/>
                </div> 
      
            </div>
      
            <div className="col-1  ml-auto" id="right_column"/>
        </div>
      
      
      
      <div className="container-fluid">
      <div className="row">
      <div className="col"/>
      <div className="col">
      
              
        
       <form className="form">
      
                <h3>Sign Up</h3>
      
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
      
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
      
                <div className="form-group">
                    <label>Verify Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
      
                
      
                <button type="submit" className="btn btn-primary" >Submit</button>
      
                <p className="forgot-password text-right" id="fp">
                    <Link to ="/login" className="pr-lg-3 nav-link" >Login Instead</Link>
                </p>
      
        </form>
       
       
      
      </div>
    
      <div className="col"/>
   
      </div>


</div>
      </div>
      
    
  );
}

export default Signup;


