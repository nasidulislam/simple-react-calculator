import React from 'react';
import './Simple.scss';
import content from './content';

// component imports
import Calculator from '../../components/Calculator/Calculator';

// other imports
import classList from '../../core/js/classList';

export default function Simple(props) {
    return (
        <div className={classList(content.containerClass, props.classList)}>
            <Calculator
                onClick={props.onClick}
                firstInput={props.firstInput}
                secondInput={props.secondInput}
                operator={props.operator}
                result={props.result}
            />
        </div>
    )
}