import React from 'react';

import {Heart} from 'react-feather';

import Badge from 'react-bootstrap/Badge';

const HeartButton = (props) => {
    return (
        <div style={{position: 'relative'}}>
            <Heart />
            <Badge variant="danger" className='badge_button rounded-circle'>8</Badge>
        </div>
    )
}

export default HeartButton;