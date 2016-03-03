import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { postsSelector, list } from '../ducks/posts';
import Posts from '../views/posts';

export class Timeline extends Component {
  componentDidMount() {
    this.props.list();
  }

  render() {
    const { posts } = this.props;

    return (
      <div>
        <Posts posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  posts: postsSelector
});

export default connect(mapStateToProps, { list })(Timeline);
