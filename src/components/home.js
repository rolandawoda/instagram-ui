import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from './home_layout';
import AddStatus from './add_status';
import Post from './post';

const Home = (props) => {
    return (
        <Layout>
            <Row>
                <Col xs={12} className="mb-5">
                    <AddStatus />
                </Col>
                <Col>
                    {[1,2,3,4].map(() =>  <Post />)}
                </Col>
            </Row>
      </Layout>
        
    )
}

export default Home;