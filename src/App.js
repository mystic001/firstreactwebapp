
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Product';
import Services from './pages/Services';
import About from './pages/AboutUs';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
<Router>
<Navbar/>
<Switch>
  <Route path = "/" exact component = {Home}/>
  <Route path = "/products" component = {Products}/>
  <Route path = "/services" component = {Services}/>
  <Route path = "/sign-up" component = {About}/>
</Switch>
</Router>
    
    </div>
  );
}

export default App;
