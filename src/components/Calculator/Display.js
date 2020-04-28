import React from 'react';
import content from './content';

// other imports
import classList from '../../core/js/classList';

export default function Display(props) {
    function handleSecondaryDisplay() {
        let secondaryDisplay = props.firstInput + ' ' + props.operator + ' ' + props.secondInput;

        return secondaryDisplay;
    }

    function handlePrimaryDisplay() {
        let primaryDisplay = props.result;

        return primaryDisplay;
    }

    return(
        <div className={classList(content.display.containerClass, props.classList)}>
            <div className={content.display.secondaryDisplayContainerClass}>
                {handleSecondaryDisplay()}
            </div>
            <div className={content.display.primaryDisplayContainerClass}>
                {handlePrimaryDisplay()}
            </div>
        </div>
    )
}