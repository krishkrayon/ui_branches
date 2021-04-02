/* ######################   Styling   ########################### */
import './home.css';


/* ######################  Components ########################### */
import Homeheader from './Components/Homeheader/homeheader';


/* ######################    Images   ########################### */
import logo from './Images/wd.png';


/* ######################    Links    ########################### */
import 'bootstrap/dist/css/bootstrap.css';



function Home() {
  return (      
    <div className="home">
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
       
        <div className="row"> 
            <div className="col-1"/>
            <div className="col">
                <div className="text">
                <h1 className="mesh">MESH</h1>
                </div> 
                <img src={logo} alt="Paris" className="center" alt="logo"/>
            </div>
            <div className="col-1 ml-auto"/>
        </div>
    </div>
  );
}

export default Home;


