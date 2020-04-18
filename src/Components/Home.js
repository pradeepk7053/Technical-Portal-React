import React from 'react'
import './Home.css'
  
 const Home = () => {
    return (
        <div >
              <div className="banner">
                <div className="container">
                    <div className="banner-text">
                    <div className="banner-heading">
                        Welcome  
                    </div>
                    <div className="banner-sub-heading">
                        Found here  tech news various gadgets information
                    </div>
                       <form> 
                        <input  className="form-control" placeholder="Search for..."/>
                        </form>
                    </div>
                </div>
            </div>

            
        </div>
        
    );

}
export  default Home;

