import './App.css';
import About from './Routes/About.js';
import Contact from './Routes/Contact.js';
import Home from './Routes/Home.js';
import Service from './Routes/Service.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
         
          <Route path='/' exact component={Home} />
          <Route path='/service' exact component={Service} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
