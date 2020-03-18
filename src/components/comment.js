import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const Comment = (props) => {
    return (
        <Container fluid className="mt-1">
            <Row>
                <Col xs={2} className='d-flex justify-content-end align-items-center p-0'>
                    <Image className="" src={require("../assets/user.png")} style={{width: "40px"}} roundedCircle />
                </Col>
                <Col xs={10} className="d-flex flex-column justify-content-center">
                    <p className="mb-0">Jane Doe</p>
                    <small className="mb-0">Lemme guess, There was a guy with corona at the station</small>
                    <small>19 minutes ago</small>
                </Col>
            </Row>
            <hr />
        </Container>
    )
}

export default Comment;