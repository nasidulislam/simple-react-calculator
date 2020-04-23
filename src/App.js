import React, { useState } from 'react';
import content from './content';

// pages import
import Simple from './pages/Simple/Simple';
import Scientific from './pages/Scientific/Scientific';

// component import
import Nav from './components/Nav/Nav';
import Option from './components/Option/Option';

// other imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import classList from  './core/js/classList';

// contains global styles
import './App.css';

function App() {
  const types = content.states.types;
  const nav = content.nav;

  // hooks
  const [view, setView] = useState(types.simple);
  return (
    <div className={content.containerClass}>
      <Router>
        <div className={classList(content.classList.navContainerClass)}>
          <nav>
            <ul>
              {Object.keys(nav).map(idx => (
                <Nav
                  key={idx}
                  index={idx}
                  path={nav[idx].path}
                  name={nav[idx].name}
                />
              ))}
            </ul>
          </nav>

          <Switch>
           <Route path='/scientific'>
                <Scientific />
           </Route>
           <Route path='/'>
                <Simple />
           </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
