import axios from 'axios';

import { useHistory } from "react-router-dom";

function App6(){
    
    var arr = [{a : 1},{a: 2},{a: 3}];
    
    function tmp(b)
    {
        return b.a;
        
            
        
    }
    
    return (
    <div>
            { arr.map(tmp) }
    </div>
  );
    
    
}


function App7(){
    
    var arr = {a : 1};
    
    
    
    
    function tmp(a)
    {
        console.log(typeof(a))  
        return a.a;
        
          
        
    }
    
    return (
    <div>
            { Object.keys(arr).map(tmp) }
    </div>
  );
    
    
}



function App8(){
    
    var arr = {a : 1};
    

    
    return (
    <div>
            { Object.keys(arr).map(tmp=>(<p>{arr.a}</p>)) }
    </div>
  );
    
    
}


function App5(){
    console.clear();
            var arr = {};
    var arr2 = [];
     var r = [];
     var r2 = [];
    var r3 =[];
    let history = useHistory();
    
    axios.get("https://themeshapp.herokuapp.com/main/show/",{
  headers: {'Authorization': "Token " + localStorage.getItem("token")}
  }).then((response) => {
 
        console.log("done");
        console.log("response");
         console.log(response);
          switch(response.status)
              {
                case 200:
             console.log("response.data");
                      console.log(response.data);
            console.log(response.data[0]);
                      console.log(response.data[1]);
                      
            {/*localStorage.setItem("token",response.data.token);
            console.log(localStorage.getItem("token"));  */}
            arr = {...response.data[1]}  
                      
            arr2 ={...response.data}
                      
            
                      
            r = Object.values(arr2);
            r2 = Object.keys(arr2);     
            r3 = Object.entries(response.data[1])
                      
                   console.log("r");
                       console.log(r);
                       console.log("r2");
                       console.log(r2);  
                      console.log("r3");
                      console.log(typeof(r3));
                      console.log(typeof(r3[0]));
                      console.log(r3);
                      console.log(Array.isArray(arr))
                      console.log(Array.isArray(r3))
                      console.log(Array.isArray(r2))
                      
           console.log("arr");
                       console.log(arr);
                      console.log(arr.description);
             console.log(typeof(arr));
                      console.log(typeof(arr2));
                      console.log("arr2");
                      console.log(arr);
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
        
    

    
    return (
    <div>
            { Object.keys(arr).map(tmp=>(<p>arr.tmp</p>)) }
            
            { arr2.map(t =>(<p>{t.key}</p>))}
            { r3.map((t,index) => (<p key={index}>t[0]</p>))}
            <p>hi</p>
    </div>
  );
    
}





export default App5;
























