import { Link } from 'react-router-dom';
function Footer() {
    return (
   
        <footer className="App-footer">
        <div>
          Thanks For Browsing!
        </div>
        <nav>
          <div id="navig">
            <Link to="/">Home</Link>
            <Link to="/ProductView">Product View</Link>
          </div>
        </nav>
      </footer>
        )
    }

export default Footer;