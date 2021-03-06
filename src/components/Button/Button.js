import React from 'react';
import './Button.scss';
import content from './content';

// other imports
import classList from '../../core/js/classList';

const Button = (props) => {
    return (
        <div className={classList(content.containerClass, props.classList)}>
            {props.text}
        </div>
    )
}

export default Button;