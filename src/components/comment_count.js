import React from 'react';

import {MessageSquare} from 'react-feather';

import Badge from 'react-bootstrap/Badge';

const CommentCount = (props) => {
    return (
        <div style={{position: 'relative'}}>
            <MessageSquare />
            <Badge variant="success" className='badge_button rounded-circle'>13</Badge>
        </div>
    )
}

export default CommentCount;