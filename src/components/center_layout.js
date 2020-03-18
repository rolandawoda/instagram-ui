import React from 'react';

import Container from 'react-bootstrap/Container';

const CenteredLayout = (props) => {
    let classes = 'p-0 d-flex flex-column align-items-center flex-grow-1 pb-2' + ' ' + props.className
    return (
        <Container className={classes} style={{height: '100vh', maxHeight: '100vh'}}>
            {props.children}
        </Container>

    )
}

export default CenteredLayout;