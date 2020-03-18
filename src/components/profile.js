import React from 'react';

import {Link} from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import CenteredLayout from './center_layout';
import CustomTabs from './custom_tabs';

const Profile = () => {
    return (
        <CenteredLayout>
            <Card style={{ width: '900px', maxWidth: "900px", height: '90%', maxHeight: '90%'}} className="d-flex flex-column mt-2 pt-4 pl-5 pr-5 pb-0">
                <Row className="justify-content-center align-items-center mb-3">
                    <Col md={5} className="d-flex justify-content-center">
                        <Image className="mx-auto align-center" src={require("../assets/user.png")} style={{width: "150px"}} roundedCircle />
                    </Col>
                    <Col md={6}>
                        <div className="d-flex flex-column">
                            <div className="d-flex justify-content-between align-items-end"> 
                                <h2 className="mb-0">rolandawoda</h2>
                                <Button variant="light" className="ml-2">
                                    <Link to="updateprofile" className='text-decoration-none'>
                                        Edit Profile
                                    </Link>
                                </Button>
                                <Button variant="danger" className="ml-2">Delete</Button>
                                {false && <Button variant="danger" className="ml-2">Follow</Button>}
                                {false && <Button variant="danger" className="ml-2">Unfollow</Button>}
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                                <small>4 Posts</small>
                                <small>87 Followers</small>
                                <small>103 Following</small>
                            </div>
                        </div>
                        <h4 className="mt-3 mb-0">Roland Awoda</h4>
                        <small>Joined May 2011</small>
                    </Col>
                </Row>
                <CustomTabs />
            </Card>
        </CenteredLayout>
    )
}

export default Profile;