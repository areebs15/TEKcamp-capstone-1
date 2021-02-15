import React from 'react';
function Header() {
    return (
   
        <header className="App-header">
          <div>
            <img src={process.env.PUBLIC_URL + "/Images/SLogo.PNG"} />
            <p>Snowboard inc.</p>
          </div>
          <nav>
            <div id="navig">
              <a href="#shopping-container">Cart</a>
              <a href="#">Home</a>
            </div>
          </nav>
        </header>
        )
    }

export default Header;
    