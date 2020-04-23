import React from 'react';
import './Button.scss';

// other imports
import content from './content';
import classList from '../../core/js/classList';

const Button = (props) => {
    return (
        <div className={classList(content.containerClass, props.classList)}>
            {props.text}
        </div>
    )
}

export default Button;