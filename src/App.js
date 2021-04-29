import './App.css';
import {BrowserRouter as Router, Switch,Route } from "react-router-dom"
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import About from './Components/About';



import Nav from './Components/Nav';
function App() {
  return (
    <Router>
      <div className="app">
      <Nav/>
      <Switch>
      <Route exact path="/" component={Home} />
   <Route exact path="/about" component={About} />
   <Route exact path="/contact" component={Contact} />  
   <Route exact path="/projects" component={Projects} />

       </Switch>
      <Footer/>
      </div>
      </Router>);
}

export default App;
