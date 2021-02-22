//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'; 
import ProductBody from './Components/ProductBody';
import Footer from './Components/Footer';
import ProductView from './Components/ProductView';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/" component={ProductBody}/>
          <Route path="/ProductView" component={ProductView}/>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
