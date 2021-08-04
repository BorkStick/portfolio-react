import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home"
import About from "./components/About"
import Projects from './components/Projects'
import Contact from './components/Contact'
import data from './data/data';

function App() {
  return (
    // <BrowserRouter>
    // <Switch>
    //   <Route component={Home} path='/' exact />
    //   <Route component={About} path='/about' />
    //   <Route component={Projects} path='/projects' />
    //   <Route component={Contact} path='/contact' />
    // </Switch>
    // </BrowserRouter>
    <Home />
    
  )
}

export default App;
