import React from 'react';
import content from './content';

// other imports
import classList from '../../core/js/classList';

export default function Display(props) {
    return(
        <div className={classList(content.display.containerClass, props.classList)}>
            {props.result}
        </div>
    )
}
