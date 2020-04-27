import React, { useState } from 'react';
import content from './content';

// pages import
import Simple from './pages/Simple/Simple';
import Scientific from './pages/Scientific/Scientific';

// component import
import Nav from './components/Nav/Nav';

// other imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import classList from  './core/js/classList';

// contains global styles
import './App.scss';

function App(props) {
  const types = content.states.types;
  const nav = content.nav;

  // hooks
  const [view, setView] = useState(types.simple);
  function setCalcView(event) {
    const pathname = (event.nativeEvent.path[0].pathname).replace(/\//g, '');
    const currentView = pathname === '' ? types.simple : types.scientific;
    setView(currentView);
  }

  function handleClick(event) {
    console.log(event.target.value);
  }
  return (
    <div className={content.containerClass}>
      <Router>
        <div>
          <nav className={classList(content.classList.navContainerClass)}>
            <ul>
              {Object.keys(nav).map(idx => (
                <Nav
                  key={idx}
                  index={idx}
                  path={nav[idx].path}
                  name={nav[idx].name}
                  onClick={setCalcView}
                />
              ))}
            </ul>
          </nav>

          <Switch>
           <Route path='/scientific'>
                <Scientific />
           </Route>
           <Route path='/simple'>
            <Simple
              onClick={handleClick}
            />
           </Route>
           <Route path='/'>
                <Simple
                  onClick={handleClick}
                />
           </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
