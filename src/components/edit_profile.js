import React from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import CenteredLayout from './center_layout';

import {Edit} from 'react-feather'


const EditProfile = (props) => {
    return (
        <CenteredLayout>
            <Container className="d-flex justify-content-center mt-5">
                <Card  className="p-3" style={{width: '500px'}}>
                    <div  class="mx-auto d-flex flex-column align-items-center" style={{width: '200px'}}>
                        <div className="bg-danger rounded-circle mb-3 d-flex align-items-center justify-content-center" style={{width: "50px", height: '50px'}}>
                            <Edit size={24} color='white'/>
                        </div>
                        <h4 className="mb-3">Edit Profile</h4>
                        <Image className="mx-auto align-center mb-3" src={require("../assets/user.png")} style={{width: "50px"}} roundedCircle />
                        <Button>UPLOAD IMAGE</Button>
                    </div>
                    <Form className="mt-5">
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="email" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>About</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Button variant="primary" type="submit" block>
                            Save
                        </Button>
                    </Form>
                </Card>
            </Container>
        </CenteredLayout>
    )
}

export default EditProfile;