import axios from 'axios';

import { useHistory } from "react-router-dom";
import React, {useLayoutEffect,useState,useEffect} from 'react';


function App3(){
    
 const [state, setState] = useState({
 
     id:"",
     name:""
     
 });
 
 
 function get()
    {
        setState(
            {id:"a",name:"b"}
        )
  }
    
 
     
  useLayoutEffect(() => {
      
    },[])   
  
    return (
    <div>
        
       
<button type="submit"  className="btn btn-primary" onClick={get}>Submit</button>
            
            
    <h1>{state.id}</h1>
            
    </div>
  );
    
    
}

export default App3;