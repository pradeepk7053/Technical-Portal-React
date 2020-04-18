import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';
import {
  BrowserRouter ,
  Switch,
  Route,
} from "react-router-dom";
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import News from './Components/News';
import Laptops from './Components/Laptops';
import SmartphoneCollections from './Components/SmartphoneCollections';


function App() {
  return (
    <BrowserRouter>
    <div className="App">

      
          < Header/>
       <Switch>
            
            <Route exact path ="/" component={Home}/>
            <Route path="/ContactUs" component={ContactUs}/>
            <Route path="/SignIn" component={SignIn}/>
            <Route path="/SignUp" component={SignUp}/>
            <Route path="/News" component={News}/>
            <Route path="/SmartphoneCollections" component={SmartphoneCollections}/>
            <Route path="/Laptops" component={Laptops}/>



      </Switch>
     
      </div>

      <Footer/>

    </BrowserRouter>
 
    
  );
}
export default App;

