import React from 'react';
import './Calculator.scss';
import content from './content';

// component imports
import Display from './Display';
import Numpad from './Numpad';

// other imports
import classList from '../../core/js/classList';

export default function Calculator(props) {
    return (
        <div className={classList(content.containerClass, props.classList)}>
            <Display />
            <Numpad />
        </div>
    )
}