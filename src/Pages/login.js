/* ######################   Styling   ########################### */
import './login.css';


/* ######################  Components ########################### */
import Homeheader from './Components/Homeheader/homeheader';



/* ######################    Links    ########################### */
import 'bootstrap/dist/css/bootstrap.css';
import { useHistory } from "react-router-dom";
import React, {useLayoutEffect,useState} from 'react';
import axios from 'axios';

/* ######################    Comments    ########################### */
/* localStorage.getItem("token")!= "undefined"  --- undefined is the real one using ! to check condition */


function Login() {


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
          password :""
      
            
    })
    
   
    
    

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
            }
      
     {/*https://reqres.in/api/login*/} 
     {/*https://cors-anywhere.herokuapp.com/https://themeshapp.herokuapp.com/authentication/login*/}
         {/*https://cors-anywhere.herokuapp.com/https://themeshapp.herokuapp.com/authentication/login*/}
        
        {/*https://api.allorigins.win/get?url=https://themeshapp.herokuapp.com/authentication/login*/}   /*working*/
        
        axios.post("https://themeshapp.herokuapp.com/authentication/login", payload).then((response) => {
 
        console.log("done");
         console.log(response);
          switch(response.status)
              {
                case 200:
      
            console.log(response.data);
                      console.log(response.data.token);
            localStorage.setItem("token",response.data.token);
            console.log(localStorage.getItem("token"));
            history.push('/trial6')
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
          alert("User Doesnt Exist");
        }                                                   
                                                             
                                                             
    );
     
       
        
                    
    }
      else{
          console.log(state.email.length)
           console.log("Error!");
          alert("Enter Valid password!");
           
      }
  }
    
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
        console.log("logging");
        console.log(state.password.length);
         
        
    }
    
    
  return (   
      
      <div className="login">
      
      
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
      
              
        
       <form className="form" onSubmit = {handleSubmit}>
      
                <h3>Sign In</h3>
      
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" autoComplete="on" onChange={handleChange} />
                </div>
      
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" autoComplete="on" onChange={handleChange} />
                </div>
      
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
      
                <button type="submit" className="btn btn-primary" >Submit</button>
      
                <p className="forgot-password text-right" id="fp">
                    Forgot <a href="#">password?</a>
                </p>
      
        </form>
       
       
      
      </div>
    
      <div className="col"/>
   
      </div>


</div>
      </div>
      
    
  );
}

export default Login;


