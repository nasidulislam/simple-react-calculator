import React from 'react';
import content from './content';

// component imports
import IconButton from '../IconButton/IconButton';

// other imports
import classList from '../../core/js/classList';
import addition from '../../core/icons/numbers/addition.png';
import division from '../../core/icons/numbers/division.png';
import multiplication from '../../core/icons/numbers/multiplication.png';
import negative from '../../core/icons/numbers/negative.png';
import clear from '../../core/icons/numbers/clear.png';

export default function Operator(props) {
    return (
        <div className={classList(content.operators.containerClass, props.classList)}>
            <IconButton icon={clear}  />
            <IconButton icon={division}  />
            <IconButton icon={multiplication}  />
            <IconButton icon={negative}  />
            <IconButton icon={addition}  />
        </div>
    )
}