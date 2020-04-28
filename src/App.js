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
import math from  './core/js/math';

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

  function clearAll() {
    handleFirstInput('');
    handleSecondInput('');
    handleOperator('');
    handleResult('');
  }

  function handleClick(event) {
    const value = event.target.value;
    const stringValue = value.toString();

    if(!isNaN(value) || value === '.') {
      // its a number or decimal

      if(operator === '') {
        // if operator doesn't exist, then its first input
        let _firstInput = firstInput.toString() + stringValue;
        handleFirstInput(_firstInput);
      } else {
        // its the second input since operator exists
        let _secondInput = secondInput.toString() + stringValue;
        handleSecondInput(_secondInput);
      }
    } else if(value === '=') {
      // calculate result
      const _result = math.handleMath(Number(firstInput), Number(secondInput), operator);
      handleResult(_result);
    } else if(value === 'clear') {
      clearAll();
    } else {
      // clicked element is an operator

      if(firstInput !== '' && secondInput !== '') {
        // user is chaining calculations
        // calculate result, put that in as first input, clear second input
        const _result = math.handleMath(Number(firstInput), Number(secondInput), operator);
        handleResult(_result);
        handleFirstInput(_result);
        handleSecondInput('');
      }
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
              firstInput={firstInput}
              secondInput={secondInput}
              operator={operator}
              result={result}
            />
           </Route>
           <Route path='/'>
                <Simple
                  onClick={handleClick}
                  firstInput={firstInput}
                  secondInput={secondInput}
                  operator={operator}
                  result={result}
                />
           </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
