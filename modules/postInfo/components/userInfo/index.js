import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function UserInfo(props) {
  const { userDetails } = props;

  return (
    <div className="user-info">
      <p className="user-info__title">
        {userDetails[0].name}
        <span className="user-info__sub-title">@{userDetails[0].username}</span>
      </p>
      <div className="user-info__contact">
        <p className="user-info__contact-title">Contact Information</p>
        <div className="user-info__detail">
          <p className="user-info__detail-title">Phone</p>
          <p>{userDetails[0].phone}</p>
        </div>
        <div className="user-info__detail">
          <p className="user-info__detail-title">Email</p>
          <p>{userDetails[0].email}</p>
        </div>
        <div className="user-info__detail">
          <p className="user-info__detail-title">Website</p>
          <p>{userDetails[0].website}</p>
        </div>
        <div className="user-info__detail">
          <p className="user-info__detail-title">Company</p>
          <p>{userDetails[0].company.name}</p>
        </div>
        <div className="user-info__detail">
          <p className="user-info__detail-title">Address</p>
          <p>{userDetails[0].address.suite}, {userDetails[0].address.street}, {userDetails[0].address.city}, {userDetails[0].address.zipcode}</p>
        </div>
      </div>
    </div>
  );
}

UserInfo.propTypes = {
  userDetails: PropTypes.array,
};
