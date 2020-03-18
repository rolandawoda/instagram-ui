import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import SideMenu from './side_menu';


const Layout = (props) => {
    return (
    <Container className="flex-grow-1 mt-5" style={{maxWidth: "1000px", overflow: 'hidden'}}>
        <Row style={{height: '100%'}}> 
            <Col md={8}  className="flex-grow-1 pt-0 pl-4 pr-4" style={{height: '100%', maxHeight: '100%', overflow: 'auto'}} >
                {props.children}
            </Col>
            <Col md={4}>
               <SideMenu />
            </Col>
        </Row>
    </Container>)
}

export default Layout;