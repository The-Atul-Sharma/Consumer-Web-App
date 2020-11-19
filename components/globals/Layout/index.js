import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../Header';

import './style.scss';

export default function Layout(props) {
  const { children } = props;

  return (
    <div className="layout">
      <Navbar />
      <div>
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};