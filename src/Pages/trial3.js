import axios from 'axios';

import { useHistory } from "react-router-dom";
import React, {useLayoutEffect,useState,useEffect} from 'react';


function App2(){
    
 const [state, setState] = useState(0);
 
 
 function get()
    {
        setState(state+1)
  }
    
 
     
  useLayoutEffect(() => {
      
    },[])   
  
    return (
    <div>
        
       
<button type="submit"  className="btn btn-primary" onClick={get}>Submit</button>
            
            
    <h1>{state}</h1>
            
    </div>
  );
    
    
}

export default App2;