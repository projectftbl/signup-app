import React, { Component } from 'react';
import moment from 'moment';

export default class FromNow extends Component {
  constructor(props) {
    super(props);
    this.state = this.fromNow();
  }

  componentDidMount() {
    this.interval = setInterval(_ => {
      this.setState(this.fromNow());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fromNow() {
    return { now: moment(this.props.date).fromNow() };
  }

  render() {
    const { style } = this.props;

    return <span style={style}>{this.state.now}</span>;
  }
};