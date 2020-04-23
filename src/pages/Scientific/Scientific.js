import React from 'react';
import './Scientific.scss';
import content from './content';

// other imports
import classList from '../../core/js/classList';

export default function Scientific(props) {
    return (
        <div className={classList(content.containerClass, props.classList)}></div>
    )
}