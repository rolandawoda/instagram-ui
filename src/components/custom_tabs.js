import React from 'react';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Post from './post';
import UserCard from './user_card';


const CustomTabs = (props) => {
    return (
        <div className='flex-grow-1 d-flex flex-column custom_tab' style={{overflowY: 'auto', maxHeight: '400px'}}>
            <Tabs defaultActiveKey="posts" transition={false} id="noanim-tab-example">
                <Tab eventKey="posts" title="POSTS">
                  {[1,2,3].map(() => <Post />)}
                </Tab>
                <Tab eventKey="follower" title="FOLLOWERS">
                    <div className="d-flex justify-content-start align-content-start flex-wrap"> 
                        {[1,2,3,4,5].map(() => <UserCard />)}
                    </div>
                </Tab>
                <Tab eventKey="following" title="FOLLOWING">
                    <div className="d-flex justify-content-start align-content-start flex-wrap"> 
                        {[1,2,3,4,5].map(() => <UserCard />)}
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default CustomTabs;