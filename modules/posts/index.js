import React, { Component } from 'react';
import Link from 'next/link';

import InfiniteScroll from '../../components/InfiniteScroll';
import Table from '../../components/Table';

import { getPosts } from '../../apis/posts';
import { postsHeader } from '../../constants/';

import './style.scss';

export default class Posts extends Component {
  state = {
    posts: [],
    isPostLoading: false,
    currentPage: 0,
  };

  componentDidMount() {
    const { currentPage } = this.state;

    this.onLoadPosts(currentPage);
  }

  onLoadPosts = () => {
    const { posts, currentPage } = this.state;

    this.setState({ isPostLoading: true });

    const params = {
      _page: currentPage + 1,
      _limit: 30,
    }

    getPosts(params).then(res => {
      this.setState({
        posts: [...posts, ...res],
        isPostLoading: false,
        currentPage: currentPage + 1,
      });
    });
  }

  renderPostColumn = (post) => (
    <Link
      key={post.id}
      href={{
        pathname: '/post/[postId]/',
        query: { postId: post.id, user: post.userId, },
      }}
    >
      <tr>
        <td>{post.id}</td>
        <td>{post.userId}</td>
        <td>{post.title}</td>
      </tr>
    </Link>
  )

  render() {
    const { isPostLoading, posts } = this.state;

    return (
      <div className="posts">
        <InfiniteScroll
          isLoading={isPostLoading}
          onLoad={this.onLoadPosts}
        >
          <Table
            tableHeader={postsHeader}
            tableData={posts}
            renderTableColumn={this.renderPostColumn}
          />
        </InfiniteScroll>
      </div>
    );
  }
}
