//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'; 
import ProductBody from './Components/ProductBody';
import Footer from './Components/Footer';
import ProductView from './Components/ProductView';
import { Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path="/"><ProductBody/></Route>
      <Route path="/ProductView"><ProductView/></Route>
      <Footer/>
    </div>
  );
}

export default App;
