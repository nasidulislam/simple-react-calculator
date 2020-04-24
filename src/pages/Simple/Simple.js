import React from 'react';
import './Simple.scss';
import content from './content';

// other imports
import classList from '../../core/js/classList';

export default function Simple(props) {
    return (
        <div className={classList(content.containerClass, props.classList)}>Simple</div>
    )
}