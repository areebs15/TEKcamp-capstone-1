import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
function Header() {
    return (
   
        <header className="App-header">
          <div>
            <img src={process.env.PUBLIC_URL + "/Images/SLogo.PNG"} />
            <p>Snowboard inc.</p>
          </div>
          <nav>
            <div id="navig">
              <Router>
                <Link to="/">Home</Link>
                <Link to="/ProductView">Product View</Link>
              </Router>
            </div>
          </nav>
          
        </header>
        )
    }

export default Header;
    