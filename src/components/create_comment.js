import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CreateComment = (props) => {
    return (
        <Row>
            <Col xs={10}>
                <Form.Control as="textarea" rows="3" />
            </Col>
            <Col xs={2} className="d-flex flex-column justify-content-end">
                <Button variant="light">Post</Button>
            </Col>
        </Row>
       
    )
}

export default CreateComment;