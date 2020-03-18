import React from 'react';

import Container from 'react-bootstrap/Container';

const AppContainer = (props) => {
    return (
        <Container fluid className="d-flex flex-column p-0"  style={{height: '100vh', maxHeight: '100vh', overflow: 'hidden', overflowY: 'scroll'}}> 
             {props.children}
        </Container>
    )
}

export default AppContainer;