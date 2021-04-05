import axios from 'axios';

import { useHistory } from "react-router-dom";
import React, {useLayoutEffect,useState,useEffect} from 'react';

import Userheader from './Components/Userheader/userheader';
import './trial6.css';

function App6(){
    
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
        
       <div className="row-1">
      <Userheader/>
      </div>
      <div className="row">
        <div className="col" id="group6">
   
                  <h1>Groups</h1>
                
       <div></div>
                
        </div>
      
                <div className="col" id="tasks6">

                            <h1>Tasks</h1>
        
                    <div className="row" id="tasks_list"> 
                
                                  <div className="col-1">                       

        {state.todos.map(item => (<ul key={item}>{item.id}</ul>))}


                                  </div>   
        
                                  <div className="col-3">                       

         {state.todos.map(item => (<ul key={item}>{item.description}</ul>))}


                                  </div> 
        
                                  <div className="col-3" >                       

           {state.todos.map(item => (<ul key={item}>{item.time_due}</ul>))}

                                  </div>
        
                                <div className="col-2" >                       

           {state.todos.map(item => (<ul key={item}>{item.completed}</ul>))}

                                  </div>
        
                                <div className="col" >                       

          

                                  </div>

                    </div>




                </div>
      </div>

   
 
            
    </div>
  );
    
    
}

export default App6;