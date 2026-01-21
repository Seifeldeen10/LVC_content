import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import InvestmentStrategy from './pages/InvestmentStrategy';
import Portfolio from './pages/Portfolio';
import Networks from './pages/Networks';
import News from './pages/News';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about-us' component={AboutUs} />
        <Route path='/investment-strategy' component={InvestmentStrategy} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/networks/scientific-global' component={Networks} />
        <Route path='/networks/regional-commercialization' component={Networks} />
        <Route path='/news' component={News} />
        <Route path='/resources' component={Resources} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;