import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader';

import './style.scss';

export default class InfiniteScroll extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    children: PropTypes.element,
    onLoad: PropTypes.func,
  };

  state = { prevY: 0 };

  componentDidMount() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };
    
    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);
  }

  handleObserver(entities) {
    const { prevY } = this.state;

    const y = entities[0].boundingClientRect.y;
    
    if (prevY > y) {
      this.props.onLoad();
    }

    this.setState({ prevY: y });
  }

  render() {
    const { isLoading, children } = this.props;

    return (
      <div className="infinite-scroll">
        <div className="infinite-scroll__children">{children}</div>
        <div ref={loadingRef => (this.loadingRef = loadingRef)}>
          { isLoading ? <Loader /> : null }
        </div>
      </div>
    );
  }
}
