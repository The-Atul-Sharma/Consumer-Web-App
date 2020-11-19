import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Post from './components/post';
import UserInfo from './components/userInfo';

import { getPost, getUserDetails } from '../../apis/post';

import './style.scss';

export default function PostInfo(props) {
  const { userId, postId } = props;
  const [postDetails, setPostDetails] = useState({});
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    getPost(postId).then(res => {
      setPostDetails(res);
    });

    const userParams = { id: userId };

    getUserDetails(userParams).then(res => {
      setUserDetails(res);
    });
  }, []);


  return (
    <div className="post-info">
      <Post postDetails={postDetails} />
      { userDetails.length ? <UserInfo userDetails={userDetails} /> : null }
    </div>
  );
}

PostInfo.propTypes = {
  userId: PropTypes.string,
  postId: PropTypes.string,
};
