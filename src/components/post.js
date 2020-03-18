import React from 'react';

import Card from 'react-bootstrap/Card';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import {Trash} from 'react-feather'; 

import CreateComment from './create_comment';
import HeartButton from './heart';
import CommentCount from './comment_count';
import Comment from './comment';

const Post = (props) => {
    return (
        <Card className="p-2 mb-5 mt-4">
            <div className="d-flex align-items-center">
                <Image className="m-3 " src={require("../assets/user.png")} style={{width: "40px"}} roundedCircle />
                <div className="d-flex flex-column mr-auto">
                    <small>Jane Doe</small>
                    <small>19 minutes ago</small>
                </div>
                <Trash color="red" size={24} />
            </div>
            <Card.Body className="pt-0 pb-0">
                    <p>
                        The strangest thing happened at the train station today
                    </p>
                    <div className="d-flex">
                        <HeartButton />
                        <span className="m-2" />
                        <CommentCount  />
                    </div>
            </Card.Body>
            <hr />
            <CreateComment />
            <span className="m-3"/>
            {[1,2,3].map(() => <Comment />)}
        </Card>
    )
}

export default Post;