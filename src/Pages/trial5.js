import axios from 'axios';

import { useHistory } from "react-router-dom";
import React, {useLayoutEffect,useState,useEffect} from 'react';


function App4(){
    
 const [state, setState] = useState({
 
   todos:[],
     
 });
    
    const a = [1,2,3]
 
 
 function get(t)
    {
      
        return t;
  }
    
function req(){
    
    axios.get("https://themeshapp.herokuapp.com/main/show/",{
  headers: {'Authorization': "Token " + localStorage.getItem("token")}
  }).then((response) => {
     setState({todos: response.data});
        console.log(state); 
        
        
      
    })
    .catch(error => console.log(error))
                                                             
                                                             
    
}
 
     
  useLayoutEffect(() => {
      
      req()
      
    },[])   
  
    return (
    <div>
        
       
<button type="submit"  className="btn btn-primary" onClick={get}>Submit</button>
            
            
    <h1>hi</h1>
        
    {
                state.todos.map(item => (
            <ul key={item}>{item.id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.description}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.time_due}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.assignee_users}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.completed}</ul>))         
            }
  {
                
            }
            
    </div>
  );
    
    
}

export default App4;