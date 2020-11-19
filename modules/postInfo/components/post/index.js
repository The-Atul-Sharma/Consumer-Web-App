import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function Post(props) {
  const { postDetails } = props;

  return (
    <div className="post">
      <p className="post__title">{postDetails.title}</p>
      <div className="post__description">
        <p className="post__sub-title">Description</p>
        <p className="post__body">{postDetails.body}</p>
      </div>
    </div>
  );
}

Post.propTypes = {
  postDetails: PropTypes.object,
};
