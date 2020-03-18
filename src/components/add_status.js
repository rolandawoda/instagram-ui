import React from 'react';

import Card from 'react-bootstrap/Card';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


const AddStatus = (props) => {
    return (
        <Card>
            <div className="d-flex ">
                <Image className="m-3 " src={require("../assets/user.png")} style={{width: "40px"}} roundedCircle />
                <small className="ml-2 align-self-center">Katty Perry</small>
            </div>
            <Card.Body>
                    <FormControl as="textarea" aria-label="With textarea" placeholder="What's on your mind, Perry?"/>
            </Card.Body>
            <div className="d-flex justify-content-end pr-4 pb-4">
                <Button>Update Status</Button>
            </div>
        </Card>
       
    )
}

export default AddStatus;