import React from 'react';
import './IconButton.scss';
import content from './content';

// other imports
import classList from '../../core/js/classList';

export default function IconButton(props) {
    return (
        <div className={classList(content.containerClass, props.classList)}>
            <button onClick={props.onClick} value={props.value}>
                <img src={props.icon} alt={props.alt}></img>
            </button>
        </div>
    )
}