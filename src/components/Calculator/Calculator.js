import React from 'react';
import './Calculator.scss';
import content from './content';

// other imports
import classList from '../../core/js/classList';

export default function Calculator(props) {
    return (
        <div className={classList(content.containerClass, props.classList)}>
            {props.text}
        </div>
    )
}