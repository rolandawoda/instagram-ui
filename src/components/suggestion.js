import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';



const Suggestion = (props) => {
    return (
        <Row className="mb-3 pl-2">
        <Col md={2} className="d-flex justify-content-center">
            <Image className="mx-auto align-center" src={require("../assets/user.png")} style={{width: "40px"}} roundedCircle />
        </Col>
            <Col md={10} className="d-flex justify-content-between align-items-center">
                <div>
                    <h6 className="mb-0">Sofit_ng</h6>
                    <small>Follows you</small>
                </div>
                <small>Follow</small>
            </Col>
        </Row>
    )
}

export default Suggestion;