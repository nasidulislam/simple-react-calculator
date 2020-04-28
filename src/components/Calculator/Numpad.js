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
import percentage from '../../core/icons/numbers/percentage.png';
import square from '../../core/icons/numbers/square-root.png';
import power from '../../core/icons/numbers/to-the-power.png';

export default function Numpad(props) {
    return (
        <div className={classList(content.numpad.containerClass, props.classList)}>
            <div className={content.numpad.numberRowClass}>
                <IconButton icon={percentage} onClick={props.onClick} value='%'  />
                <IconButton icon={square} onClick={props.onClick} value='square' />
                <IconButton icon={power} onClick={props.onClick} value='power' />
            </div>
            <div className={content.numpad.numberRowClass}>
                <IconButton icon={seven} onClick={props.onClick} value='7'  />
                <IconButton icon={eight} onClick={props.onClick} value='8'  />
                <IconButton icon={nine} onClick={props.onClick} value='9' />
            </div>
            <div className={content.numpad.numberRowClass}>
                <IconButton icon={four} onClick={props.onClick} value='4'  />
                <IconButton icon={five} onClick={props.onClick} value='5'  />
                <IconButton icon={six} onClick={props.onClick} value='6'  />
            </div>
            <div className={content.numpad.numberRowClass}>
                <IconButton icon={one} onClick={props.onClick} value='1'  />
                <IconButton icon={two} onClick={props.onClick} value='2'  />
                <IconButton icon={three} onClick={props.onClick} value='3'  />
            </div>
            <div className={content.numpad.numberRowClass}>
                <IconButton icon={zero} onClick={props.onClick} value='0'  />
                <IconButton icon={decimal} value='.' classList={content.numpad.decimalIconButtonClass} onClick={props.onClick}  />
                <IconButton icon={equal} onClick={props.onClick} value='='  />
            </div>
        </div>
    )
}