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

function App() {
  const types = content.states.types;
  const nav = content.nav;

  // hooks
  const [view, setView] = useState(types.simple);
  const [firstInput, handleFirstInput] = useState('');
  const [secondInput, handleSecondInput] = useState('');
  const [operator, handleOperator] = useState('');
  const [result, handleResult] = useState('');

  function setCalcView(event) {
    const pathname = (event.nativeEvent.path[0].pathname).replace(/\//g, '');
    const currentView = pathname === '' ? types.simple : types.scientific;
    setView(currentView);
  }

  function handleClick(event) {
    const value = event.target.value;
    const stringValue = value.toString();

    if(!isNaN(value)) {
      // its a number

      if(operator === '') {
        // if operator doesn't exist, then its first input
        let _firstInput = firstInput.toString() + stringValue;
        handleFirstInput(_firstInput);
      } else {
        // its the second input since operator exists
        let _secondInput = secondInput.toString() + stringValue;
        handleSecondInput(_secondInput);
      }
    } else if(value === '='){
      // calculate result
      console.log('result');
    } else {
      // clicked element is an operator
      // stop grabbing further inputs as first input
      // and start grabbing and appending as second input
      handleOperator(value);
    }
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
