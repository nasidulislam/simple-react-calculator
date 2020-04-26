import React from 'react';
import content from './content';

// component imports
import IconButton from '../IconButton/IconButton';

// other imports
import classList from '../../core/js/classList';
import one from '../../core/icons/numbers/001-one.png';
import two from '../../core/icons/numbers/002-two.png';
import three from '../../core/icons/numbers/003-three.png';
import four from '../../core/icons/numbers/004-four.png';
import five from '../../core/icons/numbers/005-five.png';
import six from '../../core/icons/numbers/006-six.png';
import nine from '../../core/icons/numbers/007-nine.png';
import zero from '../../core/icons/numbers/008-zero.png';
import eight from '../../core/icons/numbers/009-eight.png';
import seven from '../../core/icons/numbers/010-seven.png';
import equal from '../../core/icons/numbers/equal.png';
import decimal from '../../core/icons/numbers/decimal.png';

export default function Numpad(props) {
    return (
        <div className={classList(content.numpad.containerClass, props.classList)}>
            <div className={content.numpad.numberRowClass}>
                <IconButton icon={seven}  />
                <IconButton icon={eight}  />
                <IconButton icon={nine}  />
            </div>
            <div className={content.numpad.numberRowClass}>
                <IconButton icon={four}  />
                <IconButton icon={five}  />
                <IconButton icon={six}  />
            </div>
            <div className={content.numpad.numberRowClass}>
                <IconButton icon={one}  />
                <IconButton icon={two}  />
                <IconButton icon={three}  />
            </div>
            <div className={content.numpad.numberRowClass}>
                <IconButton icon={zero}  />
                <IconButton icon={decimal} classList={content.numpad.decimalIconButtonClass}  />
                <IconButton icon={equal}  />
            </div>
        </div>
    )
}