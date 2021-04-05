/* ######################   Styling   ########################### */
import './userhome.css';


/* ######################  Components ########################### */
import Userheader from './Components/Userheader/userheader';


/* ######################    Images   ########################### */



/* ######################    Links    ########################### */
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import React, {useLayoutEffect,useState} from 'react';

function Userhome() {
    
        const [state,setCount]= useState({
        data:[{task:"", description:""},{task:"",description:""}]
        
    });
 
    
    function pr(){
    
    console.log("hi");
    
    return (
    <div>
        <div><h4>hi</h4> 
        console.log("hi");
        </div>
    </div>
        )
}
    
    
    
    
    
    
     let history = useHistory();
    function trial(){
        console.log("fn triggered")
        
        
    axios.get("https://themeshapp.herokuapp.com/main/show/",{
  headers: {'Authorization': "Token " + localStorage.getItem("token")}
  }).then((response) => {
 
        console.log("done");
         console.log(response);
          switch(response.status)
              {
                case 200:
      
            console.log(response.data);
                      
            {/*localStorage.setItem("token",response.data.token);
            console.log(localStorage.getItem("token"));  */}
            history.push('/userhome')
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
    
    
    
  return (      
    <div className="userhome">
      <div className="row-1">
      <Userheader/>
      </div>
      <div className="row">
        <div className="col" id="group">
       <button type="submit"  className="btn btn-primary" onClick={pr}>Submit</button>
                  <h1>Groups</h1>
                
       <div></div>
                
        </div>
      
        <div className="col" id="tasks">
      <button type="submit" onClick={trial} className="btn btn-primary" >Submit</button>
            <h1>Tasks</h1>
      
      
      
      
        </div>
      </div>
      
    </div>
  );
}

export default Userhome;


