import React from 'react';
import './Calculator.scss';
import content from './content';

// component imports
import Display from './Display';
import Numpad from './Numpad';
import Operators from './Operators';

// other imports
import classList from '../../core/js/classList';

export default function Calculator(props) {
    return (
        <div className={classList(content.containerClass, props.classList)}>
            <Display
                firstInput={props.firstInput}
                secondInput={props.secondInput}
                operator={props.operator}
                result={props.result}
            />
            <div className={content.buttonsContainerClass}>
                <Numpad onClick={props.onClick} />
                <Operators onClick={props.onClick} />
            </div>
        </div>
    )
}