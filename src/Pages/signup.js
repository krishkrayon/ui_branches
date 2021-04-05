/* ######################   Styling   ########################### */
import './signup.css';


/* ######################  Components ########################### */
import Homeheader from './Components/Homeheader/homeheader';



/* ######################    Links    ########################### */
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import React, {useLayoutEffect,useState} from 'react';
import axios from 'axios';


function Signup() {
    
    let history = useHistory();
    
         useLayoutEffect(() => {
        if(localStorage.getItem("token")!="") 
                                                        
        {
          history.push('/trial6');  
        }
        console.log("Req done");
        console.log(localStorage.getItem("token"));
        
    },[])
    
    
        
    const [state,setState] = useState({
      
          email :"",
          password :"",
          password2 :""
      
            
    })
    
    const handleChange = (e) => {
        
        const {id , value} = e.target;   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
        
    }
    
    
    
    const handleSubmit = (e) => {
        e.preventDefault();       
        sendDetailsToServer();
        console.log("signing up");
        console.log(state.password.length);          
    }
    
    
    
    
    
        const sendDetailsToServer = () => {
         
        {/* console.log(state);*/}
         
    if(state.email.length && state.password.length){    
    console.log("sending")
        //alert("Logged in");
        
    
    const payload={
         //   "email":state.email,
         //   "password":state.password,
           "email":state.email,
           "password":state.password,
           "password2":state.password2,
            }
      
     {/*https://reqres.in/api/login*/} 
     {/*https://cors-anywhere.herokuapp.com/https://themeshapp.herokuapp.com/authentication/login*/}
         {/*https://cors-anywhere.herokuapp.com/https://themeshapp.herokuapp.com/authentication/login*/}
        
        {/*https://api.allorigins.win/get?url=https://themeshapp.herokuapp.com/authentication/login*/}   /*working*/
        
        axios.post("https://themeshapp.herokuapp.com/authentication/register", payload).then((response) => {
 
        console.log("done");
         console.log(response);
          switch(response.status)
              {
                case 200:
      
            console.log(response.data);
                      
            {/*localStorage.setItem("token",response.data.token);
            console.log(localStorage.getItem("token"));  */}
            history.push('/login')
            break;
      
          default:
              console.log("nope");
                      console.log("nope");
             {/* alert("User Doesnt Exist");*/}
            break;
              }
      },
                                                             
          (error) => {
  console.log(error);
          alert("User already exists");
        }                                                   
                                                             
                                                             
    );
     
       
        
                    
    }
      else{
          console.log(state.email.length)
           console.log("Error!");
          alert("Enter Valid password!");
           
      }
  }
    
    
    
    
    
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
        </div>br
      
      
      
      <div className="container-fluid">
      <div className="row">
      <div className="col"/>
      <div className="col">
      
              
        
       <form className="form" onSubmit = {handleSubmit}>
      
                <h3>Sign Up</h3>
      
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control" placeholder="Enter email" id="email" autoComplete="on" onChange={handleChange} />
                </div>
      
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" id="password" autoComplete="on" onChange={handleChange}/>
                </div>
      
                <div className="form-group">
                    <label>Verify Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" id="password2" autoComplete="on" onChange={handleChange}/>
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


