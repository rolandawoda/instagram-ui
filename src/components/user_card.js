import React from 'react';

import {Link} from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


const UserCard = (props) => {
    return (
        <Card className="mr-4 ml-4 mb-4 pt-3" style={{width: '200px', height: '200px'}}> 
            <Image className="mx-auto align-center mb-3" src={require("../assets/user.png")} style={{width: "80px"}} roundedCircle />
            <Card.Body className="p-0 d-flex flex-column align-items-center">
                <Card.Title className="mb-0">Simeon Panda</Card.Title>
                <Button variant="link">
                    <Link  to='/profile' className='text-decoration-none'>View</Link>
                </Button>
            </Card.Body>
        </Card>
    )
}

export default UserCard