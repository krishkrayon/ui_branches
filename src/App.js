

/* ######################   Styling   ########################### */
import './App.css';


/* ######################  Components ########################### */
import Home from './Pages/home';


/* ######################    Links    ########################### */
import { Router,Route, Switch } from "react-router";
import {HashRouter,BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Home/>
      
    </div>
  );
}

export default App;
