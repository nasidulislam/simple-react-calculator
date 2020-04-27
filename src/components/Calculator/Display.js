import React from 'react';
import content from './content';

// other imports
import classList from '../../core/js/classList';

export default function Display(props) {
    return(
        <div className={classList(content.display.containerClass, props.classList)}>
            <div className={content.display.secondaryDisplayContainerClass}>
                {props.firstInput} {' ' + props.operator + ' '} {props.secondInput}
            </div>
            <div className={content.display.primaryDisplayContainerClass}>
                {props.result}
            </div>
        </div>
    )
}
