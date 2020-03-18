import React from 'react';

import {Link} from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import CenteredLayout from './center_layout';

const Login = (props) => {
    return(
        <CenteredLayout className='justify-content-center'>
            <Card className="p-4" style={{width: '400px'}}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" block>
                    <Link to="/" className="text-decoration-none text-light d-block">Login</Link>    
                </Button>
            </Form>
            </Card>
        </CenteredLayout>
    )
}

export default Login;