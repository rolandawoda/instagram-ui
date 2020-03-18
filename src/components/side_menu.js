import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

import Story from './stories';
import Suggestion from './suggestion';

const SideMenu = (props) => {
    return (
        <>
             <Row>
                <Col md={4} className="d-flex justify-content-center">
                    <Image className="mx-auto align-center" src={require("../assets/user.png")} style={{width: "50px"}} roundedCircle />
                </Col>
                    <Col md={8}>
                        <h6 className="mb-0">rolandawoda</h6>
                        <small>Awoda Roland</small>
                    </Col>
                </Row>
                <Card className="p-3 mt-4">
                        <div className="d-flex justify-content-between mb-3">
                            <small>Stories</small>
                            <small>Watch All</small>
                        </div>

                        {[1,2,3].map(() =>   <Story />)}
                        
                </Card>

                <Card className="p-3 mt-4">
                        <div className="d-flex justify-content-between mb-3">
                            <small>Suggestions For You</small>
                            <small>Sees All</small>
                        </div>

                        {[1,2,3].map(() =>   <Suggestion />)}
                        
                </Card>
        </>
    )
}

export default SideMenu;